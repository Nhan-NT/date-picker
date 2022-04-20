export const totalPanelVisible = 42
export const firstMonthInYear = 1
export const lastMonthInYear = 12
const getDaysInMonth = (month, year) => {
    const date = new Date(year, month - 1, 1);
    let days = [];
    while (date.getMonth() === month - 1) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}
const formatDate = (dateValue) => {
    let date = dateValue.getDate()
    let month = dateValue.getMonth() + 1
    let year = dateValue.getFullYear()
    if(date < 10) {
        date = `0${date}`
    }
    if(month < 10) {
        month = `0${month}`
    }
    return `${date}/${month}/${year}`
}
export {
    getDaysInMonth,
    formatDate
}
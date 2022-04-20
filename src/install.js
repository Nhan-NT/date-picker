import DatePicker from "./components/DatePicker.vue";

const DatePickerSimple = {
    install(Vue) {
        Vue.component("date-picker", DatePicker);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(DatePickerSimple);
}

export default DatePickerSimple;
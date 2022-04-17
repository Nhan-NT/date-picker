<template>
  <input type="text" placeholder="Select Date..." v-model="chooseDate">
  <div class="date-choose-popup">
    <div class="picker-value">
      <i class="fa-solid fa-angles-left" @click="handleYear('prev')"></i>
      <i class="fa-solid fa-chevron-left" @click="handlePrevMonth"></i>
      <div class="info-picker">
        <span class="month-value">{{renderMonthLabel(month !== 12 ? month + 1 : 1)}}</span>
        <span class="date-value">{{year}}</span>
      </div>

      <i class="fa-solid fa-chevron-right" @click="handleNextMonth"></i>
      <i class="fa-solid fa-angles-right" @click="handleYear('next')"></i>
    </div>
    <day-picker :days="days" :prevMonthDays="prevMonthDays" :selectedDate="selectedDate" :nextMonthDays="nextMonthDays" @setChooseDate="setChooseDate"/>
  </div>
</template>

<script>
import DateMixins from "@/mixins/DateMixins.js"
import DayPicker from "@/components/DayPicker";
export default  {
  components: {DayPicker},
  mixins : [DateMixins],
  props : {
    dateValue : {
      type : String,
      defaultValue : ''
    }
  },
  data() {
    return {
      year : '',
      month : '',
      days : [],
      prevMonthDays : [],
      nextMonthDays : [],
      chooseDate : '',
      selectedDate : "",
    }
  },
  computed : {
    currentYear() {
      return new Date().getFullYear()
    },
    currentMonth() {
      return new Date().getMonth()
    },
    renderMonthLabel() {
      return dateValue => {
        return this.months.find(item => item.value === dateValue)?.label
      }
    }
  },
  mounted() {
    this.year = this.currentYear;
    this.month = this.currentMonth
    this.getDayInMonth();
    this.getDayInPrevMonth();
    this.getDayInNextMonth();
    if(this.dateValue && this.dateValue !== '') {
      this.initDate()

    }
  },
  methods : {
    handleYear(action) {
      action === 'prev' ? this.year -- : this.year++
    },
    initDate() {
      this.chooseDate = this.dateValue
      const values = this.chooseDate.split('/')
      this.month = parseInt(values[1]) - 1
      this.year = parseInt(values[2])
      this.selectedDate = this.chooseDate
    },
    handlePrevMonth() {
      if(this.month === 1) {
        this.month = 12
        this.year --
      }else{
        this.month --
      }
    },
    handleNextMonth(){
      if(this.month === 12) {
        this.month = 1
        this.year ++
      }else{
        this.month ++
      }
    },
    getDayInMonth(){
      const currentMonth = this.month === 12 ? 0 : this.month
      const date = new Date(Date.UTC(this.year, this.month, 1));
      let days = [];
      while (date.getUTCMonth() === currentMonth) {
        days.push(new Date(date));
        date.setUTCDate(date.getUTCDate() + 1);
      }
      this.days = days
    },
    getDayInPrevMonth () {
      let prevMonth = this.month === 1 ? 0 : this.month - 1
      let year = this.month === 1 ?this.year - 1: this.year
      const date = new Date(Date.UTC(year, prevMonth, 1));
      let days = [];
      while (date.getUTCMonth() === prevMonth) {
        days.push(new Date(date));
        date.setUTCDate(date.getUTCDate() + 1);
      }
      this.prevMonthDays = days
    },
    getDayInNextMonth () {
      let prevMonth = this.month === 12 ? 1 : this.month === 11 ? 0 : this.month + 1
      let year = this.month === 12 ?this.year + 1: this.year
      const date = new Date(Date.UTC(year, prevMonth, 1));
      let days = [];
      while (date.getUTCMonth() === prevMonth) {
        days.push(new Date(date));
        date.setUTCDate(date.getUTCDate() + 1);
      }
      this.nextMonthDays = days
    },
    setChooseDate(date) {
      this.formatDate(date)
    },
    formatDate(dateValue) {
      let date = dateValue.getDate()
      let month = dateValue.getMonth() + 1
      let year = dateValue.getFullYear()
      if(date < 10) {
        date = `0${date}`
      }
      if(month < 10) {
        month = `0${month}`
      }
      this.chooseDate = `${date}/${month}/${year}`
      this.selectedDate = this.chooseDate
    }
  },
  watch : {
    month() {
      this.getDayInMonth()
      this.getDayInPrevMonth()
      this.getDayInNextMonth();
    },
    year(){
      this.getDayInMonth()
      this.getDayInPrevMonth()
      this.getDayInNextMonth();
    },
    dateValue(val) {
      if(val && val !== '') {
        this.initDate()

      }
    }
  }

}
</script>
<style lang="scss" scoped>
  .date-choose-popup {
    width: 200px;
    height : 200px;
    border: 1px solid #DCDCDC;
    box-shadow:  2px 2px 4px 2px #DCDCDC;
    color :  rgba(90,90,90,0.87);
    cursor: pointer;
    padding: 5px;
    margin-top: 5px;
    .picker-value {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3px 10px;
      font-size: 12px;
      .info-picker{
        .month-value {
          margin-right: 7px;
        }
      }
      i {
        font-size: 10px;
        color : rgba(90,90,90,0.87)
      }
    }

  }
</style>

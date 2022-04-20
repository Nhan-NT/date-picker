<template>
  <div class="date-input">
    <input type="text" placeholder="Select Date..." v-model="selectedDate">
    <i class="fa-solid fa-calendar-day" @click="isPanelOpen = !isPanelOpen"></i>
  </div>
  <div class="date-choose-popup" v-show="isPanelOpen">
    <div class="picker-value">
      <i class="fa-solid fa-angles-left" @click="handleYear('prev')"></i>
      <i class="fa-solid fa-chevron-left" @click="handlePrevMonth"></i>
      <div class="info-picker">
        <span class="month-value" @click="handleSelectMonth">{{renderMonthLabel(month)}}</span>
        <span class="year-value">{{year}}</span>
      </div>

      <i class="fa-solid fa-chevron-right" @click="handleNextMonth"></i>
      <i class="fa-solid fa-angles-right" @click="handleYear('next')"></i>
    </div>
    <month-picker v-show="isPickerMonth" @setSelectedMonth="setSelectedMonth"/>
    <day-picker v-show="isPickerMonth === false" :days="days" :prevMonthDays="prevMonthDays" :selectedDate="selectedDate" :nextMonthDays="nextMonthDays" @setSelectedDate="setSelectedDate"/>
  </div>
</template>

<script>
import DateMixins from "@/mixins/DateMixins.js"
import DayPicker from "@/components/DayPicker";
import {firstMonthInYear, formatDate, getDaysInMonth, lastMonthInYear} from "@/utils/dateUtils";
import MonthPicker from "@/components/MonthPicker";
export default  {
  components: {MonthPicker, DayPicker},
  mixins : [DateMixins],
  props : {
    dateValue : {
      type : String,
      defaultValue : ''
    },
    handleChange : {
      type : Function,
      defaultValue: () => {}
    }
  },
  data() {
    return {
      year : '',
      month : '',
      days : [],
      prevMonthDays : [],
      nextMonthDays : [],
      selectedDate : '',
      isPanelOpen : false,
      pickedDate : '',
      isPickerMonth : false,
      keyValue : 1,
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
      this.selectedDate = this.dateValue
      const values = this.selectedDate.split('/')
      this.month = parseInt(values[1])
      this.year = parseInt(values[2])
    },
    handlePrevMonth() {
      if(this.month === firstMonthInYear) {
        this.month = lastMonthInYear
        this.year --
      }else{
        this.month --
      }
    },
    handleNextMonth(){
      if(this.month === lastMonthInYear) {
        this.month = firstMonthInYear
        this.year ++
      }else{
        this.month ++
      }
    },
    getDayInMonth(){
      this.days =  getDaysInMonth(this.month,this.year )
    },
    getDayInPrevMonth () {
      const prevMonth = this.month === firstMonthInYear ? lastMonthInYear : this.month - 1
      const year = this.month === firstMonthInYear ? this.year - 1 : this.year
      this.prevMonthDays = getDaysInMonth(prevMonth, year)
    },
    getDayInNextMonth () {
      const nextMonth = this.month === lastMonthInYear ? firstMonthInYear : this.month + 1
      const year = this.month === lastMonthInYear ? this.year + 1 : this.year
      this.nextMonthDays = getDaysInMonth(nextMonth, year)

    },
    setSelectedDate(date) {
      this.selectedDate = formatDate(date)
      this.pickedDate = date
    },
    handleSelectMonth() {
      this.isPickerMonth = true
      this.month = ''
    },
    setSelectedMonth(month) {
      this.month = month
      this.isPickerMonth = false
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
    },
    pickedDate(val){
      this.handleChange(formatDate(val), val)
    }
  }

}
</script>
<style lang="scss" scoped>
  .fa-calendar-day {
    color : rgba(90,90,90,0.87);
    position: absolute;
    right: 20px;
    font-size: 12px;
    top: 4px;
    cursor: pointer;
  }
  .date-input{
    width: 200px;
    position : relative;
  }
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

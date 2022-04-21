<template>
  <div class="date-input">
    <input type="text" placeholder="Select Date..." v-model="selectedDate">
    <i class="fa-solid fa-calendar-day" @click="isPanelOpen = !isPanelOpen"></i>
  </div>
  <div class="date-choose-popup" v-show="isPanelOpen">
    <div class="picker-value">
      <div v-if="isPickerYear">
        <i class="fa-solid fa-angles-left" @click="handleYearPicker('prev')"></i>
      </div>
      <div v-else>
        <i class="fa-solid fa-angles-left" @click="handleYear('prev')"></i>
        <i  class="fa-solid fa-chevron-left" @click="handlePrevMonth"></i>
      </div>

      <div class="info-picker" v-if="!isPickerYear">
        <span class="month-value"  @click="handlePickerMonth">{{renderMonthLabel(month)}}</span>
        <span class="year-value" @click="handlePickerYear">{{year}}</span>
      </div>
      <div class="info-picker" v-else>
        <span class="year-value">{{yearRange}}</span>
      </div>
      <div v-if="!isPickerYear" >
        <i class="fa-solid fa-chevron-right" @click="handleNextMonth"></i>
        <i class="fa-solid fa-angles-right" @click="handleYear('next')"></i>
      </div>
      <div v-else>
        <i class="fa-solid fa-angles-right" @click="handleYearPicker('next')"></i>
      </div>
    </div>
    <month-picker v-show="isPickerMonth" @setSelectedMonth="setSelectedMonth" :currentMonth="month"/>
    <year-picker v-show="isPickerYear" @setSelectedYear="setSelectedYear" :yearInRange="yearInRange" :currentYear="year"/>
    <day-picker v-show="!isPickerMonth && !isPickerYear" :days="days" :prevMonthDays="prevMonthDays" :selectedDate="selectedDate" :nextMonthDays="nextMonthDays" @setSelectedDate="setSelectedDate"/>
  </div>
</template>

<script>
import DateMixins from "@/mixins/DateMixins.js"
import DayPicker from "@/components/DayPicker";
import {firstMonthInYear, formatDate, getDaysInMonth, lastMonthInYear, totalYearPanel} from "@/utils/dateUtils";
import MonthPicker from "@/components/MonthPicker";
import YearPicker from "@/components/YearPicker";
export default  {
  components: {YearPicker, MonthPicker, DayPicker},
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
      isPickerYear : false,
      keyValue : 1,
      yearPickerAction : "",
      yearInRange : [],
      yearRange : ''
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
    this.getYearInRange();
    if(this.dateValue && this.dateValue !== '') {
      this.initDate()

    }
  },
  methods : {
    handleYear(action) {
      action === "prev" ? this.year -- : this.year ++

    },
    handleYearPicker(action) {
      let yearList = this.yearInRange
      if(action === "prev"){
        let newYearMapPrev = []
        for(let i = yearList[0]; i > yearList[0] - totalYearPanel; i --) {
          newYearMapPrev.unshift(i)
        }
        this.yearInRange = newYearMapPrev
      }else if(action === "next"){
        let newYearMapNext = []
        for(let i = yearList[yearList.length - 1]; i < yearList[yearList.length - 1] + totalYearPanel; i ++) {
          newYearMapNext.push(i)
        }
        this.yearInRange = newYearMapNext
      }
    },
    getYearInRange() {
      let year = []
      const currentYear = new Date().getFullYear()
      for(let i = currentYear; i < currentYear + 12; i++) {
        year.push(i)
        this.yearInRange = year
      }
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
      this.isPanelOpen = false
    },
    setSelectedMonth(month) {
      this.month = month
      this.isPickerMonth = false
      this.selectedDate = `${this.selectedDate.split("/")[0]}/${month}/${this.year}`
    },
    setSelectedYear(year) {
      this.year = year
      this.isPickerYear = false
      this.selectedDate = `${this.selectedDate.split("/")[0]}/${this.month}/${year}`
    },
    handlePickerMonth() {
      this.$nextTick(() => {
        this.isPickerMonth = !this.isPickerMonth
      })
    },
    handlePickerYear() {
      this.$nextTick(() => {
        this.isPickerYear = !this.isPickerYear
      })
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
    yearInRange(value){
      this.yearRange = `${value[0]} - ${value[value.length - 1]}`
    },
    selectedDate(val){
      this.handleChange(val.toString())
    },
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
  .fa-angles-left {
    margin-right: 10px;
  }
  .fa-angles-right {
    margin-left: 10px;
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

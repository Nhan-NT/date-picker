<template>
  <div class="day-picker">
      <div class="day-label">
        <span v-for="(label,index) in dayLabel" :key="index">{{label}}</span>
      </div>
    <div class="day-render">
      <span v-for="(day, index) in dates" :key="index" @click="setChooseDate(day)" :class="selectedDate === formatDate(day) && 'active-date'">{{day.getDate()}}</span>

    </div>
  </div>
</template>

<script>
const totalPanelVisible = 42
export default  {
  data() {
    return {
      dayLabel: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      dates: [],
    }
  },
  props : {
    days : {
      type : Array,
      default : () => []
    },
    prevMonthDays : {
      type : Array,
      default : () => []
    },
    nextMonthDays : {
      type : Array,
      default : () => []
    },
    selectedDate : {
      type : String,
      default : () => ''
    }
  },
  computed : {
    formatDate() {
      return dateValue => {
          let date = dateValue.getDate()
          let month = dateValue.getMonth()
          let year = dateValue.getFullYear()
          if(date < 10) {
            date = `0${date}`
          }
          if(month < 10) {
            month = `0${month}`
          }
          return `${date}/${month}/${year}`
      }
    }
  },
  methods : {
    setChooseDate(date) {
      this.$emit("setChooseDate", date)
    },
  },
  watch : {
    days(newValue) {
      let prevDateVisible = []
      if(newValue[0].getDay() !== 1) {
        prevDateVisible = this.prevMonthDays.slice(this.prevMonthDays.length - newValue[0].getDay() , this.prevMonthDays.length)
      }
      let totalDate = prevDateVisible.concat(this.days)
      let nextDateVisible = this.nextMonthDays.slice(0, totalPanelVisible - totalDate.length)
      this.dates = totalDate.concat(nextDateVisible)
    },
  }
}
</script>
<style scoped lang="scss">
  .day-picker {
    margin-top: 5px;
    padding: 0 5px;
    font-size: 12px;
    .day-label{
      display: flex;
      flex-direction: row;
      margin-bottom: 5px;
      span {
        text-align: center;
        width: 27.25px;
      }
    }
    .day-render{
      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto;
      span {
        padding: 5px;
        text-align: center;
        &:hover {
          background: rgba(197,255,236,0.87);
        }
      }
      .active-date {
        background: rgba(197,255,236,0.87);
      }
    }
  }
</style>

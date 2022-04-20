<template>
  <div class="day-picker">
    <div class="day-label">
      <span v-for="(label,index) in dayLabel" :key="index">{{ label }}</span>
    </div>
    <div class="day-render">
      <span v-for="(day, index) in dates" :key="index" @click="setSelectedDate(day)"
      :class="[isDateActive(day) && 'active-date', isVisibleDate(day) && 'visible-date' ]">{{ day.getDate() }}</span>
    </div>
  </div>
</template>

<script>
import {formatDate, totalPanelVisible} from "@/utils/dateUtils";
export default {
  data() {
    return {
      dayLabel: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      dates: [],
      visibleDate : [],
    }
  },
  props: {
    days: {
      type: Array,
      default: () => []
    },
    prevMonthDays: {
      type: Array,
      default: () => []
    },
    nextMonthDays: {
      type: Array,
      default: () => []
    },
    selectedDate: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    setSelectedDate(day) {
      this.$emit("setSelectedDate", day)
    },
  },
  computed : {
    isDateActive() {
      return dateValue => {
        return this.selectedDate === formatDate(dateValue)
      }
    },
    isVisibleDate(){
      return dateValue => {
        return this.visibleDate.includes(dateValue)
      }
    }
  },
  watch: {
    days(newValue) {
      let prevDateVisible = []
      if (newValue[0].getDay() !== 0) {
        prevDateVisible = this.prevMonthDays.slice(this.prevMonthDays.length - newValue[0].getDay(), this.prevMonthDays.length)
      }
      let prevDateAndCurrentDate = prevDateVisible.concat(this.days)
      let nextDateVisible = this.nextMonthDays.slice(0, totalPanelVisible - prevDateAndCurrentDate.length)
      this.visibleDate = prevDateVisible.concat(nextDateVisible)
      this.dates = prevDateAndCurrentDate.concat(nextDateVisible)
    },
  }
}
</script>
<style scoped lang="scss">
.day-picker {
  margin-top: 5px;
  padding: 0 5px;
  font-size: 12px;

  .day-label {
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;

    span {
      text-align: center;
      width: 27.25px;
    }
  }

  .day-render {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;

    span {
      padding: 5px;
      text-align: center;

      &:hover {
        background: rgba(197, 255, 236, 0.87);
      }
    }

    .active-date {
      background: rgba(197, 255, 236, 0.87);
    }
    .visible-date {
      opacity: 0.3;
    }
  }
}
</style>

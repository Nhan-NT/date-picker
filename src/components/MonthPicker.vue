<template>
  <div class="month-picker">
    <p class="month-item" v-for="month in months" :key="month.label" :class="currentMonth === month.value && 'active-month'" @click="setSelectedMonth(month.value)">{{month.label}}</p>
  </div>
</template>
<script>
  import DateMixins from "@/mixins/DateMixins";

  export default {
    mixins : [DateMixins],
    props  : {
      currentMonth : {
        type : String,
        default : () => ''
      }
    },
    methods : {
      setSelectedMonth(month) {
        this.$emit("setSelectedMonth", month)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .month-picker {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 5px;
    .month-item {
      background-color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
      text-align: center;
      margin: 0;
      padding: 14px;
      &:hover {
        background: rgba(197, 255, 236, 0.87);
      }
    }
    .active-month {
      background: rgba(197, 255, 236, 0.87);
    }
  }

</style>
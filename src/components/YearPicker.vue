<template>
  <div class="month-picker">
    <p class="month-item" v-for="year in yearInRange" :key="year" :class="currentYear === year && 'active-year'" @click="setSelectedYear(year)">{{year}}</p>
  </div>
</template>
<script>
import DateMixins from "@/mixins/DateMixins";
export default {
  mixins : [DateMixins],
  props : {
    yearInRange : {
      type : Array,
      default : () => []
    },
    currentYear : {
      type : String,
      default : () => ''
    }
  },
  methods : {
    setSelectedYear(year) {
      this.$emit("setSelectedYear", year)
    },

  },
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
  .active-year {
    background: rgba(197, 255, 236, 0.87);

  }
}

</style>
<template>
  <date-picker :dateValue="date" :handleChange="handleChange"/>
</template>

<script>

import DatePicker from "@/components/DatePicker";
export default {
  name: 'App',
  components: {DatePicker},
  data() {
    return {
    date : "11/10/2022"
    }
  },

}
</script>

<style>

</style>

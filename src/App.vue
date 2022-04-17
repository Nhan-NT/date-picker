<template>
  <DateInput :dateValue="date"/>
</template>

<script>

import DateInput from "@/components/DateInput";
export default {
  data() {
    return {
    date : "16/10/2022"
    }
  },
  name: 'App',
  components: {DateInput},
}
</script>

<style>

</style>

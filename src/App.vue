<template>
  <DateInput :dateValue="date"/>
</template>

<script>

import DateInput from "@/components/DateInput";
export default {
  data() {
    return {
    date : ""
    }
  },
  name: 'App',
  components: {DateInput},
}
</script>

<style>

</style>

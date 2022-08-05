<template>
  <div id="home">
    <ShowTime />
    <ApiFetch />
  </div>
</template>
<script>

import ApiFetch from '../components/ApiFetch.vue'
import ShowTime from '../components/ShowTime.vue'
export default {
  components: {
    ApiFetch,
    ShowTime
  }
}
</script>

<style>

</style>

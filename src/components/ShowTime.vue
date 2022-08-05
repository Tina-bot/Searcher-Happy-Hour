<template>
  <div class="time">
    <span>{{ time }}</span>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  mounted () {
    setInterval(() => {
      this.time = moment().format('MMMM Do YYYY, h:mm:ss a')
    }, 1000)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@1,300&display=swap');
.time {
  width: 50%;
  text-align: center;
  padding: 20px;
font-family: 'Josefin Slab', serif;

}
.time span {
  font-size: 1em;
    color: rgba(245, 223, 223, 0.534);
    font-style: italic;
    letter-spacing: 1px;
}
</style>

<template>
  <div id="app">
    <router-link to="/"> 🍷 </router-link> |
    <router-link to="/list"> List </router-link> |
    <router-link to="/details/11046"> Details </router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>

body{
height: 100vh;
padding: 20px;
background-color: #110433;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23DD09BF'/%3E%3Cstop offset='1' stop-color='%23110433'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23091090' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23091090' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
@keyframes gradient {
0% {
background-position: 0% 50%;
}
50% {
background-position: 100% 50%;
}
100% {
background-position: 0% 50%;
}
}
#app{
  margin-top: 20px;

}
a{
text-decoration: none;
color: white;
font-family: 'Josefin Slab', serif;
font-size: 1em;}
 a:hover{
color: black;
font-weight: bold;
}

</style>

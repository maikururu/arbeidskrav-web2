<template>
<main>
  <nav-bar></nav-bar>
  <footer-for></footer-for>
</main>  
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import navBar from "./components/navBar.vue"
import footerFor from "./components/footerFor.vue"

export default {
  name: 'App',
  components: {
    navBar,
    footerFor
  }
}
</script>

<style >
  main{
    background-color: antiquewhite;
    font-family: 'Roboto', sans-serif;
  }
  h4{
    font-size: 95%;
  }
  
</style>

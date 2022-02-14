<template>

  <h1>Hobbier for oss gutta krutt?</h1>
  <p>Dette er bare en test før det skikkelige arbeidet begynner!</p>


  <main>
    <our-hobbies></our-hobbies>
  </main>
</template>

<script>
import OurHobbies from './components/OurHobbies.vue'


export default {
  name: 'App',
  components: {
    OurHobbies
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

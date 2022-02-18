<template>
  <hobby-list></hobby-list>
  <add-hobby></add-hobby>
</template>

<script>
import hobbyList from "../hobbies/hobbyList.vue"
import addHobby from "../hobbies/addHobby.vue"

export default {
  name: 'Home',
  components: {
    hobbyList,
    addHobby
  }
}
</script>
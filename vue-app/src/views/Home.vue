<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Name />
    <Presentation />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Name from '@/components/Name.vue'
import Presentation from '@/components/Presentation.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Name,
    Presentation,
  }
}
</script>

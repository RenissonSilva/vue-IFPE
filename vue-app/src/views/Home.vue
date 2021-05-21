<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Name />
    <Presentation />
  </div>
</template>

<script>
// @ is an alias to /src
import Name from '@/components/Name.vue'
import Presentation from '@/components/Presentation.vue'

export default {
  name: 'Home',
  components: {
    Name,
    Presentation,
  }
}
</script>

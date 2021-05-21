<template>
  <a href="#" @click.prevent="change" class="text-blue-500">Clique para mudar de nome</a>
  <h2>Meu nome é {{ name }}</h2>
</template>

<script>
import { mapState } from 'vuex'

var array_names = ['Reni', 'Killua', 'Gon']

export default {
  computed: {
    ...mapState(['name'])
  },
  methods: {
    change() {
      this.$store.dispatch('changeName', array_names[Math.floor(Math.random() * array_names.length)])
    }
  }
}
</script>
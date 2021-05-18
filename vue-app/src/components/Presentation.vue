<template>
  <h2>Olá, {{ name }}</h2>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['name'])
  },
}
</script>
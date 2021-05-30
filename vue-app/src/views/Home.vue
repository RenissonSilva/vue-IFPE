<template>
  <div class="home">
    <Name />
    <Presentation />
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import Name from '@/components/Name.vue'
import TodoList from '@/components/TodoList.vue'
import Presentation from '@/components/Presentation.vue'

export default {
  name: 'Home',
  components: {
    Name,
    Presentation,
    TodoList,
  }
}
</script>

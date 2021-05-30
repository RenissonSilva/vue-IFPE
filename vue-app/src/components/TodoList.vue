<template>
  <div class="app">
    <hr>
    <h2 class="font-black text-green-700 text-xl my-5">Todo List</h2>
    <div class="justify-items-center mb-5">
        <input placeholder="Digite uma tarefa" v-model="text" class="input-add" />
        <button class="btn-green ml-5" v-on:click="addToList(text)">Adicionar Tarefa</button>
    </div>
    <ol>
      <li class="mb-2" v-for="element in list" v-bind:key="element.id">
        <p class="text-gray-500">{{ element.text }}</p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    addToList(text) {
        this.list.push({
            text,
        });
    },
  },
};
</script>

<style>
    .btn-green {
        @apply py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 w-1/4;
    }
    .input-add {
        @apply focus:ring-green-400 focus:ring-1 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10
    }
</style>
<template>
  <div>About</div>
  <div>HelloWorld:</div>
  <HelloWorld />
  <hr />
  <div>About store: {{ store.state.count }}</div>
  <button @click="add">add count</button>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue';

const store = useStore();

function add() {
  store.dispatch('increment')
}
</script>
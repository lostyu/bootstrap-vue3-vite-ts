<template>
  <div class="box">
    store: {{ store.state.count }}
    <button @click="add">add count</button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();

function add() {
  store.dispatch('increment');
}
</script>

<style scoped lang="scss">
.box {
  background-color: $color;
}
</style>

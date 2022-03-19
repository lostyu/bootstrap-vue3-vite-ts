<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="handleSearch">search</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import request from '@/utils/request';

const name = ref('');

async function handleSearch() {
  if (name.value !== '') {
    // 通过国家名称获取详细内容的API
    // https://restcountries.com/v3.1/name/peru
    const { data } = await request.get(`https://restcountries.com/v3.1/name/${name.value}`);

    console.log(data);
  }
}
</script>

<style scoped></style>

<template>
    <h3>列表渲染</h3>
    <div>
        <p v-for="item of userInfo">{{ item }}</p>
    </div>

</template>
  
<script setup>

import { ref } from 'vue';

const userInfo = ref({
    name:"007",
    age:20,
    sex:"man",
});

</script>
  
<style scoped>

</style>

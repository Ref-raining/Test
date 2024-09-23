<template>
    <h3>条件渲染</h3>
    <div v-if="flag">can you see me? //flag = true</div>
    <div v-else>you can see me. //flag = false</div>
    <br><!-- v-if有较高的切换开销 -->
    <div v-if="type == 'A'">choose A</div>
    <div v-else-if="type == 'B'">choose B</div>
    <div v-else-if="type == 'C'">choose C</div>
    <div v-else>Not A/B/C</div>
    <br><!-- v-show有较高的初始渲染 -->
    <div v-show="fl">v-show显示</div>

</template>
  
<script setup>
import { ref } from 'vue';
    const flag = ref(false);
    const type = ref('g');
    const fl = ref(true);

</script>
  
<style scoped>

</style>
  
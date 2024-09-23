<template>
  <!-- v-bind:简写成 : -->
  <div v-bind:id="ii">id测试</div>
  <div :class="cc">class测试</div>
  <div :title="tt">title测试</div>
  <br>
  <div :="objectOfAttrs">动态多个绑定</div>
  <button :disabled="isbutton">Button</button>
</template>

<script setup>
import { ref } from 'vue';
  const ii = ref('appid');
  const cc = ref('appclass');
  const tt = ref(null);
  const isbutton = ref(false);
  const objectOfAttrs = ref({
    id:'appid',
    class:'appclass',
  })
</script>

<style scoped>

</style>

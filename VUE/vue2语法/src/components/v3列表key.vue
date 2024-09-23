<template>
    <h3>Key属性添加到v-for中</h3>
    <p v-for="(item, index) in names" :key="index">{{ item }}</p>

    <div v-for="item of please" :key="item.id" style="margin-top: 3rem;">
        <p>{{ item.title }}</p>
        <img :src="item.avator" alt="">
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
const names = ref(["111","222","333"]);
const please = ref([
    {
        "id":111,
        "title":"吉伊",
        "avator":"https://cdn.yinghuazy.xyz/jpg/ly1h5kz7tnzefj308c0bujrh.jpg",
    },{
        "id":222,
        "title":"chiikawa",
        "avator":"https://yhdm.one/cover/2022648815.jpg",
    },{
        "id":333,
        "title":"pop",
        "avator":"https://yhdm.one/cover/2022717482.jpg",
    }]
);

</script>
  
<style scoped>

</style>

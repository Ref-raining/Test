<template>
    <h3>列表渲染</h3>
    <p v-for="(array, index) in names">{{ index }} - {{ array }}</p>
    <p v-for="(array, index) of names">{{ index + 1 }} - {{ array }}</p>
    <div style="margin-top: 3rem;">
        <p v-for="item of userInfo">{{ item }}</p>
    </div>
    <div style="margin-top: 3rem;"><!-- (value, key, index)不能改顺序 -->
        <p v-for="(value, key, index) of userInfo">{{ index }}.{{ key }}: {{ value }}</p>
    </div>
    <div v-for="item of please" style="margin-top: 3rem;">
        <p>{{ item.title }}</p>
        <img :src="item.avator" alt="">
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
const names = ref(["111","222","333"]);
const userInfo = ref({
    name:"007",
    age:20,
    sex:"man",
});
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

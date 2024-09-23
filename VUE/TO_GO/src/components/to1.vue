<template>
 
    <input v-model="msgTo"/>
    <button @click="testFunc">发送</button>
    <div>{{ msgTo }}</div>
</template>

<script setup>
import{ ref } from "vue";
const msgTo = ref("")
const msgFrom = ref("")

const testFunc=() =>
{
    fetch('http://localhost:8080/echo/' + msgTo.value,{
        method:'GET',
    })
    .then(response => response.json())
    .then(data => msgFrom.value = data)
}
</script>

<style scoped>

</style>

<template>
    <div>
        <h3>侦听器</h3>
        <button @click="update">修改文本</button>
        <p>{{ message }}</p>
        <button @click="Count">修改数据</button>
        <p v-show="isflag == true">{{ aa }}</p>
    </div>
</template>

<script setup>
import{ ref, watch } from "vue";
    const message = ref('Hello');
    const update=() =>
    {
        if(message.value == 'Hello')
            message.value = 'World';
        else message.value = 'Hello';
    }
    //newValue改变后新数据
    //oldValue改变前旧数据
    watch(message, (newValue, oldValue)=>{
        console.log(newValue, oldValue);
    })

    const aa = ref(0);
    const isflag = ref(true);
    const Count=() =>
    {
        aa.value++;
        if(isflag.value)
            isflag.value = false;
        else isflag.value = true;
    }
    watch(aa, (newValue, oldValue)=>{
        console.log(newValue, oldValue);
    })

</script>

<style scoped>
    div{
        text-align: center;
        color: grey;
        margin-top: 1rem;
        font-size: 1.5rem;
    }
</style>
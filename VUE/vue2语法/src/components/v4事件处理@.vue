
<template>
    <div>
        <h3>{{ count }}</h3>
        <button @click="addCount">同步累加</button>
    </div>
    <div>
        <h3>{{ sentmsg }}</h3>
        <button @click="Sent('sent')">传参</button>
    </div>
    <div>
        <h3>传参过程中获取event</h3>
        <p @click="getName(item, $event)" :key="index"
        v-for="(item, index) in names" >{{ item }}</p>
    </div>

</template>

<script setup>
import{ ref } from "vue";
    const count = ref(0);
    // Vue中event是原生JS对象
    const addCount=(e) =>{
        count.value++;
        e.target.innerHTML = "Add " + count.value;
    }
    const sentmsg = ref('Click↓');
    const Sent=(msg) =>{
        sentmsg.value = msg + count.value++;
    }

    const names = ref(["迷宫干", "夏日狂想曲", "未亡人の雪女"]);
    const getName=(name, event) =>{
        console.log(name);
        console.log(event);
    }
</script>

<style scoped>
    div{
        text-align: center;
        margin-top: 4rem;
    }
    button{
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
</style>
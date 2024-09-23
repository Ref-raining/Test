
<template>
    <div>
        <h2>表单输入绑定</h2>
        <form action="">
            
            <input type="text" placeholder="请输入" v-model="msg">
            <!-- <button @click="update">逆向修改数据</button> -->
            <p @click="update">{{ msg }}</p>
            
            <input type="text" placeholder="失去焦点才响应" v-model.lazy="msgg">
            <p @click="update">{{ msgg }}</p>

            <input type="text" placeholder="失去焦点才响应" v-model.trim="msggg">
            <p @click="update">{{ msggg }}</p>
            <button @click="up()">DD</button>

            <input type="checkbox" id="cbox" v-model="checked">
            <label for="cbox">{{ checked }}</label>
            
        </form>
    </div>
</template>

<script setup>
import{ ref } from "vue";
    const msg = ref('');
    const msgg = ref('');
    const msggg = ref('');
    const f = ref(true);
    const up=() =>
    {
        console.log(0);
    }
    // const update=() =>
    // {
    //     msg.value = '';
    //     msgg.value = '';
    //     msggg.value = '';
    // }
    const checked = ref(false);
</script>

<style scoped>
    div{
        text-align: center;
        color: grey;
        margin-top: 1rem;
    }
    button{
        margin-left: 1rem;
        position: absolute;
    }
    input{
        margin-top: 3rem;
    }
</style>
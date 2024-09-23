
<template>
    <div :class="{ 'active':isActive }">
        <h3>Class</h3>
        <p :class="{ 'active':isActive, 'text-s':textt }">Class绑定样式1</p>
        <p :class="Class_all">Class绑定样式2-简化</p>
        <p :class="[cc1, cc2]">Class绑定样式3-数组引用</p>
        <p :class="[show ? 'c1' : 'c2']">Class绑定样式4-三目运算符</p>
    </div>


</template>

<script setup>
import{ ref } from "vue";
    const isActive = ref(true);
    const textt = ref(true);
    const show = ref(true);
    const Class_all = ref({'c1':true, 'c2':true});
    const cc1 = ref('c1');
    const cc2 = ref('c2');

</script>

<style scoped>
    button{
        margin-top: 0.5rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    .active{
        text-align: center;
        margin-top: 2rem;
        color: blue;
        font-size: 2rem;
    }
    .text-s{
        background-color: grey;
        font-family: 'kaiti';
    }
    .c1{
        margin-top: 2rem;
        color: gold;
        font-family: 'kaiti';
    }
    .c2{
        background-color: indianred;
        font-size: 2rem;
    }
</style>

<template>
    <div :class="{ 'active':isActive }">
        <h3>Style绑定</h3>
        <p :style="{color:sc, fontSize:fonts + 'rem'}">style绑定01</p>
        <p :style="Style_all">style绑定02</p>
        <p :style="[Style_all, cc1]">style绑定02</p>

    </div>


</template>

<script setup>
import{ ref } from "vue";
    const isActive = ref(true);
    const sc = ref('green');
    const fonts = ref(3);
    //动态修改样式写js里
    const Style_all = ref({
        // color:'gold',
        fontSize:'2.5rem',
    });

    const cc1 = ref({
        color:'gold',
    });
    const cc2 = ref('c2');

</script>

//静态修改样式写css里
<style scoped>
    .active{
        text-align: center;
        margin-top: 2rem;
        color: grey;
        font-size: 2rem;
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
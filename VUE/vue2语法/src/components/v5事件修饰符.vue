
<template>
    <div>
        <h3>事件修饰符</h3>
        <a @click.prevent="ClickPrevent" href="https:bilibili.com">bilibili干杯[]~(￣▽￣)~*</a>        
        <div @click="c_div">
        <!-- 子元素冒泡事件会向上传递到根元素，因此.stop可以阻断传播 -->
            <p @click.stop="c_p">测试冒泡click</p>
        </div>
     
    
    </div>
  

</template>

<script setup>
import{ ref } from "vue";
    const ClickPrevent=(event) =>{
        // 阻止默认事件
        // event.preventDefault();
        console.log('click');
    }
    const c_div=() =>{
        console.log('div');
    }
    const c_p=(event) =>{
        // 阻止冒泡事件
        // event.stopPropagation();
        console.log('p');
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
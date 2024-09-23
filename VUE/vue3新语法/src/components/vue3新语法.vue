
<template>
  <div style="margin-top: 3rem;"></div>
  <div style="text-align: center;">
    <!-- 插值表达式 -->
    <p>{{ title }}</p>
    <p>{{ content }}</p>
    <br>
  </div>

  <div style="text-align: center;">
    <h2>{{ count }}</h2>
    <!-- 在html里可以直接改变const的值，在script里只能用.value改变值 -->
    <button @click="add()">累计计数</button>
    <br><br>
    <button @click="count = 0">清空计数</button>
  </div>

  <div style="margin-top: 3rem;"></div>
  <div style="text-align: center;">
    <h3>{{ msg }}</h3>
    <input v-model="input_msg" style="border: 3px solid;"/>
    <button @click="showtext()" style="position: absolute; margin-left: 1rem;">显示文本</button>
  </div>

  <div style="margin-top: 4rem;"></div>
  <div style="text-align: center;">
    <ul><!-- v-for枚举 -->
      <li v-for="(item, index) in msg_list" :key="index">{{ item }}</li>
    </ul>
    <input v-model="input_msgg" style="border: 3px solid;"/>
    <button @click="handleClick()" style="position: absolute; margin-left: 1rem;">发送</button>
  </div>
</template>

<style scoped>

</style>

<script setup>
import{ ref } from "vue";
  const title = ref('这是标题文本');
  const content = ref('这是内容文本');

  const count = ref(520);
  /* 函数运算，count为常数不变，但.value可以改变值 */
  const add=() =>{
    count.value++;
  }

  const msg = ref('请输入文本');
  const input_msg = ref(null);
  const input_msgg = ref(null);
  const showtext=() =>{
    if(input_msg.value != null){
      msg.value = input_msg.value;
      input_msg.value = null;
    }else msg.value = "请输入文本";
  }

  const msg_list = ref( [] );
  const handleClick=() =>{
    if(input_msgg.value != null){
      msg_list.value.push(input_msgg.value);
      input_msgg.value = null;
    }
  }
</script>
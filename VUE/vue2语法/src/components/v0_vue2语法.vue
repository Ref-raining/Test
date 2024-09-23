<template>
    <h3>vue2语法模版</h3>
    <!-- 插值表达式，将数据插值为纯文本 -->
    <p>{{ message }}</p>
    <p>{{ number + 1 }}</p>
    <p>{{ ok ? 'yes' : 'no' }}</p>
    <p>{{ text_reverse }}</p>
    <p>{{ text_reverse.split('') }}</p>
    <p>{{ text_reverse.split('').reverse() }}</p>
    <p>{{ text_reverse.split('').reverse().join('') }}</p>
    <!-- 原始HTML标签 -->
    <p v-html="rawHTML"></p>
  </template>
  
  <style scoped>
  
  </style>
  
  <script>
    export default{
      data(){
        return{
          message:'神奇的魔法',
          number: 10,
          ok: false,
          text_reverse: '这个会反转',
          rawHTML: '<a href="https://www.bilibili.com/">噼里啪啦页面</a>',
        }
      }
    }
  </script>
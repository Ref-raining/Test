
<template>
    <div>
        <h3>数组变化侦测</h3>
        <button @click="addList">表尾添加数据</button>
        <button @click="popList">表尾删除数据</button>
        <br>
        <button @click="shiftList">表头删除数据</button>
        <button @click="unshiftList">表头添加数据</button>
        <br>
        <button @click="spliceList(flag = 1)" >splice操作1</button>
        <button @click="spliceList(flag = 2)" >splice操作2</button>
        <button @click="spliceList(flag = 3)" >splice操作3</button>
        <br>
        <button @click="sortList">排列数据</button>
        <button @click="reverseList">倒转数据</button>
        <ul>
            <li v-for="(item, index) in names" :key="index">{{ item }}</li>
        </ul>
    </div>
    <div>
        <h3>数组1</h3>
        <button @click="concatList">合并数组</button>
        <ul>
            <li v-for="(item, index) in num1" :key="index">{{ item }}</li>
        </ul>
    </div>
    <div>
        <h3>数组2</h3>
        <button @click="concatList">合并数组</button>
        <ul>
            <li v-for="(item, index) in num2" :key="index">{{ item }}</li>
        </ul>
    </div>

</template>

<script setup>
import{ ref } from "vue";
    const num = ref(1);
    const names = ref(["111", "222", "333"]);
    const num1 = ref(["444", "555", "666"]);
    const num2 = ref(["777", "888", "999"]);
        //.push() 向原数组的末尾插入一个或多个元素 
        const addList=() =>{
            //添加，引起UI变化
            names.value.push("push" + num.value++);
            //合并成功，但不会引起UI变化
            // names.value.concat(["concat"]);
            //创建新数组合并，引起UI变化
            names.value = names.value.concat(["concat"]);
        }
        // .pop() 删除原数组中的末尾元素
        const popList=() =>{
            names.value.pop();
        }
        //.shift() 删除原数组中的第一个元素
        const shiftList=() =>{
            names.value.shift();
        }
        //.unshift() 向原数组的数组头插入一个或多个元素
        const unshiftList=() =>{
            names.value.unshift("unshift" + num.value++);
        }
        // .splice() 对原数组进行新增、删除、替换
        /* .splice(start, deleteCount, items1, items2, ……)
        start：数组开始的下标index
        deleteCount：替换、删除的长度
        items：替换的值，若为删除操作，该参数为空*/
        const spliceList=(flag) =>{
            if(flag == 1)   
                names.value.splice(1, 0, "flag == 1");
            else if(flag == 2)   
                names.value.splice(1, 1, "flag == 3");
            else if(flag == 3)   
                names.value.splice(0, 2);
        }
        // .sort() 对原数组进行排序
        const sortList=() =>{
            names.value.sort();
        }
        // .reverse() 对原数组进行逆置
        const reverseList=() =>{
            names.value.reverse();
        }

        const concatList=() =>{
            num1.value = num1.value.concat(num2.value);
        }
    

</script>

<style scoped>
    div{
        /* text-align: center; */
        margin-top: 2rem;
    }
    button{
        margin-top: 0.5rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
</style>

<template>
    <div style="text-align: center; margin-top: 4rem;">
        <h3>{{ (time/10.0).toFixed(1) }}</h3>
        <button @click="t_start" v-show="isRunning == 0">开始</button>

        <button @click="t_stop" v-show="isRunning == 1">停止</button>
        <button @click="t_count" v-show="isRunning == 1">计数</button>
    
        <button @click="t_start" v-show="isRunning == 2">开始</button>
        <button @click="t_end" v-show="isRunning == 2">结束</button>

        <div id="parent">
            <table id="table" v-show="isRunning != 0">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>间隔</th>
                        <th>累计</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import{ ref } from "vue";
    const time = ref(0);
    const isRunning = ref(0);
    const timerInterval = ref(null)

    const t_start=() =>{
        if(isRunning.value == 0 | 2)
        {
            isRunning.value = 1;
            timerInterval.value = setInterval( () =>{time.value++;}, 100);
        }   
    }
    const t_stop=() =>{
        if(isRunning.value == 1)
        {
            clearInterval(timerInterval.value);
            isRunning.value = 2;
        }
    }

    const number = ref(1);
    const btw = ref(0);

    const t_end=() =>{
        if(isRunning.value == 2)
        {
            clearInterval(timerInterval.value);
            time.value = 0;
            isRunning.value = 0;
        }
        number.value = 1;
        btw.value = 0;
        var t_clear = document.querySelector('#table tbody');
        t_clear.innerHTML = ' ';
    }

    const t_count=() =>{
        // 插入行，顺序排列
        // var length = tbody.rows.length;
        // var newRow = tbody.insertRow(length);
        // 插入行，倒序排列
        var newRow = tbody.insertRow(tbody);
        // 插入元素
        var num = newRow.insertCell(0);
        var between = newRow.insertCell(1);
        var sum = newRow.insertCell(2);

        num.innerHTML = number.value++;
        between.innerHTML = (time.value/10.0 - btw.value/10.0).toFixed(1);
        sum.innerHTML = (time.value/10.0).toFixed(1);
        btw.value = time.value;
    }
</script>

<style scoped>
    button{
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    #parent{
        display: flex;
        margin-top: 2rem;
        justify-content: center;
        align-items: center;
    }
    #table{
        text-align: center;
        width: 50%;
        /* height: 400px; */
        border: 2px solid black;
    }
</style>
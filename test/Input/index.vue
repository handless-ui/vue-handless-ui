<template>
    <div>
        输入框只能输入数字：
        <ui-input :format="formatFun" :pipe="pipeFun" v-model="val1"></ui-input>{{ val1 }}
        <button @click="changeVal(1314)">修改值 1314</button>
        <button @click="changeVal('newvalue')">修改值 'newvalue'</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { UiInput } from '../../src/index';

let formatFun = (input: any) => {
    return input;
};

let pipeFun = (newInput: any, oldInput: any) => {
    if (!newInput) return newInput;
    return /^\d+$/.test(newInput) ? newInput : oldInput
};

let val1 = ref(520.12);
// let val1 = ref(520);
let changeVal = (val: any) => {
    val1.value = val;
}
</script>
<style scoped></style>
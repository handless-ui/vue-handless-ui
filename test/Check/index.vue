<template>
    <div>
        <h3>
            喜欢吃的水果包括：
        </h3>
        <ui-check-group v-model="vals">
            <ui-check value="apple"></ui-check>苹果
            <ui-check value="strawberry"></ui-check>草莓
            <ui-check value="watermelon"></ui-check>西瓜
        </ui-check-group>
        <ui-check-group v-model="vals">
            <ui-check value="apple"></ui-check>苹果
            <ui-check value="strawberry"></ui-check>草莓
            <ui-check value="watermelon"></ui-check>西瓜
        </ui-check-group>
        <div>
            选择的是：{{ vals }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { UiCheckGroup, UiCheck } from '../../src/index';

let vals = ref(["apple", "watermelon"]);
</script>
<style scoped>
.ui-check-group {
    padding: 20px;
    display: block;
}

.ui-check {
    display: inline-block;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    margin-left: 20px;
}

.ui-check.checked {
    background-color: red;
}

.ui-check.unchecked {
    border: 2px solid red;
}
</style>
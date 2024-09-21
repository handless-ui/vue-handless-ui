<template>
    <div>
        <h3>
            最喜欢吃的水果：
        </h3>
        <ui-radio-group v-model="val">
            <ui-radio value="apple"></ui-radio>苹果
            <ui-radio value="strawberry"></ui-radio>草莓
            <ui-radio value="watermelon"></ui-radio>西瓜
        </ui-radio-group>
        <div>
            选择的是：{{ val }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { UiRadioGroup, UiRadio } from '../../src/index';

let val = ref("apple");
</script>
<style scoped>
.ui-radio-group {
    padding: 20px;
    display: block;
}

.ui-radio {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-sizing: border-box;
    margin-left: 20px;
}

.ui-radio.checked {
    background-color: red;
}

.ui-radio.unchecked {
    border: 2px solid red;
}
</style>
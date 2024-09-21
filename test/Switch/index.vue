<template>
    <div>
        <h3>
            喜欢吃柚子？
        </h3>
        <ui-switch v-model="val"></ui-switch>
        <div>
            选择的是：{{ val }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { UiSwitch } from '../../src/index';

let val = ref(true);
</script>
<style scoped>
.ui-switch {
    position: relative;
    width: 50px;
    height: 30px;
    display: inline-block;
    border-radius: 15px;
    border: 1px solid #dfdfdf;

    &::before {
        content: " ";
        background-color: #007aff;
        height: 32px;
        border-radius: 15px;
        position: absolute;
        top: -1px;
        left: -1px;
        transition-property: width;
        transition-duration: 300ms;
    }

    &::after {
        content: " ";
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
        position: absolute;
        top: 0;
        transition-property: left;
        transition-duration: 300ms;
    }

    &.off {
        background-color: #ffffff;

        &::before {
            width: 32px;
        }

        &::after {
            left: 0;
        }
    }

    &.on {
        &::before {
            width: 52px;
        }

        &::after {
            left: 20px;
        }
    }
}
</style>
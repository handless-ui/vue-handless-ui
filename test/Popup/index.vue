<template>
    <div>
        <ui-popup v-model="val" @click="doit()">
            <div class="demo-value" @click.stop>
                你好呀！
                <button @click="val = false">关闭</button>
            </div>
        </ui-popup>
        <button @click="val = true">
            点击我试试
        </button>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { UiPopup } from '../../src/index';

let val = ref(false);

onMounted(() => {
    setTimeout(() => {
        val.value = true;
    }, 500);
});

let doit = () => {
    console.log("点击了popup");
};
</script>
<style scoped>
.demo-value {
    width: 200px;
    line-height: 140px;
    text-align: center;
    display: inline-block;
    background-color: red;
    color: white;
    margin: calc(50vh - 70px) calc(50vw - 100px);
}

.ui-popup {
    background-color: rgba(0, 0, 0, 0.7);
}
</style>
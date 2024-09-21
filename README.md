# [vue-handless-ui](https://github.com/handless-ui/vue-handless-ui)
一个基于 Vue 3，面向开发者开发的无头组件库

> 灵感来自 [Headless UI](https://headlessui.com/) 和 [React Hooks](https://react.docschina.org/reference/react/hooks)等，提供类似无头组件的写法，可以完全自定义UI。

<p>
    <a href="https://zxl20070701.github.io/toolbox/#/npm-download?packages=vue-handless-ui&interval=7">
        <img src="https://img.shields.io/npm/dm/vue-handless-ui.svg" alt="downloads">
    </a>
    <a href="https://www.npmjs.com/package/vue-handless-ui">
        <img src="https://img.shields.io/npm/v/vue-handless-ui.svg" alt="Version">
    </a>
    <a href="https://github.com/handless-ui/vue-handless-ui" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/handless-ui/vue-handless-ui?style=social">
    </a>
</p>

<img src="https://nodei.co/npm/vue-handless-ui.png?downloads=true&amp;downloadRank=true&amp;stars=true" alt="NPM">

## 如何使用？

```
npm install --save vue-handless-ui
```

### 全局引入

```js
import VueHandlessUI from "vue-handless-ui";

app.use(VueHandlessUI);
```

### 单独引入

```html
<script setup lang="ts">
import { UiRadioGroup, UiRadio } from "vue-handless-ui";
</script>
```

或

```html
<script setup lang="ts">
import UiRadioGroup from "vue-handless-ui/src/RadioGroup";
import UiRadio from "vue-handless-ui/src/Radio";
</script>
```

下面是具体的组件清单：

- [单选 RadioGroup、Radio](./docs/Radio.md)
- [多选 CheckGroup、Check](./docs/Check.md)
- [开关 Switch](./docs/Switch.md)

## 版权

MIT License

Copyright (c) [zxl20070701](https://zxl20070701.github.io/notebook/home.html) 走一步，再走一步
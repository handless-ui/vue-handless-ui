# 单选 RadioGroup、Radio

## 引入

```js
import { UiRadioGroup, UiRadio } from "vue-handless-ui";
```

## 语法

先定义变量：

```js
let vals = ref();
```

然后在页面中使用即可：

```html
<ui-radio-group v-model="vals">
    <ui-radio value="val1"></ui-radio>条目一
    <ui-radio value="val2"></ui-radio>条目二
    <ui-radio value="val3"></ui-radio>条目三
</ui-radio-group>
```

完整的例子代码你可以访问： [../test/Radio](../test/Radio) 。
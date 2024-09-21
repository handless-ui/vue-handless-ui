# 多选 CheckGroup、Check

## 引入

```js
import { UiCheckGroup, UiCheck } from "vue-handless-ui";
```

## 语法

先定义变量：

```js
let vals = ref([]);
```

然后在页面中使用即可：

```html
<ui-check-group v-model="vals">
    <ui-check value="val1"></ui-check>条目一
    <ui-check value="val2"></ui-check>条目二
    <ui-check value="val3"></ui-check>条目三
</ui-check-group>
```

完整的例子代码你可以访问： [../test/Check](../test/Check) 。
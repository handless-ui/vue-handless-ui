# 输入框 Input

> v0.2.0 新增

## 引入

```js
import { UiInput } from "vue-handless-ui";
```

## 语法

先定义变量：

```js
let val = ref(520.12);
```

然后在页面中使用即可：

```html
<ui-input v-model="val"></ui-input>
```

### Input 属性

| 属性 | 描述 | 说明 | 类型 |
| ------- | ------- | ------- | ------- |
| format | 格式化函数 | 返回格式化后的内容 | function(input){} |
| pipe | 过滤函数 | 可以控制输入内容，应该返回一个新值 | function(newInput, oldInput){} |

完整的例子代码你可以访问： [../test/Input](../test/Input) 。
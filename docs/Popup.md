# 弹出层 Popup

> v0.2.0 新增

## 引入

```js
import { UiPopup } from "vue-handless-ui";
```

## 语法

先定义变量：

```js
let val = ref(false);
```

然后在页面中使用即可：

```html
<ui-popup v-model="val"> 自定义内容 </ui-popup>
```

### Popup 事件

| 属性 | 说明 | 回调参数 |
| ------- | ------- | ------- |
| click | 用户点击弹框的时候触发 | - |

完整的例子代码你可以访问： [../test/Popup](../test/Popup) 。

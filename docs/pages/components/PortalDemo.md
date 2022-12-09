## Portal

将组件挂载到指定的 html dom 节点中

## 代码演示

### 样式引入

```js
import '@zjlabvis/lowcode-index/dist/jianweiComponents.css'
```

### 依赖

依赖`ant-design-vue`的`Base`，确保已引入

```js
import { Base } from 'ant-design-vue';
Vue.use(Base);
``` 

### 用法示例

<PortalDemo />

相关源码如下：

```html
<template>
  <div>
    <div
      class="testPortalContainer"
      :style="{ width: '100%', height: '300px', border: '1px solid black' }"
    ></div>
    <Portal containerSelector=".testPortalContainer">
      <div :style="{ width: '150px', height: '150px', background: 'orange' }">
        这是一段文本
      </div>
    </Portal>
  </div>
</template>
<script>
  import { Portal } from '@zjlabvis/lowcode-index';
  export default {
    components: {
      Portal,
    },
  };
</script>
```

## API

### props 说明

| 属性 | 说明     | 类型     | required | 默认值 |
| :------- | :--------- | :---------- | :------- | :----- |
| containerSelector | 指定 挂载的 HTML DOM 节点 | `string` CSS Selector | true     | 无     |

### 事件

| 事件名 | 说明 | 回调参数 |
| :----- | :--- | :------- |
|        |      |          |

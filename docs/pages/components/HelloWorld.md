## HelloWorld

这是组件概述说明

## 代码演示

### 样式引入

```js
import '@jianweife/lowcode-index/dist/jianweiComponents.css'

```

<HelloWorldDemo />

相关源码如下：

```html
<template>
  <div>
    <div>默认</div>
    <HelloWorld />
    <div>传入msg</div>
    <HelloWorld msg="Hello Vue!" />
  </div>
</template>
<script>
  import { HelloWorld } from '@jianweife/lowcode-index';
  export default {
    components: {
      HelloWorld,
    },
  };
</script>
```

## API

### props 说明

| 属性 | 说明       | 类型   | required | 默认值                  |
| :--- | :--------- | :----- | :------- | :---------------------- |
| msg  | 展示的信息 | `string` | true     | 'Welcome to jianweiFE!' |

### 事件

| 事件名 | 说明 | 回调参数 |
| :----- | :--- | :------- |
|        |      |          |

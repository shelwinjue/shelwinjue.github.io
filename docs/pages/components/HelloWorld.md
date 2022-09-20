## HelloWorld

这是组件概述说明

## 代码演示

<HelloWorld />

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
    name: 'App',
    components: {
      HelloWorld,
    },
  };
</script>

<style></style>
```

## API

### props 说明

| 属性 | 说明       | 类型   | required | 默认值                  |
| :--- | :--------- | :----- | :------- | :---------------------- |
| msg  | 展示的信息 | string | true     | 'Welcome to jianweiFE!' |

### 事件

| 事件名 | 说明 | 回调参数 |
| :----- | :--- | :------- |
|        |      |          |

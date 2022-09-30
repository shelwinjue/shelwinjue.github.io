## 组件描述

可拖拽改变位置和大小的容器组件，拖拽时，不会超过父容器的边界，容器组件默认有如下样式：

```css
{
    position: absolute,
    z-index: 999
}

```

可以通过传入`style`覆盖，另外，改变大小，只允许以下方向：右，下，和右下

## 代码演示

<DivInteractDemo />

相关源码如下：

```html
<template>
  <div class="containerDemo">
    <DivInteract
      :defaultRect="{
        width: 100,
        height: 100,
        left: 10,
        top: 10,
      }"
      @afterChange="afterChange"
      :style="{
        background: '#accbee',
      }"
    >
      <div>拖动我试试吧</div>
    </DivInteract>
  </div>
</template>
<script>
import { DivInteract } from '@jianweife/lowcode-index';
export default {
  components: {
    DivInteract,
  },
  methods: {
    afterChange(data) {
      console.error('+++ afterChange', data);
    },
  },
};
</script>
<style scoped>
.containerDemo {
  position: relative;
  margin: 10px;
  background: white;
  border: 1px dashed #2575fc;
  width: 100%;
  height: 350px;
}
</style>

```

## API

### props 说明

| 属性        | 说明        | 类型     | required | 默认值 |
| :---------- | :---------- | :------- | :------- | :--------|
| defaultRect | 初始的 Rect | `object` | false    | {top: 0,left: 0,width: 300,height: 300}，注意：值必须是 `number` 类型，不能带单位`px` |

### 事件

| 事件名      | 说明  | 回调参数   |
| :---------- | :---------- | :---------------------- |
| afterChange | 当拖拽后，或者改变大小，均会触发回调 | data,当前的 rect，例如： {top: 0,left: 0,width: 300,height: 300} |

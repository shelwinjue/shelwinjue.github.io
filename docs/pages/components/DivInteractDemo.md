## 组件描述

1. 可拖拽改变位置和大小的容器组件，拖拽时，不会超过父容器的边界，容器组件默认有如下样式：

```css
{
    position: absolute,
    z-index: 999
}

```

可以通过传入`style`覆盖

2. 改变大小，只允许以下方向：右，下，和右下

3. 当引入 header 插槽时，只有 header 区域可响应拖拽操作

## 代码演示

### 样式引入

```js
import '@zjlabvis/lowcode-index/dist/jianweiComponents.css'
```

### 用法示例

<DivInteractDemo />




## API

### props 说明

| 属性        | 说明        | 类型     | required | 默认值   |
| :---------- | :---------- | :------- | :------- | :---------- |
| defaultRect | 初始的 Rect | `object` | false    | {top: 0,left: 0,width: 300,height: 300}，注意：值必须是 `number` 类型，不能带单位`px` |

### 事件

| 事件名      | 说明   | 回调参数    |
| :---------- | :-------- | :--------- |
| afterChange | 当拖拽后，或者改变大小，均会触发回调 | data,当前的 rect，例如： {top: 0,left: 0,width: 300,height: 300} |

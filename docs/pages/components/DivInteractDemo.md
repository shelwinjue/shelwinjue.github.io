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
| defaultRect | 初始的 Rect | `object` | false    | `{top: 0,left: 0, right: 0, width: 300,height: 300}`，<br><br>注意：值必须是 `number` 类型，不能带单位`px`。<br><br>如果`placement`传入的是rightTop，那么defaultRect需要传入`{right: xxx, top: xxx, width: xxx, height: xxx}`|
| placement | 默认的位置方向，`leftTop`表示`defaultRect`配置是相对父容器左上位置，`rightTop`表示`defaultRect`配置是相对父容器右上位置，暂时只支持这两个相对位置方向 | `string` | false | leftTop |
| relativeConfig | 初始化时，大小/位置是否相对于父容器成比例缩放布局 | `object` | false |`{width: false, height: false, left: true, right: true, top: true}`, true表示该属性将按照比例进行初始化|

### 事件

| 事件名      | 说明   | 回调参数    |
| :---------- | :-------- | :--------- |
| afterChange | 当拖拽后，或者改变大小，均会触发回调 | data,当前的 rect，例如： {top: 0,left: 0,width: 300,height: 300} |

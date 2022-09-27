## GridInteract

### 原则

行列容器可拖拽改变大小，遵循以下原则：

1. Row(行)，n 个 Row，那么从第 1 个到第 n-1 个 Row，resize 只能调整 bottom 方向，top left right 都不可调整，第 n 个 Row 四个方向均不可调整
2. Col(列)，n 个 Col，那么从第 1 个到第 n-1 个 Col，resize 只能调整 right 方向，top left bottom 都不可调整，第 n 个 Col 四个方向均不可调整。
3. Col，默认 flex 是 1，即均分父容器 Row 的横向空间。当 resize 其中某一个 Col 后，就会变成固定宽度，剩余的没有 resize 的 Col，flex 是 1，均分剩余空间

## 代码演示

<GridInteract />

```html
<template>
  <div class="demo">
    <Layout
      :style="{ height: '100%' }"
      :defaultLayout="[1, 1, 1]"
      :defaultRowLayout="[[1, 1, 1], [2, 1], [1]]"
      @afterLayoutResize="afterLayoutResize"
    >
      <Row>
        <Col :style="{ backgroundColor: '#f7a3a4' }">1</Col>
        <Col :style="{ backgroundColor: '#f7afab' }">2</Col>
        <Col :style="{ backgroundColor: '#f6bcb5' }">3</Col>
      </Row>
      <Row>
        <Col :style="{ backgroundColor: '#b0cffe' }">4</Col>
        <Col :style="{ backgroundColor: '#bedffc' }">5</Col>
      </Row>
      <Row><Col>6</Col></Row>
    </Layout>
  </div>
</template>
<script>
import { Layout, Row, Col } from '@jianweife/lowcode-index';
export default {
  components: {
    Layout,
    Row,
    Col,
  },
  methods: {
    afterLayoutResize(data) {
      console.error('+++ afterLayoutResize', data);
    },
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
  height: 500px;
}
</style>



```

## API

### props 说明

| 属性             | 说明                                                                                                                                                  | 类型  | required | 默认值 |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :---- | :------- | :----- |
| defaultLayout    | 容器的默认布局，控制`Row`的布局，例如：[1, 1, 1]表示 3 行(`Row`),垂直方向 1:1:1 均分                                                                  | Array | true     | 无     |
| defaultRowLayout | Row 容器的默认布局，控制每个`Row`的`Col`布局，例如[[1, 1], [1], [1]]表示第一个 Row 有两个 Col，1:1 均分，第二个 Row 有一个 Col，第三个 Row 有一个 Col | Array | true     | 无     |

### 事件

| 事件名            | 说明             | 回调参数                                                                             |
| :---------------- | :--------------- | :----------------------------------------------------------------------------------- |
| afterLayoutResize | 布局更改后的回调 | data: {layout, rowLayout}, 例如： {layout: [1, 2, 1], rowLayout: [[2, 1], [1], [1]]} |

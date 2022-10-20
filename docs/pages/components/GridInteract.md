## GridInteract

### 原则

行列容器可拖拽改变大小，遵循以下原则：

1. Row(行)，n 个 Row，那么从第 1 个到第 n-1 个 Row，resize 只能调整 bottom 方向，top left right 都不可调整，第 n 个 Row 四个方向均不可调整
2. Col(列)，n 个 Col，那么从第 1 个到第 n-1 个 Col，resize 只能调整 right 方向，top left bottom 都不可调整，第 n 个 Col 四个方向均不可调整。
3. Col，默认 flex 是 1，即均分父容器 Row 的横向空间。当 resize 其中某一个 Col 后，就会变成固定宽度，剩余的没有 resize 的 Col，flex 是 1，均分剩余空间

## 代码演示

### 样式引入

import '@jianweife/lowcode-index/dist/jianweiComponents.css'


<GridInteract />

相关源码如下：

```html
<template>
  <div>
    <div>示例1：包含展开和收起按钮</div>
    <div class="demo">
      <Block
        :style="{ height: '100%' }"
        :defaultLayout="[
          {
            flex: 1,
            unfold: true,
            showUnfoldBtn: false,
            cols: [
              { flex: 1, unfold: true, showUnfoldBtn: true, width: 200 },
              { flex: 1 },
              { flex: 1 },
            ],
          },
          {
            flex: 1,
            unfold: true,
            showUnfoldBtn: true,
            height: 200,
            cols: [{ flex: 1 }],
          },
        ]"
        @onLayoutChange="onLayoutChange"
      >
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
        <Row><Col>5</Col></Row>
      </Block>
    </div>
    <div>示例2：不包含展开和收起按钮</div>
    <div class="demo">
      <Block
        :style="{ height: '100%' }"
        :defaultLayout="[
          {
            flex: 1,

            cols: [{ flex: 1 }, { flex: 1 }, { flex: 1 }],
          },
          {
            flex: 1,

            cols: [{ flex: 1 }],
          },
        ]"
        @onLayoutChange="onLayoutChange"
      >
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
        <Row><Col>5</Col></Row>
      </Block>
    </div>
  </div>
</template>
<script>
import { Block, Row, Col } from '@jianweife/lowcode-index';
export default {
  components: {
    Block,
    Row,
    Col,
  },
  methods: {
    onLayoutChange(data) {
      console.error('+++ onLayoutChange', data);
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

| 属性          | 说明    | 类型    | required | 默认值 |
| :------------ | :-------- | :------ | :------- | :----- |
| defaultLayout | 容器的默认布局，控制`Row`以及`Col`的布局和配置(例如：是否有展开/收起按钮，当前是展开还是收起)，数组里的每一项参见 Row 的说明 | `Array` | true     | 无     |

#### Row

| 属性          | 说明    | 类型    | required | 默认值 |
| :------------ | :-------------- | :------ | :------- | :----- |
| flex          | 对应当前行的 css 属性 flex  | `number`  | true     | 无     |
| showUnfoldBtn | 是否有展开/收起按钮   | `boolean` | false    | 无     |
| unfold        | 当 showUnfoldBtn 等于 true 时，指定 unfold 才有意义，它表示当前状态是展开还是收起 | `boolean` | false    | 无     |
| height        | 当 showUnfoldBtn 等于 true 时，指定 height 才有意义，它表示当前行的初始高度，会忽略 flex 的值 | `number`  | false    | 无     |
| cols          | 指定行中列的布局，数组里每一项参见 Col 的说明  | `Array`   | true     | 无     |

#### Col

| 属性          | 说明   | 类型    | required | 默认值 |
| :------------ | :------------ | :------ | :------- | :----- |
| flex          | 对应当前列的 css 属性 flex   | `number`  | true     | 无     |
| showUnfoldBtn | 是否有展开/收起按钮   | `boolean` | false    | 无     |
| unfold        | 当 showUnfoldBtn 等于 true 时，指定 unfold 才有意义，它表示当前状态是展开还是收起| `boolean` | false    | 无     |
| width         | 当 showUnfoldBtn 等于 true 时，指定 width 才有意义，它表示当前列的初始宽度，会忽略 flex 的值 | `number`  | false    | 无     |

### 事件

| 事件名            | 说明             | 回调参数                           |
| :---------------- | :--------------- | :--------------------------------- |
| afterLayoutResize | 布局更改后的回调 | data,参考 defaultLayout 的数据结构 |

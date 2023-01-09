## GridInteract

### 原则

行列容器可拖拽改变大小，遵循以下原则：

1. Row(行)，n 个 Row，那么从第 1 个到第 n-1 个 Row，resize 只能调整 bottom 方向，top left right 都不可调整，第 n 个 Row 四个方向均不可调整
2. Col(列)，n 个 Col，那么从第 1 个到第 n-1 个 Col，resize 只能调整 right 方向，top left bottom 都不可调整，第 n 个 Col 四个方向均不可调整。
3. Col，如果没有传入width,  那么默认使用样式`flex:1`，即均分父容器 Row 的横向剩余空间。

## 代码演示

### 样式引入

```js
import '@zjlabvis/lowcode-index/dist/jianweiComponents.css'
```


### 依赖

依赖`ant-design-vue`的`Icon`组件，确保样式已引入

### 用法示例

<GridInteract />



## API

### props 说明

| 属性          | 说明    | 类型    | required | 默认值 |
| :------------ | :-------- | :------ | :------- | :----- |
| defaultLayout | 容器的默认布局，控制`Row`以及`Col`的布局和配置(例如：是否有展开/收起按钮，当前是展开还是收起)，数组里的每一项参见 Row 的说明 | `Array` | true     | 无     |
| mode | 当mode等于edit时，表示当前页面布局处于编辑态，编辑态会有特殊样式，比如：鼠标hover到行容器或者列容器时，会显示边框和高亮背景色等 | `String` | false     | 无     |

#### Row

| 属性          | 说明    | 类型    | required | 默认值 |
| :------------ | :-------------- | :------ | :------- | :----- |
| flex          | 对应当前行的 css 属性 flex  | `number`  | true     | 无     |
| showUnfoldBtn | 是否有展开/收起按钮   | `boolean` | false    | 无     |
| unfold        | 当 showUnfoldBtn 等于 true 时，指定 unfold 才有意义，它表示当前状态是展开还是收起 | `boolean` | true    | 无     |
| height        | 指定 height，表示当前行的初始高度，会忽略 flex 的值 | `number`  | false    | 无     |
| cols          | 指定行中列的布局，数组里每一项参见 Col 的说明  | `Array`   | true     | 无     |

#### Col

| 属性          | 说明   | 类型    | required | 默认值 |
| :------------ | :------------ | :------ | :------- | :----- |
| flex          | 对应当前列的 css 属性 flex   | `number`  | true     | 无     |
| showUnfoldBtn | 是否有展开/收起按钮   | `boolean` | false    | 无     |
| unfold        | 当 showUnfoldBtn 等于 true 时，指定 unfold 才有意义，它表示当前状态是展开还是收起| `boolean` | true    | 无     |
| width         | 指定 width，表示当前列的初始宽度，会忽略 flex 的值 | `number`  | false    | 无     |

### 事件

| 事件名            | 说明             | 回调参数    |
| :---------------- | :--------------- | :--------- |
| onLayoutChange | 布局更改后的回调 | data,参考 defaultLayout 的数据结构 |

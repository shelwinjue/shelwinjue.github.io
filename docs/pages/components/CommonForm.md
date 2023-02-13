## 简介

CommonForm，是对[ant-design-vue@1.7.8](https://1x.antdv.com/docs/vue/introduce-cn/)的基础组件进行封装的通用表单组件。目标是尽可能覆盖实际项目中的表单场景，节省书写重复的template代码，使用更方便的json配置和纯js代码，实现表单数据绑定、表单嵌套、表单联动、表单数据监听等实用功能

## 注意

### antdv插槽组件说明

#### a-auto-complete


该组件的默认插槽不支持

## 说明

开发中，使用文档，demo场景完善后再使用

##  API

### jw-form

| 属性        | 说明        | 类型     | required | 默认值   |
| :---------- | :---------- | :------- | :------- | :---------- |
| v-model | 表单值双向绑定 | `object` | ✅   | 空 |
| formItems | 表单项配置  | `JwFormItem[]` | ✅ | [] |
| size | 表单大小 | `large|small|default` | | `default` |
| layout | 表单布局，当值形如`{lableCol: {}, wrapperCol: {}}`，内部会处理成`<a-form-model layout="horizontal" labelCol={layout.labelCol} wrapperCol={layout.wrapperCol} />` | `horizontal|vertical|inline|{labelCol: {span: 4, offset: 0}, wrapperCol: {span: 20, offset:0}}` | | `horizontal` | 
| rules | 表单验证规则，同a-form-model，多层级的验证规则说明见下文 | object | | 空 |
| injectComponents | 自定义表单控件的映射 | `object`| |空|
| injectSlotSetting | 自定义表单控件的插槽描述 | `array` | | 空 |

### 事件

|事件名称| 说明| 回调参数|
|:-----|:-----|:-----|
|change|表单数据变更后触发|Function(newValue: object)|
|itemChange|表单项数据变更后触发|Function(itemConfig: object}) |

#### itemChange

回调参数如下

```js
itemConfig: {
  // 表单项对应的formItem对象
  item: JwFormItem,
  // 表单项最新的值
  value: any,
  // 表单项变更前的值
  oldValue: any,
  // 对应该表单项的表单字段，formItem.key
  name: string,
  // 表单项对应的值路径，值路径参照目录
  path: string
}
```

### JwFormItem

| 属性        | 说明        | 类型     | required | 默认值   |
| :---------- | :---------- | :------- | :------- | :---------- |
| type        | 表单控件名，可以是全局注入的组件(例如：antdv的组件)或者通过`injectComponents`注入的自定义表单控件名称 | `string` | ✅   | 空 |
| key   | 表单字段，命名格式要求遵守驼峰命名规则  | `string` | ✅ | 空 |
| name  | 标签文本 | `string` |  | 空 |
| props | 所有`props`的属性都会透传给表单控件 | `object` |  | 空 |
| formItemProps | 所有`formItemProps`的属性都会透传给`a-form-model-item`组件 | `object` |  | 空 | 
| interactionVisibleHidden | 表单控件是否隐藏 | `boolean` |  | `false` | 
| showFunc | 表单控件是否展示，除了可以使用`interactionVisibleHidden`之外，还可以传入函数，如果函数的执行返回等于true，将展示该表单项，否则将不展示 | `function` |  | 空 |
| groupToggleHide | 适用于表单分组场景，当前分组是否收起 | `boolean` |  | `false` |
| visibleHidden | 适用于表单分组场景，当前分组下的所有表单控件是否隐藏 | `boolean` |  | `false` | 
| subText | 后缀文本 | `string` | false | 空 |
| subSlot | 表单控件后缀插槽是否展示，如果展示，插槽的名称是`sub_${item.key}` | `boolean` |  | `false` |
| isSlot | 非表单控件的UI，可以通过插槽形式传入渲染展示，插槽的名称是`${item.key}`，插槽的作用域`{name, formItem, value}` | `boolean` |  | `false` |
| listener | 表单控件的监听事件对象，例如： `{click: () => {}, change: () => {}, focus: () => {}}`，内部通过`v-on`透传给表单控件, 事件响应参数说明见下文 | `object` | | 空 |
| eventChangePaseType | 控件change事件回调返回参数的解析方式，比如`a-input`的change事件传回的是event，通过event.target.value取值，`a-checkbox`的change事件，通过event.target.checked取值，详细说明见下文 | `origin | event | eventCheck` | | origin |
| withBr | 是否在表单控件后增加换行，适用于表单layout是inline的场景 | `boolean` | | `false` |
| options | 可选项，适用于`a-select`和`jw-select` | `[{label: '选项标签文案', value: 1}]` | | 空 |
| optionsFunc | 适用于`jw-select`，函数执行返回可选项, 用于动态获取可选项，示例见下文 | `function` | | 空 |
| children | 子控件配置数组，适用于`js-loop-items`和`groupToggle` | `JwFormItem[]`| | 空 |




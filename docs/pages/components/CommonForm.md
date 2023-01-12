## 简介

CommonForm，是对[ant-design-vue@1.7.8](https://1x.antdv.com/docs/vue/introduce-cn/)的基础组件进行封装的通用表单组件。目标是尽可能覆盖实际项目中的表单场景，节省书写重复的template代码，使用更方便的json配置和纯js代码，实现表单数据绑定、表单嵌套、表单联动、表单数据监听等实用功能

## 说明

开发中，使用文档，demo场景完善后再使用

##  API

### props

| 属性        | 说明        | 类型     | required | 默认值   |
| :---------- | :---------- | :------- | :------- | :---------- |
| v-model | 表单值双向绑定 | `object` | true    | 空 |
| formItems | 表单项配置  | `JwFormItem[]` | true | [] |
| injectComponents | 自定义组件映射对象 | `object`|false|空|

### JwFormItem

| 属性        | 说明        | 类型     | required | 默认值   |
| :---------- | :---------- | :------- | :------- | :---------- |
| type        | 组件类型，可以使用全局注入的组件(例如：antdv的组件)或者通过`injectComponents`传入的自定义组件 | `string` | true   |空|
| key   | 表单字段，要求字符串遵守驼峰命名规则  | `string` | true | 空 |



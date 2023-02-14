## 什么是值路径

使用`jw-form`时，很多地方都会用到表单控件对应的path，特别是表单嵌套场景。比如在两级表单嵌套场景，在监听控件值变更时希望返回它的值路径，从而实现复杂的表单联动功能等。

例如：

```js
const formData = {x: 1, y: [{z: 2, {z: 3}}]};
```

formData中属性y的值是一个数组，它的第2项的z属性，对应的值路径是`y[1].z`，与lodash的`_.get(object, path, [defaultValue])`中第二个参数path是同样的规则，lodash的path支持数组，jw-form组件内部暂时只支持string类型。除此之外，与lodash还有不同的地方，比如：`y[].z`，下面详细说明

### y[].z


在`watchConfig`中，键支持`y[].z`这种规则的字符串，表示监听数组y下每个数组项中z值的变化，这一点相比vue本身的watch要好用多了

## 表单控件的事件回调参数增加值路径

表单嵌套场景，一般情况下都希望知道当前表单控件所处的具体位置，比如上面的`y[1].z`。所以*jw-form*内部在所有表单控件的事件回调参数列表新增了一个内部的对象，该对象其中一个属性就是path，例如：

```html
<template>
  <jw-form :formItems="formItems" />
</template>
<script>
  export default Demo {
    data() {
      return {
        formItems: [{
          type: 'jw-loop-items',
          key: 'valueGroup',
          name: '测试',
          props: {
            loopItems: [{
                type: 'a-input',
                key: 'name',
                name: '姓名',
                eventChangePaseType: EventValueParseType.event,
                props: {
                  placeholder: '请输入',
                },
                listener: {
                  change: (event, other) => {
                    const { path } = other;
                    console.info(path); // 将会打印  valueGroup[0].name
                  },
                },
              },]
          }
        }]
      }
    }
  }
</script>
```

## itemChange事件回调参数

回调参数对象中也包含了值路径path




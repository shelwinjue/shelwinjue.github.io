# 表单校验规则

规则的配置参照antv的[rules配置](https://1x.antdv.com/components/form-model-cn/#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99)

**示例**

```html
<template>
  <jw-form :rules="rules" :formItems="formItems" />
</template>
<script>
  export default {
    data() {
      formItems: [{
        type: 'a-input',
        name: '名称',
        key: 'name'
      }, {
        type: 'a-input',
        name: '地区',
        key: 'region'
      }],
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
      }
    }
  }
</script>
```

## `jw-loop-items`下子表单的校验规则配置

rules写法，参照上面的规则，只是rules需要作为`jw-loop-items`控件的属性传入即可

**示例**

```html
<template>
  <jw-form :rules="rules" :formItems="formItems" />
</template>
<script>
  export default {
    data() {
      formItems: [{
        type: 'a-input',
        name: '名称',
        key: 'name'
      }, {
        type: 'jw-loop-items',
        name: '数组',
        key: 'group',
        rules: {
          age: [
            { required: true, message: 'Please input age', trigger: 'blur' }
          ],
          address: [{ required: true, message: 'Please input address', trigger: 'change' }],
        }
        props: {
          loopItems: [{
            type: 'a-input',
            name: '年龄',
            key: 'age'
          }, {
            type: 'a-input',
            name: '地址',
            key: 'address'
          }]
        }
      }],
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
      }
    }
  }
</script>
```


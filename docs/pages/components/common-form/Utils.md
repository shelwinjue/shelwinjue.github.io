## toPath

`toPath(pathStr: string)`

将路径格式的字符串转换成数组形式, 同lodash的toPath函数

- **参数:**
    - `{string} pathStr`

- **返回:** 转换后的数组

- **示例:**

```js
import { toPath } from '@zjlabvis/common-form'
toPath('a.b.c'); // => ['a', 'b', 'c']
 
toPath('a[0].b.c'); // => ['a', '0', 'b', 'c']
```

## getValueByPath

`getValueByPath(Obj: any, path: string | string[], defaultValue?: any)`

根据键路径获取表单属性值

- **参数:**
    - `{any} obj` 数据对象
    - `{string|string[]} path` 键路径
    - `{any} defaultValue` 可选， 如果查找结果是undefined，将返回defaultValue

- **返回值:** 属性值

- **示例:**

```js
import { getValueByPath } from '@zjlabvis/common-form'
const testObj = {a: [{b: {c: 3}}]}
getValueByPath(testObj, 'a[0].b.c') // => 3
getValueByPath(testObj, ['a', '0', 'b', 'c']) // => 3
getValueByPath(testObj, 'a[1].b.c') // => undefined
getValueByPath(testObj, 'a[1].b.c', 4) // => 4
```

## setValueByPath

`setValueByPath(obj: any,path: string | string[], value: any)`

根据路径修改深层次的属性值，如果深层次属性不存在，也会赋予新值，新值是响应式的

 - **参数:**
    - `{any} obj` 数据对象
    - `{string|string[]} path` 键路径
    - `{any} value` 

- **返回值:** 无

- **示例:**

```js
import { setValueByPath } from '@zjlabvis/common-form'
const testObj = {a: [{b: {c: 3}}]}
setValueByPath(testObj, 'a[0].b.c', 4) // => testObj = {a: [{b: {c: 4}}]}
setValueByPath(testObj, 'a[1].b.c', 4) // => testObj = {a: [{b: {c: 3}}, {b: {c: 4}}]}
```

## getFormItemByPath

`getFormItemByPath(formItemConfig: JwFormItem[], path: string | string[])`

根据路径获取表单配置项

- **参数:**
    - `{JwFormItem[]} formItemConfig` 表单项配置
    - `{string|string[]} path` 键路径

- **返回值:** 如果路径正确，将返回`{result: JwFormItem, index: number}`，否则返回undefined。index表示所在数组项的位置
- **示例:**

```js
import { getFormItemByPath } from '@zjlabvis/common-form';
const formItems = [
  {
    type: 'jw-select',
    key: 'level',
    eventChangePaseType: EventValueParseType.origin,
    name: '级别',
    options: [
      { label: 'A级', value: 'A' },
      { label: 'B级', value: 'B' },
    ],
  },
  {
    type: 'jw-loop-items',
    key: 'valueGroup',
    name: '测试',
    props: {
      loopItems: [
        {
          type: 'a-input',
          key: 'name',
          name: '姓名',
          eventChangePaseType: EventValueParseType.event,
          props: {
            placeholder: '请输入',
          },
          listener: {
            change: (...args) => {
              console.info('++++ change')
              console.info(...args)
            },
          },
        },
      ],
    },
  },
];
getFormItemByPath(formItems, 'valueGroup.name') 
// => 输出
// {
// index: 0, 
// result: {
//           type: 'a-input',
//           key: 'name',
//           name: '姓名',
//           eventChangePaseType: EventValueParseType.event,
//           props: {
//             placeholder: '请输入',
//           },
//           listener: {
//             change: (...args) => {
//               console.info('++++ change')
//               console.info(...args)
//             },
//           },
//         }
```

## setFormItemByPath

`setFormItemByPath(formItemConfig: IKV[],
  path: string | string[],
  config: IKV,
  insertAfterPath?: string | string[])`

根据键路径修改/添加表单控件配置对象

- **参数:**
    - `{IKV[]} formItemConfig` 表单项配置
    - `{string | string[]} path` 键路径
    - `{IKV} config` 要修改/添加的表单项配置对象
    - `{string | string[]} insertAfterPath` 可选，如果根据路径找不到原有的表单项配置，那么将进行插入操作，插入到该路径的后面，注意：需要保证insertAfterPath的正确性。另外，`^`表示插入到开头，`$`表示插入到结尾

- **返回值:** 空

- **示例:**

```js
import { setFormItemByPath } from '@zjlabvis/common-form';
const formItems = [
  {
    type: 'jw-select',
    key: 'level',
    eventChangePaseType: EventValueParseType.origin,
    name: '级别',
    options: [
      { label: 'A级', value: 'A' },
      { label: 'B级', value: 'B' },
    ],
  },
  {
    type: 'jw-loop-items',
    key: 'valueGroup',
    name: '测试',
    props: {
      loopItems: [
        {
          type: 'a-input',
          key: 'name',
          name: '姓名',
          eventChangePaseType: EventValueParseType.event,
          props: {
            placeholder: '请输入',
          },
          listener: {
            change: (...args) => {
              console.info('++++ change')
              console.info(...args)
            },
          },
        },
      ],
    },
  },
];
// 根据路径找不到的情况下，默认是添加到末尾
setFormItemByPath(formItems, 'address', {type: 'a-input', key: 'address', name: '地址'});
// => formItems将变成
// [
//   {
//     type: 'jw-select',
//     key: 'level',
//     eventChangePaseType: EventValueParseType.origin,
//     name: '级别',
//     options: [
//       { label: 'A级', value: 'A' },
//       { label: 'B级', value: 'B' },
//     ],
//   },
//   {
//     type: 'jw-loop-items',
//     key: 'valueGroup',
//     name: '测试',
//     props: {
//       loopItems: [
//         {
//           type: 'a-input',
//           key: 'name',
//           name: '姓名',
//           eventChangePaseType: EventValueParseType.event,
//           props: {
//             placeholder: '请输入',
//           },
//           listener: {
//             change: (...args) => {
//               console.info('++++ change')
//               console.info(...args)
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     type: 'a-input', 
//     key: 'address', 
//     name: '地址'
//   }
// ];

// 指定了insertAfterPath，^表示插入到开头
setFormItemByPath(formItems, 'address', {type: 'a-input', key: 'address', name: '地址'}, '^');

// => formItems将变成
// [
//   {
//     type: 'a-input', 
//     key: 'address', 
//     name: '地址'
//   },
//   {
//     type: 'jw-select',
//     key: 'level',
//     eventChangePaseType: EventValueParseType.origin,
//     name: '级别',
//     options: [
//       { label: 'A级', value: 'A' },
//       { label: 'B级', value: 'B' },
//     ],
//   },
//   {
//     type: 'jw-loop-items',
//     key: 'valueGroup',
//     name: '测试',
//     props: {
//       loopItems: [
//         {
//           type: 'a-input',
//           key: 'name',
//           name: '姓名',
//           eventChangePaseType: EventValueParseType.event,
//           props: {
//             placeholder: '请输入',
//           },
//           listener: {
//             change: (...args) => {
//               console.info('++++ change')
//               console.info(...args)
//             },
//           },
//         },
//       ],
//     },
//   }
  
// ];


// 指定了insertAfterPath，如果插入的路径正确，将插入到路径位置的后面
setFormItemByPath(formItems, 'address', {type: 'a-input', key: 'address', name: '地址'}, 'level');
// => formItems将变成
// [
  
//   {
//     type: 'jw-select',
//     key: 'level',
//     eventChangePaseType: EventValueParseType.origin,
//     name: '级别',
//     options: [
//       { label: 'A级', value: 'A' },
//       { label: 'B级', value: 'B' },
//     ],
//   },
//   {
//     type: 'a-input', 
//     key: 'address', 
//     name: '地址'
//   },
//   {
//     type: 'jw-loop-items',
//     key: 'valueGroup',
//     name: '测试',
//     props: {
//       loopItems: [
//         {
//           type: 'a-input',
//           key: 'name',
//           name: '姓名',
//           eventChangePaseType: EventValueParseType.event,
//           props: {
//             placeholder: '请输入',
//           },
//           listener: {
//             change: (...args) => {
//               console.info('++++ change')
//               console.info(...args)
//             },
//           },
//         },
//       ],
//     },
//   }
  
// ];

```
## toPath(pathStr: string)

将路径格式的字符串转换成数组形式, 同lodash的toPath函数

- **参数：**
  - <code>{string} pathStr</code>

- **返回：** 转换后的数组


示例如下:

```js
import { toPath } from '@zjlabvis/common-form'
toPath('a.b.c'); // => ['a', 'b', 'c']
 
toPath('a[0].b.c'); // => ['a', '0', 'b', 'c']
```

## getValueByPath

根据键路径获取表单属性值




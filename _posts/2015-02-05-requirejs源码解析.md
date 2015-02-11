---
layout: default
title: requirejs源码解析
---

### 主流程

```javascript
 var a = 1;
 console.log(a);
```

![icon]({{ site.url }}/assets/js.png)

这是在调用模块的时候使用的方法，第一个参数是依赖模块集合，第二个参数是一个执行函数体，该执行函数的参数是各个依赖模块

我们从require(deps, fn)这个函数来看下requirejs是怎么加载模块的。

![icon]({{ site.url }}/assets/requirejs.png)


总结一下：

1、为了实现模块依赖管理和保证模块正确的加载顺序，每个模块都有一个闭包环境

2、在每个依赖项上注册defined事件，每个依赖项加载完成后都会emit该事件

3、异步加载模块就是添加一个script节点来完成的

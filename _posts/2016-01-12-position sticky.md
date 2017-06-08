---
layout: post
title: "position sticky介绍"
description: "position sticky介绍"
categories: [css]
tags: [css]
redirect_from:
  - /2016/01/12/
---

### 什么是position:sticky

用户在浏览网页时已经习惯导航栏、菜单栏、搜索筛选栏等常用操作的工具栏始终停留在窗口的顶部。页面滚动到某处将元素固定
在窗口某个位置的布局方式，我们称之为黏性布局。

在pc端，为了实现这种布局，通常的做法是监听window的scroll事件,判断页面滚动到某个元素时，把元素的position设置为
fixed，否则，取消fixed。

然而在移动端浏览器，这种效果就不够平滑了，特别是在ios设备上。因为在ios设备上，当页面滚动时，会暂停所有js的执行，直到
滚动停止才会继续执行js。因此，scroll事件在页面滚动的时候并不会被触发，而是在页面停止滚动的时候才触发。

<!--more-->

这样导致的一个结果是，无法通过监听scroll事件来实现黏性布局，那么监听touchmove事件可以做到吗？

答案是同样做不到。

在touchmove的过程中可以实时地执行回调，但是在手指离开屏幕，页面继续减速滚动，直到听下的这段过程，js还是无能为力。

position:sticky就是为了解决这个问题而引入的一个试验性属性。position:sticky表现上是position:relative和
position:fixed的结合，怎么理解呢？设置了position:sticky的元素，表现如下：

1. 当页面滚动到该元素之前，元素的表现跟position:relative一样
2. 当页面滚动到该元素之后，元素的表现跟position:fixed一样

我们还是通过一个例子来看一看：(使用safari查看或者用iphone扫一扫下面的二维码)

![img](https://gw.alicdn.com/tps/TB1a6tVLpXXXXcwXVXXXXXXXXXX-220-201.png)



<iframe height='268' scrolling='no' src='//codepen.io/shelwinjue/embed/LGLgow/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/shelwinjue/pen/LGLgow/'>LGLgow</a> by shelwinjue (<a href='http://codepen.io/shelwinjue'>@shelwinjue</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

### position:sticky的用法

设置了position:sticky的元素要生效必须至少设置top、bottom、left、right其中的一个。top和bottom两者之间top的优先级高，
left和right两者之间left的优先级高。

从上面的例子可以看出，设置了position:sticky的元素，当页面滚动其父容器的底部时，就不在固定在可见区域，而是跟随
父容器一起滚动了.

最后给出关于position:sticky的polyfill，如下这些：

[fixed-sticky](https://github.com/filamentgroup/fixed-sticky)

[stickyfill](https://github.com/wilddeer/stickyfill)

[position-sticky](https://github.com/matthewp/position--sticky-)


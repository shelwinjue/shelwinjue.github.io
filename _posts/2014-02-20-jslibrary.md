---
title: 国内互联网公司的js库
---

## 百度 [Trangram](http://tangram.baidu.com/) ##

Tangram是一套简单可依赖的Javascript库，主要分为Base和Component两部分。Base提供了开发时常用功能的封装，是核心的工具库。Component是Tangram组件库，基于Tangram Base之上开发，提供各种UI组件和动画效果。

**Tangram的特点：**

1. 体积小巧，性能优良，使用简单。
2. 模块化架构，方便定制与扩展。
3. 适合团队开发，丰富的中文文档和本地技术优化，适合中国用户。
4. 多浏览器支持:IE6、7、8+，firfox3.x+，遨游2.x+，opera 10.x，chrome 4.x+，safari 4.x+。
5. 经过专业QA团队的测试以及百度各大产品线的应用，质量有保障。

**浏览器、平台支持**

所有常用的浏览器都经过QA测试

## 腾讯 [JX](http://alloyteam.github.io/JX/#home) ##

一个类似 Google Closure Library 的 Web 前端开发框架，在Github上开源，开源地址[https://github.com/AlloyTeam/JX](https://github.com/AlloyTeam/JX)，适合构建和组织大规模、工业级的Web App，腾讯 WebQQ、腾讯Q+等产品都是采用JX框架开发，兼容目前所有主流浏览器。

JX的特点

1. 微内核设计：内核可完全分离出来，用于构建其他的框架
2. 原生对象零污染：你懂的，随着js的App越来约复杂，对原生对象的零污染也体现的越来越重要了
3. 模块封包：采用命名空间、闭包等方式建立了模块封包的体系，帮助更好的组织海量js代码
4. 模块自由拼装：自身模块做了良好的架构分离，尽可能让各个模块之间可以自由的拼装组合
5. 无缝集成各种js框架：与jQuery, YUI, Mootools, Prototype.js 等框架无缝集成；与多种局部框架无缝集成，如：Mini, Sizzle, cssQuery, xpath, JSON 等等
6. 多版本共存：如采用的Jx版本过旧，旧有的Javascript代码不能与新版本Jx兼容，则可以采用多版本共存的方式保持程序的可延续性
7. 分层设计：Javascript核心层，与Javascript解释引擎无关的封装和扩展；浏览器端Javascript层，对浏览器中的Javascript引擎部分的封装和扩展

## 阿里 [Arale](http://aralejs.org/) ##

Arale 立足于支付宝的前端需求和国内前端社区，基于 Sea.js 和 CMD 规范，致力发展小而美的前端模块架构，建立了一套从编码测试到部署的开发体系， 是一个开放、简单、易用的前端解决方案，托管在github上，更多关于Arale的简介，点击[链接](http://aralejs.org/docs/about-arale.html)

**兼容性**

Arale 模块均兼容于 IE6+ 以及 Chrome/Firefox/Safari/Opera 的最新稳定版。

## 豆瓣 [OzJS](http://ozjs.org/) ##

和Arale有些类似，同样提供一个模块依赖管理的微内核，基于此来构建一套模块化的框架。兼容CMD, AMD和基本的闭包函数模块。
提供预处理/打包工具ozma，以及一系列常用模块，比如语言增强，事件系统，url解析，dom处理，动画等等。
前身是豆瓣开发阿尔法城的时候使用的框架，现在还在加强通用性的过程中，一些模块还在开发，文档也还不是很完整，但在解耦和开放性上做的不错。

核心人物: [@dexteryy](http://weibo.com/dexteryy)

## 网易 [NEJ](http://nej.netease.com/) ##

很大很全，功能很多，也提供打包工具，而且针对不同的浏览器内核进行了适配。 但不得不吐槽的是NEJ是国内这些开源框架里最不友好的一个，因为它太过强调“约定优于配置”，对使用者施加了太多的约束。一旦使用NEJ，你就必须跟着它所规定的一切来。作为一个公司内部的项目，对代码风格规范有严格的要求，无可指摘，但作为一个开源项目，这就成为了一个巨大的劣势，因为学习曲线陡峭，采用成本高昂，一旦使用就被套牢在这个系统里，我很难想象会有其他公司采用NEJ来做项目。用的人少了，社区贡献也就少了，而这开源的意义也就仅限于让人参考而已。从某种程度上来说，NEJ看似开源，却是一个封闭的系统，和Arale形成鲜明反差。
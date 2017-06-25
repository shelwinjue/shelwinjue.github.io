---
layout: post
title: "webpack-dev-server 2.x 实时加载"
description: "webpack-dev-server 2.x 实时加载"
categories: [js]
tags: [js, h5]
redirect_from:
  - /2017/06/25/
---

### webpack-dev-server 2.x 实时加载

webpack 2.0升级之后，webpack-dev-server也随之升级，首先还是一样，执行安装

```
npm install --save-dev webpack-dev-server
```

### 实时加载的bundle来自于内存

这一点很重要，经过有个误解，误认为文件修改后，实时编译后的bundle会写到`webpack.config.js`配置项`output`指定的文件中，其实并不是，重新
编译后的bundle在内存中，不会覆盖`output`指定的bundle.js。

了解这一点之后，再来看看代码目录

```
├── app
│   └── index.jsx
├── dist
│   └── bundle.js
├── index.html
├── mods
│   └── util
├── package.json
└── webpack.config.js
```

index.html的内容如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>webpack demo</title>
</head>
<body>
<div id="app"></div>
    <script src="dist/bundle.js"></script>
</body>
</html>

```

默认情况下，`devServer.publicPath`的值是"/"，因为bundle的路径是`http://localhost:8080/bundle.js`。
而index.html中引入bundle的路径是`dist/bundle.js`，因为需要将devServer.publicPath的值改为`/dist/`(官网说明publicPath必须以斜杠符开始和结尾)，
因此修改后的webpack.config.js如下：

```
var path = require('path');
module.exports = {
	entry: './app/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.jsx$/,
			loader: "babel-loader"
		}]
	},
	resolve: {
		alias: {
			'@modules': path.resolve(__dirname, 'mods')
		}
	},
	devServer: {
		publicPath: '/dist/'
	}
};

```

### 启动webpack-dev-server

启动后，修改任何源文件，页面都会自动刷新，加载最新的bundle



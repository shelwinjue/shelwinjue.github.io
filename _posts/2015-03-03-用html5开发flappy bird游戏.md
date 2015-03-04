---
layout: default
title: 用html5开发flappy bird游戏
---

### 如何用html5开发flappy bird游戏

![icon](http://img1.ph.126.net/VEvtewL1YVsS7KuPiwGQww==/6597970266681734611.jpg)

Flappy Bird 是一个很简单的游戏，下面我用仅仅百行代码来实现它。这里用到了Phaser游戏库

#### 开始

首先你应该下载[项目模板](http://lessmilk.com/flappy_bird/01/empty.zip)，项目模板中包含下列文件：

* phaser.min.js
* index.html 游戏html5页面
* main.js 游戏逻辑代码
* assets 游戏资源目录，包含图片和音乐等

index.html的代码如下：


	<!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8" />
        <title> Flappy Bird Clone </title>

        <script type="text/javascript" src="phaser.min.js"></script>
        <script type="text/javascript" src="main.js"></script>
    </head>

    <body>

        <p> Press the spacebar to jump </p>
        <div id="gameDiv"> </div>

    </body>
    </html>



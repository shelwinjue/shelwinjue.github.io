---
layout: default
title: 用html5开发flappy bird游戏
keywords: html5,游戏,flappy bird,html5游戏,phaser,html5游戏教程,html5游戏开发
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

其中gameDiv元素是我们游戏所在的区域，在main.js中添加以下代码：

    // 初始化 Phaser, 创建一个大小为 400x490px 的游戏
    var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');

    // Create our 'main' state that will contain the game
    var mainState = {

        preload: function() {
            // preload方法将在开始的时候执行，主要用来加载游戏的资源
        },

        create: function() {
            // create方法在preload方法执行完后接着执行，主要是游戏的初始化部分

        },

        update: function() {
            // update方法每秒执行60次，主要是游戏的逻辑部分

        },
    };

    // 添加并启动'main'状态
    game.state.add('main', mainState);
    game.state.start('main');

后面我们会一步步填充完善preload(),create()和update()方法，并且会添加一些其他的方法

#### 初始化小鸟


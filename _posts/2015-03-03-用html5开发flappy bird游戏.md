---
layout: default
title: 用html5开发flappy bird游戏
keywords: html5,游戏,flappy bird,html5游戏,phaser,html5游戏教程,html5游戏开发
---

### [如何用html5开发flappy bird游戏]({{ site.url }}{{ post.url }})

![icon](http://img02.taobaocdn.com/imgextra/i2/187929522/TB2hyKicXXXXXXdXpXXXXXXXXXX_!!187929522.jpg)

Flappy Bird 是一个很简单的游戏，下面我用仅仅百行代码来实现它。这里用到了Phaser游戏库

<!--more-->

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

游戏中我们需要添加一个用空格键控制的小鸟。代码都很简单，并且注释良好，所以你可以很容易地理解它们。

首先我们向preload()方法，create()方法和update()方法中添加下列代码

    preload: function() {
        // 改变游戏的背景色
        game.stage.backgroundColor = '#71c5cf';

        // 加载小鸟图
        game.load.image('bird', 'assets/bird.png');
    },

    create: function() {
        // 设置游戏的物理系统
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // 将小鸟展示在屏幕上
        this.bird = this.game.add.sprite(100, 245, 'bird');

        // 给小鸟添加重力，使之自然下落
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000;

        // 在空格键上添加监听事件，当空格键按下时，调用jump方法
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
    },

    update: function() {
        // 如果小鸟超过区域的边界，调用restartGame方法
        if (this.bird.inWorld == false)
            this.restartGame();
    }

添加的jump方法和restartGame方法如下：

    // jump方法
    jump: function() {
        // 添加一个垂直方向的位移，每次减少350
        this.bird.body.velocity.y = -350;
    },

    // 重新开始游戏方法
    restartGame: function() {
        // 启动main状态，即重新开始游戏
        game.state.start('main');
    },

#### 测试

现在来测试我们的游戏。在浏览器中打开index.html。看到的效果将是，按下空格键，小鸟会jump一下。

#### 游戏元素-》管道

管道是flappy bird中相当重要的游戏元素，下面我们来看看该如何实现它。

首先，我们在preload()方法中加载管道资源图片

    game.load.image('pipe', 'assets/pipe.png');

由于游戏中的管道不止一个，这里我们用到Phaser的特性'group'。我们将20个管理归并未一个组(group)。于是，
我们在create()方法中添加以下代码：

    this.pipes = game.add.group(); // 创建一个组
    this.pipes.enableBody = true;  // 赋予它物理特性
    this.pipes.createMultiple(20, 'pipe'); // 在组中创建20个管道

我们需要一个新的方法来添加一个管道。默认情况是，在组中的20个管道都是失效并且不显示的状态。所以我们要做的就是去激活每一个管道元素，显示它，并且在它离开可视区域时自动将它kill掉。
代码如下：

    addOnePipe: function(x, y) {
        // 获取第一个dead状态的管道对象
        var pipe = this.pipes.getFirstDead();

        // Set the new position of the pipe
        // 设置管道的新位置
        pipe.reset(x, y);

        // 将管道的x坐标值减去200，使它左移
        pipe.body.velocity.x = -200;

        // 当管道不在可视区域内时将它kill掉
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },

之前的方法只是展示了一个管道，但是我们需要在一列中显示6个管道和1个洞。所以添加addRowOfPipes方法，如下：

    addRowOfPipes: function() {
        // 随机生成洞的位置
        var hole = Math.floor(Math.random() * 5) + 1;
        // 添加6个管道，调用addOnePipe方法
        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole + 1)
                this.addOnePipe(400, i * 60 + 10);
    },

为了真正地将管道添加到游戏中，我们需要每隔1.5s调用一次addRowOfPipes方法。在create()方法中添加以下代码：

    this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);

#### 计分和碰撞

还需要添加计分和碰撞的逻辑，这也很简单。将计数器显示在游戏区域的左上角，在create()方法中添加以下代码：

    this.score = 0;
    this.labelScore = game.add.text(20, 20, "0", { font: "30px Arial", fill: "#ffffff" });

当小鸟每次成功穿越一个管道洞口时需要加分，在addRowOfPipes()中添加以下代码：

    this.score += 1;
    this.labelScore.text = this.score;

当小鸟碰撞到管道时，应该重新开始游戏，所以在update()方法中添加以下代码：

    game.physics.arcade.overlap(this.bird, this.pipes, this.restartGame, null, this);

游戏完成了基本框架。
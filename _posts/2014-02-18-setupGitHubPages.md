---
title: github page搭建博客
---

### github page搭建博客



使用[github pages](http://pages.github.com/)搭建个人博客有这些好处：

1. 只要你是github的一员，你就可以随时编辑、上传你的文章。
2. 搭载Jekyll，可以使用像markdown简洁漂亮的语法来写博客，而不用处理与数据库相关的东西。

### GitHub pages ###

如果你是程序员，那就一定知道github，它是用于存放Git版本控制的软件代码和内容项目。而GitHub Pages则是开放，面向外界的一些网页，你可以像发布代码一样来发布最新的博客。下面来看看如何通过GitHub pages来建立个人博客。

<!--more-->

#### 第一步 ####

在GitHub上创建一个新的仓库，注意这里的仓库的名字必须是username.github.io(username就是你在github上的用户名)，否则，github pages将不会成功

![icon]({{ site.url }}/assets/github_pages_setup_1.png)


#### 第二步 ####

进入到你想克隆仓库的文件目录，在git bash中执行git clone https://github.com/username/username.github.io

![icon]({{ site.url }}/assets/github_pages_setup_2.png)

#### 第三步 ####

进入username.github.io文件目录，创建index.html

![icon]({{ site.url }}/assets/github_pages_setup_3.png)

#### 第四步 ####

推送index.html

![icon]({{ site.url }}/assets/github_pages_setup_4.png)

#### 第五步 ####

等待几分钟，然后你就可以访问http://username.github.io了
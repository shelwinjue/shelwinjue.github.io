---
layout: default
title: apache中关于ProxyPass和ProxyPassReverse的配置
---



### 理解ProxyPass 与 ProxyPassReverse ###

可能很多人在配置ProxyPass和ProxyPassReverse的时候都是参照下面这种格式：

ProxyPass /foo http://foo.example.com/bar

ProxyPassReverse /foo http://foo.example.com/bar

对于ProxyPass很好理解，就是将本地的url请求映射到远程的url请求（上面的配置表示将本地的/foo下的请求映射到远程的http://foo.example.com/bar）。

对于ProxyPassReverse就不怎么理解，这又是干嘛的。其实这个配置是针对远程请求出现302重定向的时候发挥其功效的。假设本地的ServerName是local.test.com，当远程响应302重定向时，
本地的apache代理服务器做了一件事，将请求地址改为本地的/foo进行重定向。

例如：远程的http://foo.example.com/bar响应302重定向到http://foo.example.com/bar/login，那么apache会将重定向地址调整为http://local.test.com/foo/login。

---
layout: default
title: 浮躁是想太多
---

<p>最新文章</p>
<ul>
	{% for post in site.posts %}
    <li>{{ post.date | date_to_string }}<a href="{{ site.url }}/{{ post.url }}">{{ post.tile }}</a>
	</li>
	{% endfor %}
</ul>
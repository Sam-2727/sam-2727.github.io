---
layout: default
title: Blog
---

# Blog

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <h2 class="no-number"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
    <p class="post-excerpt">{{ post.excerpt | strip_html | strip | truncatewords: 40 }}</p>
  </li>
{% endfor %}
</ul>

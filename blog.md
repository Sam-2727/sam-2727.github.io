---
layout: default
title: Blog
description: "technical and expository writing by Sam Christian"
---

# Blog

<div class="post-toggle">
  <button class="toggle-btn active" data-filter="technical">Technical</button>
  <button class="toggle-btn" data-filter="expository">Expository</button>
</div>

<ul class="post-list">
{% for post in site.posts %}
  <li data-category="{{ post.category | default: 'technical' }}">
    <h2 class="no-number"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
    <p class="post-excerpt">{{ post.excerpt | strip_html | strip | truncatewords: 40 }}</p>
  </li>
{% endfor %}
</ul>

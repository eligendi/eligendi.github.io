---
title: Games
permalink: /games/
---

<div class="card-deck">
{% for game in site.data.games %}
  <div class="card">
    <img class="card-img-top" src="{{game.large_icon}}" alt="{{game.title}} app store icon" width="180px">
    <div class="card-block">
      <h4 class="card-title">{{game.name}}</h4>
      <p class="card-text">{{game.summary}}</p>
    </div>
    <div class="card-footer card-info">
      <a href="\games\{{game.title}}">more info</a>
    </div>
  </div>
{% endfor %}
</div>

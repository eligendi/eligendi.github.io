---
title: simblocity
permalink: /games/simblocity/
---

{% assign section = site.data.games | where:"title", "Games" | first %}
{% assign game = section.games | where:"game", "simblocity" | first %}

<img src="{{ game.large_icon }}">

<p><a class="app-store-button" href="https://itunes.apple.com/us/app/{{ game.game }}/id{{ game.apple_id }}?mt=8&uo=6&at=&ct=" target="itunes_store" style="display:inline-block;overflow:hidden;background:url(http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.png) no-repeat;width:165px;height:40px;@media only screen{background-image:url(http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg);}"></a></p>


<h3>{{ game.name }}</h3>


// ==UserScript==
// @name         YT Music Re-Design
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://music.youtube.com/*
// @include      https://music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// @require https://code.jquery.com/jquery-3.6.0.min.js

// ==/UserScript==

(function() {
    'use strict';
    addEventListener('load', (e) => {
       $("#player-bar-background").css("background", "transparent");
       $("#layout > ytmusic-player-bar").css("background", "#00000080").css("backdrop-filter", "blur(16px)");
       $("body > ytmusic-app").css("background", "linear-gradient(163deg, rgba(255,0,0,1) -40%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 101%)");
       const thumbNail = $("#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.thumbnail-image-wrapper.style-scope.ytmusic-player-bar > img").attr("src");
       console.log(thumbNail);
       $("#layout > ytmusic-player-bar").click(backdropVisible)

       $("#player-page").css("backdrop-filter", "blur(16px)");
       $("#player-page").css("background", "#00000070");

       function backdropVisible() {
           setTimeout(() => {
               $("#content").removeAttr("style")
           }, 1000)
       }

    })
})();

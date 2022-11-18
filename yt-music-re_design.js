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

       createThemeSelector();

       function backdropVisible() {
           setTimeout(() => {
               $("#content").removeAttr("style")
           }, 1000)
       }

        function createThemeSelector() {
            const container = document.createElement("div");
            container.setAttribute("id", "theme-container");
            container.style.setProperty("width", "100%");
            container.style.setProperty("max-width", "150px");
            // container.style.setProperty("background-color", "rgb(43, 41, 41)");
            container.style.setProperty("display", "flex");
            container.style.setProperty("justify-content", "space-around");
            container.style.setProperty("align-items", "center");
            container.style.setProperty("border-radius", "4px");
            container.style.setProperty("padding", "5px 0px");
            const color = ["#f5cd79", "#778beb", "#303952", "#0097e6", "#2f3640", "#dcdde1"];

            for (let i = 0; i < 2; i++) {

                const btn = document.createElement("button");
                btn.classList.add("btn-circle");
                btn.style.setProperty("width", "50px");
                btn.style.setProperty("height", "50px");
                btn.style.setProperty("border-radius", "100%");
                btn.style.setProperty("border", "none");
                btn.style.setProperty("position", "relative");
                btn.style.setProperty("overflow", "hidden");
                btn.style.setProperty("background", "black");
                btn.style.setProperty("cursor", "pointer");
                btn.style.setProperty("margin-left", "7px");

                const btnInnerHalfCircle = document.createElement("button");
                btnInnerHalfCircle.classList.add("half");
                btnInnerHalfCircle.style.setProperty("width", "50%");
                btnInnerHalfCircle.style.setProperty("left", "-10%");
                btnInnerHalfCircle.style.setProperty("top", "00%");
                btnInnerHalfCircle.style.setProperty("height", "100%");
                btnInnerHalfCircle.style.setProperty("position", "absolute");
                btnInnerHalfCircle.style.setProperty("background", color[Math.floor(Math.random()*color.length)]);
                btn.appendChild(btnInnerHalfCircle);
                container.appendChild(btn);
            }
            const selected = document.querySelector("#layout > ytmusic-nav-bar > div.center-content.style-scope.ytmusic-nav-bar > ytmusic-pivot-bar-renderer ");
            selected.insertBefore(container, selected.children[0]);
            console.log(container.parentElement);
        }

    })
})();

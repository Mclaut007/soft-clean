!function(){"use strict";(function(){const o=document.querySelectorAll(".menu__link");for(const c of o)c.addEventListener("click",t);function t(t){o.forEach((o=>{o.classList.remove("_active")})),t.target.classList.add("_active")}})(),function(){const o=Array.from(document.querySelectorAll(".look-how__button")),t=Array.from(document.querySelectorAll(".look-how__img-room"));function c(c){!function(t){o.forEach((o=>{o.classList.remove("look-how__button_active"),t.currentTarget.classList.add("look-how__button_active")}))}(c),function(c){t.forEach((e=>{e.classList.remove("look-how__img-room_active"),t.indexOf(e)==o.indexOf(c.currentTarget)&&e.classList.add("look-how__img-room_active")}))}(c)}o.forEach((o=>{o.addEventListener("click",c)}))}()}();
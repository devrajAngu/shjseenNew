CNVS.HoverAnimations=function(){var u,m,d=SEMICOLON.Core;return{init:function(e){return d.getSelector(e,!1,!1).length<1||(d.initFunction({class:"has-plugin-hoveranimation",event:"pluginHoverAnimationReady"}),(e=d.getSelector(e,!1)).length<1)||void e.forEach(function(e){var t=e.getAttribute("data-hover-animate"),a=e.getAttribute("data-hover-animate-out")||"fadeOut",n=e.getAttribute("data-hover-speed")||600,i=e.getAttribute("data-hover-delay"),s=e.getAttribute("data-hover-parent"),l=e.getAttribute("data-hover-reset")||"false",o=e.getAttribute("data-hover-mobile")||"true";if("true"!=o)if("false"==o){if(!d.getVars.elBody.classList.contains("device-up-lg"))return!0}else if(!d.getVars.elBody.classList.contains("device-up-"+o))return!0;e.classList.add("not-animated");var s=s?"self"==s?e:e.closest(s):e.closest(".bg-overlay")?e.closest(".bg-overlay"):e,o=0,r=(i&&(o=Number(i)),n&&(e.style.animationDuration=Number(n)+"ms"),{element:e,elAnimate:t,elAnimateOut:a,elSpeed:n,elDelayT:o,elParent:s,elReset:l});s.addEventListener("mouseenter",function(){var t;t=r,clearTimeout(m),u=setTimeout(function(){t.element.classList.add("not-animated"),(t.elAnimateOut+" not-animated").split(" ").forEach(function(e){t.element.classList.remove(e)}),(t.elAnimate+" animated").split(" ").forEach(function(e){t.element.classList.add(e)})},t.elDelayT)},!1),s.addEventListener("mouseleave",function(){var t;(t=r).element.classList.add("not-animated"),(t.elAnimate+" not-animated").split(" ").forEach(function(e){t.element.classList.remove(e)}),(t.elAnimateOut+" animated").split(" ").forEach(function(e){t.element.classList.add(e)}),"true"==t.elReset&&(m=setTimeout(function(){(t.elAnimateOut+" animated").split(" ").forEach(function(e){t.element.classList.remove(e)}),t.element.classList.add("not-animated")},Number(t.elSpeed))),clearTimeout(u)},!1)})}}}();
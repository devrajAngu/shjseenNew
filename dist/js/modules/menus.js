CNVS.Menus=function(){function l(){var t=m.getVars.elBody,n=".mega-menu-content, .sub-menu-container";document.querySelectorAll(".primary-menu-trigger").forEach(function(e){e.classList.remove("primary-menu-trigger-active")}),m.getVars.elPrimaryMenus.forEach(function(e){t.classList.contains("is-expanded-menu")?(e.querySelector(".menu-container")?.classList.remove("d-block","d-none"),e.querySelectorAll(n)?.forEach(function(e){e.classList.remove("d-none")}),document.querySelectorAll(".menu-container:not(.mobile-primary-menu)").forEach(function(e){e.style.display=""}),m.getVars.elPrimaryMenus.forEach(function(e){e.querySelectorAll(".mobile-primary-menu")?.forEach(function(e){e.classList.remove("d-block")})})):e.querySelector(".menu-container")?.classList.remove("d-block"),e.querySelectorAll(n)?.forEach(function(e){e.classList.remove("d-block")}),e.classList.remove("primary-menu-active");e=t.className.split(" ").filter(function(e){return!e.startsWith("primary-menu-open")});t.className=e.join(" ").trim()})}function a(){function n(e){var t,n;e&&!e.querySelector(".sub-menu-indicator")&&((t=document.createElement("i")).classList.add("sub-menu-indicator"),(n=e.closest(".primary-menu")?.getAttribute("data-arrow-class")||"fa-solid fa-caret-down")&&n.split(" ").forEach(function(e){t.classList.add(e)}),e.append(t))}document.querySelectorAll(".top-links-item").forEach(function(e){var t=e.querySelector(":scope > a");e.querySelector(":scope > .top-links-sub-menu, :scope > .top-links-section")&&n(t)}),document.querySelectorAll(".menu-item").forEach(function(e){var t=e.querySelector(":scope > .menu-link > div");!e.classList.contains("mega-menu-title")&&e.querySelector(":scope > .sub-menu-container, :scope > .mega-menu-content")&&n(t)}),document.querySelectorAll(".page-menu-item").forEach(function(e){var t=e.querySelector(":scope > a > div");e.querySelector(":scope > .page-menu-sub-menu")&&n(t)})}function i(){var n,c=".mega-menu-content, .sub-menu-container",o=".menu-item",r=".sub-menu-trigger",t=m.getVars.elBody.classList,e=document.querySelectorAll(r),s=new Array,e=(e.forEach(function(e){e=e.closest(".menu-item").querySelector('.menu-link[href^="#"]');e&&s.push(e)}),[].slice.call(e).concat([].slice.call(s)));document.querySelectorAll(r).forEach(function(e){e.classList.remove("icon-rotate-90")}),t.contains("is-expanded-menu")&&(n=getComputedStyle(m.getVars.elHeader).getPropertyValue("--cnvs-primary-menu-submenu-display-speed")||666,isNaN(n.split("ms")[0])?isNaN(n.split("s")[0])||(n=1e3*n.split("s")[0]):n=n.split("ms")[0],[].slice.call(m.getVars.elPrimaryMenus).filter(function(e){return!e.matches(".on-click")}).forEach(function(e){e.querySelectorAll(".sub-menu").forEach(function(e){var t;e.addEventListener("mouseenter",function(){clearTimeout(t),e.classList.add("menu-item-hover")},!1),e.addEventListener("mouseleave",function(){t=setTimeout(function(){e.classList.remove("menu-item-hover")},Number(n))},!1)})})),t.contains("is-expanded-menu")||(m.getVars.elPrimaryMenus.forEach(function(e){e.querySelectorAll(c).forEach(function(e){e.classList.add("d-none"),t.remove("primary-menu-open")})}),e.forEach(function(n){n.onclick=function(e){e.preventDefault();var t,e=n;n.classList.contains("sub-menu-trigger")||(e=n.closest(o).querySelector(":scope > "+r)),m.siblings(e.closest(o)).forEach(function(e){e.querySelectorAll(c).forEach(function(e){e.classList.add("d-none")})}),e.closest(".mega-menu-content")&&(t=[],m.parents(e,o).forEach(function(e){t.push(e.querySelector(":scope > "+c))}),[].slice.call(e.closest(".mega-menu-content").querySelectorAll(c)).filter(function(e){return!t.includes(e)}).forEach(function(e){e.classList.add("d-none")})),d(e,o,c,r,"d-none")}})),t.contains("is-expanded-menu")&&((t.contains("side-header")||t.contains("overlay-menu"))&&m.getVars.elPrimaryMenus.forEach(function(e){e.classList.add("on-click"),e.querySelectorAll(r).forEach(function(e){e.style.zIndex="-1"})}),[].slice.call(m.getVars.elPrimaryMenus).filter(function(e){return e.matches(".on-click")}).forEach(function(e){m.has(e.querySelectorAll(o),r).forEach(function(e){var n=e.querySelector(":scope > .menu-link");n.onclick=function(e){var t;e.preventDefault(),m.siblings(n.closest(o)).forEach(function(e){e.querySelectorAll(c).forEach(function(e){e.classList.remove("d-block")})}),n.closest(".mega-menu-content")&&(t=[],m.parents(n,o).forEach(function(e){t.push(e.querySelector(":scope > "+c))}),[].slice.call(n.closest(".mega-menu-content").querySelectorAll(c)).filter(function(e){return!t.includes(e)}).forEach(function(e){e.classList.remove("d-block")})),d(n,o,c,r,"d-block")}})})),document.querySelectorAll(".top-links").forEach(function(e){!e.classList.contains("on-click")&&t.contains("device-up-lg")||e.querySelectorAll(".top-links-item").forEach(function(t){0<t.querySelectorAll(".top-links-sub-menu,.top-links-section").length&&(t.querySelector(":scope > a").onclick=function(e){e.preventDefault(),m.siblings(t).forEach(function(e){e.querySelectorAll(".top-links-sub-menu, .top-links-section").forEach(function(e){e.classList.remove("d-block")})}),t.querySelector(":scope > .top-links-sub-menu, :scope > .top-links-section").classList.toggle("d-block"),m.siblings(t).forEach(function(e){e.classList.remove("current")}),t.classList.toggle("current")})})}),f(document.querySelectorAll(".top-links-section"))}var m=SEMICOLON.Core,u=SEMICOLON.Base,f=function(e){var c,e=e||document.querySelectorAll(".mega-menu-content, .sub-menu-container, .top-links-section");if(!m.getVars.elBody.classList.contains("is-expanded-menu"))return!1;e.forEach(function(e){c=e.closest(".primary-menu"),e.classList.remove("menu-pos-invert");e.querySelectorAll(":scope > *").forEach(function(e){e.style.display="block"}),e.style.display="block";var t,n=e.getBoundingClientRect();e.closest(".mega-menu-small")&&(t=m.viewport().width-(n.left+n.width))<0&&(e.style.left=t+"px"),m.getVars.elBody.classList.contains("rtl")&&n.left<0&&e.classList.add("menu-pos-invert"),m.viewport().width-(n.left+n.width)<0&&e.classList.add("menu-pos-invert")}),e.forEach(function(e){e.querySelectorAll(":scope > *").forEach(function(e){e.style.display=""}),e.style.display=""}),c?.classList.add("primary-menu-init")},d=function(e,t,n,c,o){e.closest(".menu-container").querySelectorAll(c).forEach(function(e){e.classList.remove("icon-rotate-90")});var r,s,l,a,i=e.closest(t).querySelector(":scope > "+n),u=e.closest(t).querySelectorAll(n);"d-none"==o?i.classList.contains("d-none")?i.classList.remove("d-none"):u.forEach(function(e){e.classList.add("d-none")}):i.classList.contains("d-block")?u.forEach(function(e){e.classList.remove("d-block")}):i.classList.add("d-block"),o=e,r=t,s=n,l=c,[].slice.call(o.closest(".menu-container").querySelectorAll(r)).forEach(function(e){e.classList.remove("current")}),(a=function(e,t,n){m.isHidden(e.closest(t).querySelector(":scope > "+n))?(e.closest(t).classList.remove("current"),e.closest(t).querySelector(":scope > "+l)?.classList.remove("icon-rotate-90")):(e.closest(t).classList.add("current"),e.closest(t).querySelector(":scope > "+l)?.classList.add("icon-rotate-90"))})(o,r,s),m.parents(o,r).forEach(function(e){a(e,r,s)})};return{init:function(e){if((e=m.getSelector(e,!1)).length<1)return!0;m.getVars.headerWrapHeight=m.getVars.elHeaderWrap?.offsetHeight,t=[].slice.call(m.getVars.elPrimaryMenus).filter(function(e){return e.matches(".on-click")}),n=document.querySelectorAll(".top-links.on-click"),c=[],t.forEach(function(e){c.push(e.querySelector(".current"))}),o=[],n.forEach(function(e){o.push(e.querySelector(".current"))}),document.addEventListener("click",function(e){e.target.closest(".primary-menu-trigger")||e.target.closest(".primary-menu")||(l(),i()),e.target.closest(".primary-menu.on-click")||(t.forEach(function(e){e.querySelectorAll(".menu-item").forEach(function(e){e.classList.remove("current")})}),c?.forEach(function(e){e.classList.add("current")})),e.target.closest(".top-links.on-click")||(n.forEach(function(e){e.querySelectorAll(".top-links-sub-menu,.top-links-section").forEach(function(e){e.classList.remove("d-block")})}),n.forEach(function(e){e.querySelectorAll(".top-links-item").forEach(function(e){e.classList.remove("current")})}),o?.forEach(function(e){e.classList.add("current")}))},!1),document.querySelectorAll(".menu-item").forEach(function(e){var t;0<e.querySelectorAll(".sub-menu-container").length&&e.classList.add("sub-menu"),!e.classList.contains("mega-menu-title")&&0<e.querySelectorAll(".sub-menu-container").length&&e.querySelectorAll(".sub-menu-trigger").length<1&&((t=document.createElement("button")).classList="sub-menu-trigger fa-solid fa-chevron-right",t.innerHTML='<span class="visually-hidden">Open Sub-Menu</span>',e.append(t))}),l(),a(),f(),i(),r=m.getVars.elBody.classList,document.querySelectorAll(".primary-menu-trigger").forEach(function(n){n.onclick=function(e){e.preventDefault();var t=n.getAttribute("data-target")||"*";m.filtered(m.getVars.elPrimaryMenus,t).length<1||(r.contains("is-expanded-menu")||m.getVars.elPrimaryMenus.forEach(function(e){0<e.querySelectorAll(".mobile-primary-menu").length?e.matches(t)&&e.querySelectorAll(".mobile-primary-menu").forEach(function(e){e.classList.toggle("d-block")}):e.matches(t)&&e.querySelectorAll(".menu-container").forEach(function(e){e.classList.toggle("d-block")})}),n.classList.toggle("primary-menu-trigger-active"),m.getVars.elPrimaryMenus.forEach(function(e){e.matches(t)&&e.classList.toggle("primary-menu-active")}),r.toggle("primary-menu-open"),"*"!=t?r.toggle("primary-menu-open-"+t.replace(/[^a-zA-Z0-9-]/g,"")):r.toggle("primary-menu-open-all"))}}),function(){if(!m.getVars.elBody.classList.contains("is-expanded-menu"))return document.querySelectorAll(".mega-menu-content, .top-search-form").forEach(function(e){e.style.width=""});var t,n=document.querySelector(".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content")?.closest(".header-row").offsetWidth;0<m.getVars.elHeader.querySelectorAll(".container-fullwidth").length&&document.querySelectorAll(".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content").forEach(function(e){e.style.width=n+"px"}),document.querySelectorAll(".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content, .top-search-form").forEach(function(e){e.style.width=n+"px"}),m.getVars.elHeader.classList.contains("full-header")&&document.querySelectorAll(".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content").forEach(function(e){e.style.width=n+"px"}),m.getVars.elHeader.classList.contains("floating-header")&&(t=getComputedStyle(document.querySelector("#header")).getPropertyValue("--cnvs-header-floating-padding"),document.querySelectorAll(".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content").forEach(function(e){e.style.width=n+2*Number(t.split("px")[0])+"px"}))}();var t,n,c,o,r,s=m.viewport().width;m.getVars.resizers.menus=function(){s!=m.viewport().width&&u.menus()},m.getVars.recalls.menureset=function(){l(),i()}}}}();
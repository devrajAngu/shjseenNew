CNVS.PageMenu=function(){function n(e){var t=r.getVars.elPageMenu;window.scrollY>e?!r.getVars.elBody.classList.contains("device-up-lg")&&"true"!=t.getAttribute("data-mobile-sticky")||t.classList.add("sticky-page-menu"):t.classList.remove("sticky-page-menu")}var r=SEMICOLON.Core;return{init:function(e){var t,s,a;return(e=r.getSelector(e,!1)).length<1||(e=(t=r.getVars.elPageMenu).querySelector("#page-menu-wrap"),(s=t.querySelector(".page-menu-wrap-clone"))||((s=document.createElement("div")).classList="page-menu-wrap-clone",e.parentNode.insertBefore(s,e.nextSibling),s=t.querySelector(".page-menu-wrap-clone")),s.style.height=t.querySelector("#page-menu-wrap").offsetHeight+"px",t.querySelector("#page-menu-trigger").onclick=function(e){e.preventDefault(),r.getVars.elBody.classList.remove("top-search-open"),t.classList.toggle("page-menu-open")},t.querySelector("nav").onclick=function(e){r.getVars.elBody.classList.remove("top-search-open"),document.getElementById("top-cart").classList.remove("top-cart-open")},document.addEventListener("click",function(e){e.target.closest("#page-menu")||t.classList.remove("page-menu-open")},!1),!(!t.classList.contains("no-sticky")&&!t.classList.contains("dots-menu")))||(a=(r.getVars.elHeader.classList.contains("no-sticky")||"false"==r.getVars.elHeader.getAttribute("data-sticky-shrink")?getComputedStyle(r.getVars.elHeader).getPropertyValue("--cnvs-header-height"):getComputedStyle(r.getVars.elHeader).getPropertyValue("--cnvs-header-height-shrink")).split("px")[0],"false"==r.getVars.elHeader.getAttribute("data-sticky-shrink")&&t.style.setProperty("--cnvs-page-submenu-sticky-offset",a+"px"),setTimeout(function(){r.getVars.pageMenuOffset=r.offset(t).top-a,n(r.getVars.pageMenuOffset)},500),window.addEventListener("scroll",function(){n(r.getVars.pageMenuOffset)},{passive:!0}),void(r.getVars.resizers.pagemenu=function(){setTimeout(function(){r.getVars.pageMenuOffset=r.offset(t).top-a,n(r.getVars.pageMenuOffset)},250)}))}}}();
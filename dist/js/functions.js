var $;"undefined"!=typeof jQuery&&($=jQuery.noConflict()),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).SEMICOLON=t()}(this,function(){"use strict";var d={pageTransition:!1,cursor:!1,tips:!1,headerSticky:!0,headerMobileSticky:!1,menuBreakpoint:992,pageMenuBreakpoint:992,gmapAPI:"",scrollOffset:60,scrollExternalLinks:!0,smoothScroll:!1,jsFolder:"js/",cssFolder:"css/"},s=("undefined"!=typeof cnvsOptions&&(d=Object.assign({},d,cnvsOptions)),{baseEl:document,elRoot:document.documentElement,elHead:document.head,elBody:document.body,viewport:{width:0,height:0},hash:window.location.hash,topScrollOffset:0,elWrapper:document.getElementById("wrapper"),elHeader:document.getElementById("header"),headerClasses:"",elHeaderWrap:document.getElementById("header-wrap"),headerWrapClasses:"",headerHeight:0,headerOffset:0,headerWrapHeight:0,headerWrapOffset:0,elPrimaryMenus:document.querySelectorAll(".primary-menu"),elPrimaryMenuTriggers:document.querySelectorAll(".primary-menu-trigger"),elPageMenu:document.getElementById("page-menu"),pageMenuOffset:0,elSlider:document.getElementById("slider"),elFooter:document.getElementById("footer"),elAppMenu:document.querySelector(".app-menu"),portfolioAjax:{},sliderParallax:{el:document.querySelector(".slider-parallax"),caption:document.querySelector(".slider-parallax .slider-caption"),inner:document.querySelector(".slider-inner"),offset:0},get menuBreakpoint(){return this.elBody.getAttribute("data-menu-breakpoint")||d.menuBreakpoint},get pageMenuBreakpoint(){return this.elBody.getAttribute("data-pagemenu-breakpoint")||d.pageMenuBreakpoint},get customCursor(){var e=this.elBody.getAttribute("data-custom-cursor")||d.cursor;return"true"==e||!0===e},get pageTransition(){var e=this.elBody.classList.contains("page-transition")||d.pageTransition;return"true"==e||!0===e},get tips(){var e=this.elBody.getAttribute("data-tips")||d.tips;return"true"==e||!0===e},get smoothScroll(){var e=this.elBody.getAttribute("data-smooth-scroll")||d.smoothScroll;return"true"==e||!0===e},get isRTL(){return"rtl"==this.elRoot.getAttribute("dir")},scrollPos:{x:0,y:0},$jq:"undefined"!=typeof jQuery?jQuery.noConflict():"",resizers:{},recalls:{},debounced:!1,events:{},modules:{},fn:{},required:{jQuery:{plugin:"jquery",fn:function(){return"undefined"!=typeof jQuery},file:d.jsFolder+"jquery.js",id:"canvas-jquery"}},fnInit:function(){i.init(),u.init(),o.init()}}),l={getOptions:d,getVars:s,run:function(e){Object.values(e).map(function(e){return"function"==typeof e&&e.call()})},runBase:function(){l.run(e)},runModules:function(){l.run(t)},runContainerModules:function(e){if(void 0===e)return!1;l.getVars.baseEl=e,l.runModules(),l.getVars.baseEl=document},breakpoints:function(){var t=l.viewport().width,n={xxl:{enter:1400,exit:99999},xl:{enter:1200,exit:1399},lg:{enter:992,exit:1199.98},md:{enter:768,exit:991.98},sm:{enter:576,exit:767.98},xs:{enter:0,exit:575.98}},r="";Object.keys(n).forEach(function(e){t>n[e].enter&&t<=n[e].exit?s.elBody.classList.add("device-"+e):(s.elBody.classList.remove("device-"+e),""!=r&&s.elBody.classList.remove("device-down-"+r)),t<=n[e].exit&&""!=r&&s.elBody.classList.add("device-down-"+r),t>n[r=e].enter?s.elBody.classList.add("device-up-"+e):s.elBody.classList.remove("device-up-"+e)})},colorScheme:function(){s.elBody.classList.contains("adaptive-color-scheme")&&(window.matchMedia("(prefers-color-scheme: dark)").matches?s.elBody.classList.add("dark"):s.elBody.classList.remove("dark"));var e=l.cookie.get("__cnvs_body_color_scheme");e&&""!=e&&(e.split(" ").includes("dark")?s.elBody.classList.add("dark"):s.elBody.classList.remove("dark"))},throttle:function(e,t,n){e=e||setTimeout(function(){t(),e=void 0},n)},debounce:function(e,t){clearTimeout(s.debounced),s.debounced=setTimeout(e,t)},debouncedResize:function(n,r){var o;return function(){var e=this,t=arguments;clearTimeout(o),o=setTimeout(function(){n.apply(e,t)},r)}},addEvent:function(e,t,n={}){void 0!==e&&void 0!==t&&(n=new CustomEvent(t,{detail:n}),e.dispatchEvent(n),s.events[t]=!0)},scrollEnd:function(e,t=199){e&&"function"==typeof e&&window.addEventListener("scroll",function(){l.debounce(e,t)},{passive:!0})},viewport:function(){var e={width:window.innerWidth||s.elRoot.clientWidth,height:window.innerHeight||s.elRoot.clientHeight};return s.viewport=e,document.documentElement.style.setProperty("--cnvs-viewport-width",e.width),document.documentElement.style.setProperty("--cnvs-viewport-height",e.height),document.documentElement.style.setProperty("--cnvs-body-height",s.elBody.clientHeight),e},isElement:function(e){return"object"==typeof e&&null!==e||e instanceof Element||e instanceof HTMLElement||void 0!==(e=void 0!==e.jquery?e[0]:e).nodeType},getSelector:function(e,t=!0,n=!0){return t?(e=l.getVars.baseEl!==document?jQuery(l.getVars.baseEl).find(e):jQuery(e),n&&(e="string"==typeof n?e.filter(":not("+n+")"):e.filter(":not(.customjs)"))):l.isElement(e)||(e=n?"string"==typeof n?l.getVars.baseEl.querySelectorAll(e+":not("+n+")"):l.getVars.baseEl.querySelectorAll(e+":not(.customjs)"):l.getVars.baseEl.querySelectorAll(e)),e},onResize:function(e,t=333){e&&"function"==typeof e&&window.addEventListener("resize",function(){l.debounce(e,t)})},imagesLoaded:function(e){async function t(){++o===r&&l.addEvent(e,"CanvasImagesLoaded")}var n=e.getElementsByTagName("img")||document.images,r=n.length,o=0;r<1&&l.addEvent(e,"CanvasImagesLoaded");[].forEach.call(n,function(e){e.complete?t():e.addEventListener("load",t,!1)})},contains:function(e,t){var e=e.split(" "),n=!1;return e.forEach(function(e){s.elBody.classList.contains(e)&&(n=!0)}),n},has:function(e,t){return[].slice.call(e)?.filter(function(e){return e.querySelector(t)})},filtered:function(e,t){return[].slice.call(e)?.filter(function(e){return e.matches(t)})},parents:function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n});for(var n=[];e&&e!==document;e=e.parentNode)(!t||e.matches(t))&&n.push(e);return n},siblings:function(t,e=!1){return e?[].slice.call(e).filter(function(e){return e!==t}):[].slice.call(t.parentNode.children).filter(function(e){return e!==t})},getNext:function(e,t){e=e.nextElementSibling;return!t||e&&e.matches(t)?e:null},offset:function(e){var e=e.getBoundingClientRect(),t=window.scrollX||document.documentElement.scrollLeft,n=window.scrollY||document.documentElement.scrollTop;return{top:e.top+n,left:e.left+t}},isHidden:function(e){return null===e.offsetParent},classesFn:function(t,e,n){e.split(" ").forEach(function(e){"add"==t?n.classList.add(e):"toggle"==t?n.classList.toggle(e):n.classList.remove(e)})},cookie:{set:function(e,t,n){var r=new Date,n=(r.setTime(r.getTime()+24*n*60*60*1e3),"expires="+r.toUTCString());document.cookie=e+"="+t+";"+n+";path=/"},get:function(t){var n=decodeURIComponent(document.cookie).split(";");for(let e=0;e<n.length;e++){var r=n[e].trim();if(r.startsWith(t+"="))return r.substring(t.length+1)}return null},remove:function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}},scrollTo:function(e=0,t=1250,n,r="smooth"){var o,i,u;n&&"undefined"!=typeof jQuery&&void 0!==jQuery.easing.easeOutQuad?jQuery("body,html").stop(!0).animate({scrollTop:Number(e)},Number(t),n):(t="scrollBehavior"in document.documentElement.style,"function"==typeof window.scroll&&t?window.scroll({top:Number(e),behavior:r}):(o=l.getVars.elBody,i=l.getVars.elRoot,o.scrollIntoView(),i.scrollIntoView(),(u=function(){(o.scrollTop>Number(e)||i.scrollTop>Number(e))&&(o.scrollTop-=20,i.scrollTop-=20,setTimeout(u,10))})()))},smoothScroll:function(){function e(e){e.preventDefault();e=(e=e).detail?e.wheelDelta?e.wheelDelta/e.detail/40*(0<e.detail?1:-1):-e.detail/3:e.wheelDelta/120;u+=-e*r,u=Math.max(0,Math.min(u,n.scrollHeight-l.clientHeight)),i||t()}function t(){i=!0;var e=(u-n.scrollTop)/o;n.scrollTop+=e,.5<Math.abs(e)?d(t):i=!1}var n,r,o,i,u,l,d;n=document,r=90,o=5,n===document&&(n=document.scrollingElement||document.documentElement||document.body.parentNode||document.body),i=!1,u=n.scrollTop,l=n===document.body&&document.documentElement?document.documentElement:n,n.addEventListener("mousewheel",e,{passive:!1}),n.addEventListener("DOMMouseScroll",e,{passive:!1}),d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,20)}},loadCSS:function(e){var t,n=e.file,r=e.id||!1,e=e.cssFolder||!1;return!!n&&!(r&&document.getElementById(r)||((t=document.createElement("link")).id=r,t.href=e?d.cssFolder+n:n,t.rel="stylesheet",t.type="text/css",s.elHead.appendChild(t),0))},loadJS:function(e){var t=e.file,n=e.id||!1,r=e.type||!1,o=e.callback,i=e.async||!0,u=e.defer||!0,e=e.jsFolder||!1;if(!t)return!1;if(n&&document.getElementById(n))return!1;var l=document.createElement("script");if(void 0!==o){if("function"!=typeof o)throw new Error("Not a valid callback!");l.onload=o}return l.id=n,l.src=e?d.jsFolder+t:t,r&&(l.type=r),l.async=!!i,l.defer=!!u,s.elBody.appendChild(l),!0},isFuncTrue:async function(r){var o;return"function"==typeof r&&(o=0,new Promise(function(e,t){var n;r()?e(!0):n=setInterval(function(){r()?(clearInterval(n),e(!0)):30<o&&(clearInterval(n),t(!0)),o++},333)}).catch(function(e){console.log("Function does not exist: "+r)}))},initFunction:function(e){s.elBody.classList.add(e.class),l.addEvent(window,e.event),s.events[e.event]=!0},runModule:function(t){function e(){return void 0!==CNVS[t.plugin]}var n=t.plugin.toLowerCase(),r=d.jsFolder+"modules/"+n+".js";t.file&&(r=t.file);return e()?CNVS[t.plugin].init(t.selector):(l.loadJS({file:r,id:"canvas-"+n+"-fn"}),l.isFuncTrue(e).then(function(e){if(!e)return!1;CNVS[t.plugin].init(t.selector)})),!0},initModule:function(t){if("dependent"!=t.selector&&("object"==typeof t.selector?(t.selector instanceof jQuery&&(t.selector=t.selector[0]),t.selector):l.getVars.baseEl.querySelectorAll(t.selector)).length<1)return!1;var r,o=!0,e=!0;return t.required&&Array.isArray(t.required)&&(r={},t.required.forEach(function(e){return r[e.plugin]=!!e.fn()}),t.required.forEach(function(n){n.fn()||(o=!1,async function(){l.loadJS({file:n.file,id:n.id});var e=new Promise(function(e){var t=setInterval(function(){n.fn()&&(r[n.plugin]=!0,Object.values(r).every(function(e){return!0===e}))&&(clearInterval(t),e(!0))},333)});o=await e,l.runModule(t)}())})),void 0!==t.dependency&&"function"==typeof t.dependency&&(e=!1,e=async function(){return new Promise(function(e){1==t.dependency.call(t,"dependent")&&e(!0)})}()),o&&e&&l.runModule(t),!0},topScrollOffset:function(){var e=0,t=s.elPageMenu?.querySelector("#page-menu-wrap")?.offsetHeight||0;s.elBody.classList.contains("is-expanded-menu")&&(s.elHeader?.classList.contains("sticky-header")&&(e=s.elHeaderWrap.offsetHeight),s.elPageMenu?.classList.contains("dots-menu"))&&(t=0),l.getVars.topScrollOffset=(e+=t)+d.scrollOffset}},e={init:function(){n.any()&&s.elBody.classList.add("device-touch")},menuBreakpoint:function(){l.getVars.menuBreakpoint<=l.viewport().width?s.elBody.classList.add("is-expanded-menu"):s.elBody.classList.remove("is-expanded-menu"),s.elPageMenu&&(void 0===l.getVars.pageMenuBreakpoint&&(l.getVars.pageMenuBreakpoint=l.getVars.menuBreakpoint),l.getVars.pageMenuBreakpoint<=l.viewport().width?s.elBody.classList.add("is-expanded-pagemenu"):s.elBody.classList.remove("is-expanded-pagemenu"))},goToTop:function(){return l.initModule({selector:"#gotoTop",plugin:"GoToTop"})},stickFooterOnSmall:function(){return l.initModule({selector:"#footer",plugin:"StickFooterOnSmall"})},logo:function(){return l.initModule({selector:"#logo",plugin:"Logo"})},headers:function(){return l.getVars.headerClasses=s.elHeader?.className||"",l.getVars.headerWrapClasses=s.elHeaderWrap?.className||"",l.initModule({selector:"#header",plugin:"Headers"})},menus:function(){return l.initModule({selector:"#header",plugin:"Menus"})},pageMenu:function(){return l.initModule({selector:"#page-menu",plugin:"PageMenu"})},sliderDimensions:function(){return l.initModule({selector:".slider-element",plugin:"SliderDimensions"})},sliderMenuClass:function(){return l.initModule({selector:".transparent-header + .swiper_wrapper,.swiper_wrapper + .transparent-header,.transparent-header + .revslider-wrap,.revslider-wrap + .transparent-header",plugin:"SliderMenuClass"})},topSearch:function(){return l.initModule({selector:"#top-search-trigger",plugin:"TopSearch"})},topCart:function(){return l.initModule({selector:"#top-cart",plugin:"TopCart"})},sidePanel:function(){return l.initModule({selector:"#side-panel",plugin:"SidePanel"})},adaptiveColorScheme:function(){return l.initModule({selector:".adaptive-color-scheme",plugin:"AdaptiveColorScheme"})},portfolioAjax:function(){return l.initModule({selector:".portfolio-ajax",plugin:"PortfolioAjax"})},cursor:function(){if(s.customCursor)return l.initModule({selector:"body",plugin:"Cursor"})},setBSTheme:function(){s.elBody.classList.contains("dark")?document.querySelector("html").setAttribute("data-bs-theme","dark"):(document.querySelector("html").removeAttribute("data-bs-theme"),document.querySelectorAll(".dark")?.forEach(function(e){e.setAttribute("data-bs-theme","dark")})),s.elBody.querySelectorAll(".not-dark")?.forEach(function(e){e.setAttribute("data-bs-theme","light")})}},t={easing:function(){return l.initModule({selector:"[data-easing]",plugin:"Easing",required:[s.required.jQuery]})},bootstrap:function(){var t=!0;document.querySelectorAll("*").forEach(function(e){t&&e.getAttributeNames().some(function(e){if(e.includes("data-bs"))return t=!1,l.initModule({selector:"body",plugin:"Bootstrap"})})})},resizeVideos:function(e){return l.initModule({selector:e||'iframe[src*="youtube"],iframe[src*="vimeo"],iframe[src*="dailymotion"],iframe[src*="maps.google.com"],iframe[src*="google.com/maps"]',plugin:"ResizeVideos",required:[s.required.jQuery]})},pageTransition:function(){if(s.pageTransition)return l.initModule({selector:"body",plugin:"PageTransition"})},lazyLoad:function(e){return l.initModule({selector:e||".lazy:not(.lazy-loaded)",plugin:"LazyLoad"})},dataClasses:function(){return l.initModule({selector:"[data-class]",plugin:"DataClasses"})},dataHeights:function(){return l.initModule({selector:"[data-height-xxl],[data-height-xl],[data-height-lg],[data-height-md],[data-height-sm],[data-height-xs]",plugin:"DataHeights"})},lightbox:function(e){return l.initModule({selector:e||"[data-lightbox]",plugin:"Lightbox",required:[s.required.jQuery]})},modal:function(e){return l.initModule({selector:e||".modal-on-load",plugin:"Modal",required:[s.required.jQuery]})},animations:function(e){return l.initModule({selector:e||"[data-animate]",plugin:"Animations"})},hoverAnimations:function(e){return l.initModule({selector:e||"[data-hover-animate]",plugin:"HoverAnimations"})},gridInit:function(e){return l.initModule({selector:e||".grid-container",plugin:"Grid",required:[s.required.jQuery]})},filterInit:function(e){return l.initModule({selector:e||".grid-filter,.custom-filter",plugin:"Filter",required:[s.required.jQuery]})},canvasSlider:function(e){return l.initModule({selector:e||".swiper_wrapper",plugin:"CanvasSlider"})},sliderParallax:function(){return l.initModule({selector:".slider-parallax",plugin:"SliderParallax"})},flexSlider:function(e){return l.initModule({selector:e||".fslider",plugin:"FlexSlider",required:[s.required.jQuery]})},html5Video:function(e){return l.initModule({selector:e||".video-wrap",plugin:"FullVideo"})},youtubeBgVideo:function(e){return l.initModule({selector:e||".yt-bg-player",plugin:"YoutubeBG",required:[s.required.jQuery]})},toggle:function(e){return l.initModule({selector:e||".toggle",plugin:"Toggle",required:[s.required.jQuery]})},accordion:function(e){return l.initModule({selector:e||".accordion",plugin:"Accordion",required:[s.required.jQuery]})},counter:function(e){return l.initModule({selector:e||".counter",plugin:"Counter",required:[s.required.jQuery]})},countdown:function(e){return l.initModule({selector:e||".countdown",plugin:"Countdown",required:[s.required.jQuery]})},gmap:function(e){return l.initModule({selector:e||".gmap",plugin:"GoogleMaps",required:[s.required.jQuery]})},roundedSkills:function(e){return l.initModule({selector:e||".rounded-skill",plugin:"RoundedSkills",required:[s.required.jQuery]})},progress:function(e){return l.initModule({selector:e||".skill-progress",plugin:"Progress"})},twitterFeed:function(e){return l.initModule({selector:e||".twitter-feed",plugin:"Twitter",required:[s.required.jQuery]})},flickrFeed:function(e){return l.initModule({selector:e||".flickr-feed",plugin:"Flickr",required:[s.required.jQuery]})},instagram:function(e){return l.initModule({selector:e||".instagram-photos",plugin:"Instagram"})},navTree:function(e){return l.initModule({selector:e||".nav-tree",plugin:"NavTree",required:[s.required.jQuery]})},carousel:function(e){return l.initModule({selector:e||".carousel-widget",plugin:"Carousel",required:[s.required.jQuery]})},masonryThumbs:function(e){return l.initModule({selector:e||".masonry-thumbs",plugin:"MasonryThumbs",required:[s.required.jQuery]})},notifications:function(e){return l.initModule({selector:e||!1,plugin:"Notifications",required:[s.required.jQuery]})},textRotator:function(e){return l.initModule({selector:e||".text-rotater",plugin:"TextRotator",required:[s.required.jQuery]})},onePage:function(e){return l.initModule({selector:e||"[data-scrollto],.one-page-menu",plugin:"OnePage"})},ajaxForm:function(e){return l.initModule({selector:e||".form-widget",plugin:"AjaxForm",required:[s.required.jQuery]})},subscribe:function(e){return l.initModule({selector:e||".subscribe-widget",plugin:"Subscribe",required:[s.required.jQuery]})},conditional:function(e){return l.initModule({selector:e||".form-group[data-condition],.form-group[data-conditions]",plugin:"Conditional"})},shapeDivider:function(e){return l.initModule({selector:e||".shape-divider",plugin:"ShapeDivider"})},stickySidebar:function(e){return l.initModule({selector:e||".sticky-sidebar-wrap",plugin:"StickySidebar",required:[s.required.jQuery]})},cookies:function(e){return l.initModule({selector:e||".gdpr-settings,[data-cookies]",plugin:"Cookies"})},quantity:function(e){return l.initModule({selector:e||".quantity",plugin:"Quantity"})},readmore:function(e){return l.initModule({selector:e||"[data-readmore]",plugin:"ReadMore"})},pricingSwitcher:function(e){return l.initModule({selector:e||".pricing-tenure-switcher",plugin:"PricingSwitcher"})},ajaxButton:function(e){return l.initModule({selector:e||"[data-ajax-loader]",plugin:"AjaxButton"})},videoFacade:function(e){return l.initModule({selector:e||".video-facade",plugin:"VideoFacade"})},schemeToggle:function(e){return l.initModule({selector:e||".body-scheme-toggle",plugin:"SchemeToggle"})},clipboardCopy:function(e){return l.initModule({selector:e||".clipboard-copy",plugin:"Clipboard"})},codeHighlight:function(e){return l.initModule({selector:e||".code-highlight",plugin:"CodeHighlight"})},tips:function(){if(s.tips)return l.initModule({selector:"body",plugin:"Tips"})},textSplitter:function(e){return l.initModule({selector:e||".text-splitter",plugin:"TextSplitter"})},mediaActions:function(e){return l.initModule({selector:e||".media-wrap",plugin:"MediaActions"})},viewportDetect:function(e){return l.initModule({selector:e||".viewport-detect",plugin:"ViewportDetect"})},scrollDetect:function(e){return l.initModule({selector:e||".scroll-detect",plugin:"ScrollDetect"})},fontSizer:function(e){return l.initModule({selector:e||".font-sizer",plugin:"FontSizer"})},hover3D:function(e){return l.initModule({selector:e||".hover-3d",plugin:"Hover3D"})},bsComponents:function(e){return l.initModule({selector:e||'[data-bs-toggle="tooltip"],[data-bs-toggle="popover"],[data-bs-toggle="tab"],[data-bs-toggle="pill"],.style-msg',plugin:"BSComponents"})}},n={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return n.Android()||n.BlackBerry()||n.iOS()||n.Opera()||n.Windows()}},r={onReady:function(){},onLoad:function(){},onResize:function(){}},o={init:function(){l.viewport(),l.breakpoints(),e.menuBreakpoint(),l.run(s.resizers),r.onResize(),l.addEvent(window,"cnvsResize")}},i={init:function(){l.breakpoints(),l.colorScheme(),l.runBase(),l.runModules(),l.topScrollOffset(),s.smoothScroll&&new l.smoothScroll,i.windowscroll(),r.onReady()},windowscroll:function(){l.scrollEnd(function(){e.pageMenu()})}},u={init:function(){r.onLoad()}},a=(document.addEventListener("DOMContentLoaded",function(){i.init()}),window.addEventListener("load",function(){u.init()}),l.debouncedResize(function(){o.init()},250));return window.addEventListener("resize",function(){a()}),{Core:l,Base:e,Modules:t,Mobile:n,Custom:r}}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).CNVS=t()}(this,function(){"use strict";return"undefined"!==SEMICOLON&&"undefined"!==SEMICOLON.Core&&"undefined"!==SEMICOLON.Base&&"undefined"!==SEMICOLON.Modules&&"undefined"!==SEMICOLON.Mobile&&{}});
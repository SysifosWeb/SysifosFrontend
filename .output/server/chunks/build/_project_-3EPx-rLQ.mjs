import { b as useRoute, c as useRouter, e as useHead, a as __nuxt_component_0$1, m as useState } from './server.mjs';
import * as vue from 'vue';
import { defineComponent, computed, ref, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, isRef, reactive, useModel, mergeModels, withDirectives, vShow, nextTick, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { ArrowLeft, SquareKanban, Shield, Plus, Activity, Search, X, RefreshCw, Rows3, Loader2, Check, GitBranch, ExternalLink, MessageSquare, Trash2, Layers, Bug, BookOpen, SquareCheck, GripVertical, Calendar, Pencil } from 'lucide-vue-next';
import { u as useApi, a as apiErrorMessage, b as apiStatus } from './useApi-CzfxiAaW.mjs';
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'xss';
import 'ipx';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var vuedraggable_umd_min$1 = {exports: {}};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vue);

var Sortable_min$1 = {exports: {}};

/*! Sortable 1.14.0 - MIT | git://github.com/SortableJS/Sortable.git */
var Sortable_min = Sortable_min$1.exports;

var hasRequiredSortable_min;

function requireSortable_min () {
	if (hasRequiredSortable_min) return Sortable_min$1.exports;
	hasRequiredSortable_min = 1;
	(function (module, exports) {
		!function(t,e){module.exports=e();}(Sortable_min,function(){function e(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function A(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),true).forEach(function(t){var e,n;e=o,t=i[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:true,configurable:true,writable:true}):e[n]=t;}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(i,t));});}return o}function o(t){return (o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return (a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);}return t}).apply(this,arguments)}function i(t,e){if(null==t)return {};var n,o=function(t,e){if(null==t)return {};for(var n,o={},i=Object.keys(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n]);return o}function r(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return "Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function t(t){}var y=t(),w=t(),s=t(),u=t()&&!t()&&!t(),n=t(),c=t()&&t(),d={capture:false,passive:false};function h(t,e,n){t.addEventListener(e,n,!y&&d);}function f(t,e,n){t.removeEventListener(e,n,!y&&d);}function p(t,e){if(e&&(">"===e[0]&&(e=e.substring(1)),t))try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return}}function N(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"!==e[0]||t.parentNode===n)&&p(t,e)||o&&t===n)return t}while(t!==n&&(t=(i=t).host&&i!==document&&i.host.nodeType?i.host:i.parentNode))}var i;return null}var g,m=/\s+/g;function I(t,e,n){var o;t&&e&&(t.classList?t.classList[n?"add":"remove"](e):(o=(" "+t.className+" ").replace(m," ").replace(" "+e+" "," "),t.className=(o+(n?" "+e:"")).replace(m," ")));}function P(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];o[e=!(e in o||-1!==e.indexOf("webkit"))?"-webkit-"+e:e]=n+("string"==typeof n?"":"px");}}function v(t,e){var n="";if("string"==typeof t)n=t;else do{var o=P(t,"transform");}while(o&&"none"!==o&&(n=o+" "+n),!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function b(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return []}function O(){var t=document.scrollingElement;return t||document.documentElement}function k(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d=t!==window&&t.parentNode&&t!==O()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth);if((e||n)&&t!==window&&(i=i||t.parentNode,!y))do{if(i&&i.getBoundingClientRect&&("none"!==P(i,"transform")||n&&"static"!==P(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(P(i,"border-top-width")),l-=h.left+parseInt(P(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);return o&&t!==window&&(o=(e=v(i||t))&&e.a,t=e&&e.d,e&&(s=(a/=t)+(u/=t),c=(l/=o)+(d/=o))),{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function R(t,e,n){for(var o=M(t,true),i=k(t)[e];o;){var r=k(o)[n];if(!(r<=i))return o;if(o===O())break;o=M(o,false);}return  false}function X(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Bt.ghost&&(o||a[r]!==Bt.dragged)&&N(a[r],n.draggable,t,false)){if(i===e)return a[r];i++;}r++;}return null}function Y(t,e){for(var n=t.lastElementChild;n&&(n===Bt.ghost||"none"===P(n,"display")||e&&!p(n,e));)n=n.previousElementSibling;return n||null}function B(t,e){var n=0;if(!t||!t.parentNode)return  -1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Bt.clone||e&&!p(t,e)||n++;return n}function E(t){var e=0,n=0,o=O();if(t)do{var i=v(t),r=i.a,i=i.d;}while(e+=t.scrollLeft*r,n+=t.scrollTop*i,t!==o&&(t=t.parentNode));return [e,n]}function M(t,e){if(!t||!t.getBoundingClientRect)return O();var n=t,o=false;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=P(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return O();if(o||e)return n;o=true;}}}while(n=n.parentNode);return O()}function D(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function S(e,n){return function(){var t;g||(1===(t=arguments).length?e.call(this,t[0]):e.apply(this,t),g=setTimeout(function(){g=void 0;},n));}}function F(t,e,n){t.scrollLeft+=e,t.scrollTop+=n;}function _(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(true):n?n(t).clone(true)[0]:t.cloneNode(true)}function C(t,e){P(t,"position","absolute"),P(t,"top",e.top),P(t,"left",e.left),P(t,"width",e.width),P(t,"height",e.height);}function T(t){P(t,"position",""),P(t,"top",""),P(t,"left",""),P(t,"width",""),P(t,"height","");}var j="Sortable"+(new Date).getTime();function x(){var e,o=[];return {captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){var e,n;"none"!==P(t,"display")&&t!==Bt.ghost&&(o.push({target:t,rect:k(t)}),e=A({},o[o.length-1].rect),!t.thisAnimationDuration||(n=v(t,true))&&(e.top-=n.f,e.left-=n.e),t.fromRect=e);});},addAnimationState:function(t){o.push(t);},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return  -1}(o,{target:t}),1);},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=false,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=k(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=v(n,true);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&D(r,i)&&!D(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(t=l,s=r,r=a,a=c.options,e=Math.sqrt(Math.pow(s.top-t.top,2)+Math.pow(s.left-t.left,2))/Math.sqrt(Math.pow(s.top-r.top,2)+Math.pow(s.left-r.left,2))*a.animation),D(i,o)||(n.prevFromRect=o,n.prevToRect=i,e=e||c.options.animation,c.animate(n,l,i,e)),e&&(u=true,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null;},e),n.thisAnimationDuration=e);}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t();},d):"function"==typeof t&&t(),o=[];},animate:function(t,e,n,o){var i,r;o&&(P(t,"transition",""),P(t,"transform",""),i=(r=v(this.el))&&r.a,r=r&&r.d,i=(e.left-n.left)/(i||1),r=(e.top-n.top)/(r||1),t.animatingX=!!i,t.animatingY=!!r,P(t,"transform","translate3d("+i+"px,"+r+"px,0)"),this.forRepaintDummy=t.offsetWidth,P(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),P(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){P(t,"transition",""),P(t,"transform",""),t.animated=false,t.animatingX=false,t.animatingY=false;},o));}}}var H=[],L={initializeByDefault:true},K={mount:function(e){for(var t in L)!L.hasOwnProperty(t)||t in e||(e[t]=L[t]);H.forEach(function(t){if(t.pluginName===e.pluginName)throw "Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),H.push(e);},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=false,o.cancel=function(){t.eventCanceled=true;};var i=e+"Global";H.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](A({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](A({sortable:n},o)));});},initializePlugins:function(n,o,i,t){for(var e in H.forEach(function(t){var e=t.pluginName;(n.options[e]||t.initializeByDefault)&&((t=new t(n,o,n.options)).sortable=n,t.options=n.options,n[e]=t,a(i,t.defaults));}),n.options){var r;n.options.hasOwnProperty(e)&&(void 0!==(r=this.modifyOption(n,e,n.options[e]))&&(n.options[e]=r));}},getEventProperties:function(e,n){var o={};return H.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e));}),o},modifyOption:function(e,n,o){var i;return H.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o));}),i}};function W(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,f=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[j]){var g,m=e.options,t="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||y||w?(g=document.createEvent("Event")).initEvent(o,true,true):g=new CustomEvent(o,{bubbles:true,cancelable:true}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=f?f.lastPutMode:void 0;var v,b=A(A({},p),K.getEventProperties(o,e));for(v in b)g[v]=b[v];n&&n.dispatchEvent(g),m[t]&&m[t].call(e,g);}}function z(t,e){var n=(o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).evt,o=i(o,G);K.pluginEvent.bind(Bt)(t,e,A({dragEl:q,parentEl:V,ghostEl:Z,rootEl:$,nextEl:Q,lastDownEl:J,cloneEl:tt,cloneHidden:et,dragStarted:pt,putSortable:lt,activeSortable:Bt.active,originalEvent:n,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt,hideGhostForTarget:kt,unhideGhostForTarget:Rt,cloneNowHidden:function(){et=true;},cloneNowShown:function(){et=false;},dispatchSortableEvent:function(t){U({sortable:e,name:t,originalEvent:n});}},o));}var G=["evt"];function U(t){W(A({putSortable:lt,cloneEl:tt,targetEl:q,rootEl:$,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt},t));}var q,V,Z,$,Q,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,mt,vt,bt,yt=false,wt=false,Et=[],Dt=false,St=false,_t=[],Ct=false,Tt=[],xt="undefined"!=typeof document,Ot=n,Mt=w||y?"cssFloat":"float",At=xt&&!c&&!n&&"draggable"in document.createElement("div"),Nt=function(){if(xt){if(y)return  false;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),It=function(t,e){var n=P(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=X(t,0,e),r=X(t,1,e),a=i&&P(i),l=r&&P(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+k(i).width,t=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+k(r).width;if("flex"===n.display)return "column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){e="left"===a.float?"left":"right";return !r||"both"!==l.clear&&l.clear!==e?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[Mt]||r&&"none"===n[Mt]&&o<s+t)?"vertical":"horizontal"},Pt=function(t){function l(r,a){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==r&&(a||i))return  true;if(null==r||false===r)return  false;if(a&&"clone"===r)return r;if("function"==typeof r)return l(r(t,e,n,o),a)(t,e,n,o);e=(a?t:e).options.group.name;return  true===r||"string"==typeof r&&r===e||r.join&&-1<r.indexOf(e)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=l(n.pull,true),e.checkPut=l(n.put),e.revertClone=n.revertClone,t.group=e;},kt=function(){!Nt&&Z&&P(Z,"display","none");},Rt=function(){!Nt&&Z&&P(Z,"display","");};xt&&document.addEventListener("click",function(t){if(wt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),wt=false},true);function Xt(t){if(q){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,Et.some(function(t){var e=t[j].options.emptyInsertThreshold;if(e&&!Y(t)){var n=k(t),o=i>=n.left-e&&i<=n.right+e,e=r>=n.top-e&&r<=n.bottom+e;return o&&e?a=t:void 0}}),a);if(e){var n,o={};for(n in t)t.hasOwnProperty(n)&&(o[n]=t[n]);o.target=o.rootEl=e,o.preventDefault=void 0,o.stopPropagation=void 0,e[j]._onDragOver(o);}}var i,r,a;}function Yt(t){q&&q.parentNode[j]._isOutsideThisEl(t.target);}function Bt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[j]=this;var n,o,i={group:null,sort:true,disabled:false,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:false,invertedSwapThreshold:null,removeCloneOnHide:true,direction:function(){return It(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:true,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent);},dropBubble:false,dragoverBubble:false,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:false,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:false,fallbackClass:"sortable-fallback",fallbackOnBody:false,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:false!==Bt.supportPointer&&"PointerEvent"in window&&!u,emptyInsertThreshold:5};for(n in K.initializePlugins(this,t,i),i)n in e||(e[n]=i[n]);for(o in Pt(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&At,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?h(t,"pointerdown",this._onTapStart):(h(t,"mousedown",this._onTapStart),h(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(h(t,"dragover",this),h(t,"dragenter",this)),Et.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,x());}function Ft(t,e,n,o,i,r,a,l){var s,c,u=t[j],d=u.options.onMove;return !window.CustomEvent||y||w?(s=document.createEvent("Event")).initEvent("move",true,true):s=new CustomEvent("move",{bubbles:true,cancelable:true}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||k(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),c=d?d.call(u,s,a):c}function jt(t){t.draggable=false;}function Ht(){Ct=false;}function Lt(t){return setTimeout(t,0)}function Kt(t){return clearTimeout(t)}Bt.prototype={constructor:Bt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(gt=null);},_getDirection:function(t,e){return "function"==typeof this.options.direction?this.options.direction.call(this,t,e,q):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(!function(t){Tt.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&Tt.push(o);}}(o),!q&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!u||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=N(l,t.draggable,o,false))&&l.animated||J===l)){if(nt=B(l),it=B(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return U({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),z("filter",n,{evt:e}),void(i&&e.cancelable&&e.preventDefault())}else if(c=c&&c.split(",").some(function(t){if(t=N(s,t.trim(),o,false))return U({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),z("filter",n,{evt:e}),true}))return void(i&&e.cancelable&&e.preventDefault());t.handle&&!N(s,t.handle,o,false)||this._prepareDragStart(e,a,l);}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;n&&!q&&n.parentNode===r&&(o=k(n),$=r,V=(q=n).parentNode,Q=q.nextSibling,J=n,at=a.group,st={target:Bt.dragged=q,clientX:(e||t).clientX,clientY:(e||t).clientY},ht=st.clientX-o.left,ft=st.clientY-o.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,q.style["will-change"]="all",o=function(){z("delayEnded",i,{evt:t}),Bt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!s&&i.nativeDraggable&&(q.draggable=true),i._triggerDragStart(t,e),U({sortable:i,name:"choose",originalEvent:t}),I(q,a.chosenClass,true));},a.ignore.split(",").forEach(function(t){b(q,t.trim(),jt);}),h(l,"dragover",Xt),h(l,"mousemove",Xt),h(l,"touchmove",Xt),h(l,"mouseup",i._onDrop),h(l,"touchend",i._onDrop),h(l,"touchcancel",i._onDrop),s&&this.nativeDraggable&&(this.options.touchStartThreshold=4,q.draggable=true),z("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(w||y)?o():Bt.eventCanceled?this._onDrop():(h(l,"mouseup",i._disableDelayedDrag),h(l,"touchend",i._disableDelayedDrag),h(l,"touchcancel",i._disableDelayedDrag),h(l,"mousemove",i._delayedDragTouchMoveHandler),h(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&h(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)));},_delayedDragTouchMoveHandler:function(t){t=t.touches?t.touches[0]:t;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag();},_disableDelayedDrag:function(){q&&jt(q),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents();},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._disableDelayedDrag),f(t,"touchend",this._disableDelayedDrag),f(t,"touchcancel",this._disableDelayedDrag),f(t,"mousemove",this._delayedDragTouchMoveHandler),f(t,"touchmove",this._delayedDragTouchMoveHandler),f(t,"pointermove",this._delayedDragTouchMoveHandler);},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?h(document,"pointermove",this._onTouchMove):h(document,e?"touchmove":"mousemove",this._onTouchMove):(h(q,"dragend",this),h($,"dragstart",this._onDragStart));try{document.selection?Lt(function(){document.selection.empty();}):window.getSelection().removeAllRanges();}catch(t){}},_dragStarted:function(t,e){var n;yt=false,$&&q?(z("dragStarted",this,{evt:e}),this.nativeDraggable&&h(document,"dragover",Yt),n=this.options,t||I(q,n.dragClass,false),I(q,n.ghostClass,true),Bt.active=this,t&&this._appendGhost(),U({sortable:this,name:"start",originalEvent:e})):this._nulling();},_emulateDragOver:function(){if(ct){this._lastX=ct.clientX,this._lastY=ct.clientY,kt();for(var t=document.elementFromPoint(ct.clientX,ct.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ct.clientX,ct.clientY))!==e;)e=t;if(q.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j])if(e[j]._onDragOver({clientX:ct.clientX,clientY:ct.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}while(e=(t=e).parentNode);Rt();}},_onTouchMove:function(t){if(st){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=Z&&v(Z,true),a=Z&&r&&r.a,l=Z&&r&&r.d,e=Ot&&bt&&E(bt),a=(i.clientX-st.clientX+o.x)/(a||1)+(e?e[0]-_t[0]:0)/(a||1),l=(i.clientY-st.clientY+o.y)/(l||1)+(e?e[1]-_t[1]:0)/(l||1);if(!Bt.active&&!yt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,true);}Z&&(r?(r.e+=a-(ut||0),r.f+=l-(dt||0)):r={a:1,b:0,c:0,d:1,e:a,f:l},r="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")"),P(Z,"webkitTransform",r),P(Z,"mozTransform",r),P(Z,"msTransform",r),P(Z,"transform",r),ut=a,dt=l,ct=i),t.cancelable&&t.preventDefault();}},_appendGhost:function(){if(!Z){var t=this.options.fallbackOnBody?document.body:$,e=k(q,true,Ot,true,t),n=this.options;if(Ot){for(bt=t;"static"===P(bt,"position")&&"none"===P(bt,"transform")&&bt!==document;)bt=bt.parentNode;bt!==document.body&&bt!==document.documentElement?(bt===document&&(bt=O()),e.top+=bt.scrollTop,e.left+=bt.scrollLeft):bt=O(),_t=E(bt);}I(Z=q.cloneNode(true),n.ghostClass,false),I(Z,n.fallbackClass,true),I(Z,n.dragClass,true),P(Z,"transition",""),P(Z,"transform",""),P(Z,"box-sizing","border-box"),P(Z,"margin",0),P(Z,"top",e.top),P(Z,"left",e.left),P(Z,"width",e.width),P(Z,"height",e.height),P(Z,"opacity","0.8"),P(Z,"position",Ot?"absolute":"fixed"),P(Z,"zIndex","100000"),P(Z,"pointerEvents","none"),Bt.ghost=Z,t.appendChild(Z),P(Z,"transform-origin",ht/parseInt(Z.style.width)*100+"% "+ft/parseInt(Z.style.height)*100+"%");}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;z("dragStart",this,{evt:t}),Bt.eventCanceled?this._onDrop():(z("setupClone",this),Bt.eventCanceled||((tt=_(q)).draggable=false,tt.style["will-change"]="",this._hideClone(),I(tt,this.options.chosenClass,false),Bt.clone=tt),n.cloneId=Lt(function(){z("clone",n),Bt.eventCanceled||(n.options.removeCloneOnHide||$.insertBefore(tt,q),n._hideClone(),U({sortable:n,name:"clone"}));}),e||I(q,i.dragClass,true),e?(wt=true,n._loopId=setInterval(n._emulateDragOver,50)):(f(document,"mouseup",n._onDrop),f(document,"touchend",n._onDrop),f(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,q)),h(document,"drop",n),P(q,"transform","translateZ(0)")),yt=true,n._dragStartId=Lt(n._dragStarted.bind(n,e,t)),h(document,"selectstart",n),pt=true,u&&P(document.body,"user-select","none"));},_onDragOver:function(n){var o,i,r,t,a=this.el,l=n.target,e=this.options,s=e.group,c=Bt.active,u=at===s,d=e.sort,h=lt||c,f=this,p=false;if(!Ct){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),l=N(l,e.draggable,a,true),T("dragOver"),Bt.eventCanceled)return p;if(q.contains(n.target)||l.animated&&l.animatingX&&l.animatingY||f._ignoreWhileAnimating===l)return O(false);if(wt=false,c&&!e.disabled&&(u?d||(i=V!==$):lt===this||(this.lastPutMode=at.checkPull(this,c,q,n))&&s.checkPut(this,c,q,n))){if(r="vertical"===this._getDirection(n,l),o=k(q),T("dragOverValid"),Bt.eventCanceled)return p;if(i)return V=$,x(),this._hideClone(),T("revert"),Bt.eventCanceled||(Q?$.insertBefore(q,Q):$.appendChild(q)),O(true);var g=Y(a,e.draggable);if(!g||function(t,e,n){n=k(Y(n.el,n.options.draggable));return e?t.clientX>n.right+10||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+10}(n,r,this)&&!g.animated){if(g===q)return O(false);if((l=g&&a===n.target?g:l)&&(w=k(l)),false!==Ft($,a,q,o,l,w,n,!!l))return x(),a.appendChild(q),V=a,M(),O(true)}else if(g&&function(t,e,n){n=k(X(n.el,0,n.options,true));return e?t.clientX<n.left-10||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-10||t.clientY<n.bottom&&t.clientX<n.left}(n,r,this)){var m=X(a,0,e,true);if(m===q)return O(false);if(w=k(l=m),false!==Ft($,a,q,o,l,w,n,false))return x(),a.insertBefore(q,m),V=a,M(),O(true)}else if(l.parentNode===a){var v,b,y,w=k(l),E=q.parentNode!==a,D=(D=q.animated&&q.toRect||o,C=l.animated&&l.toRect||w,S=(t=r)?D.left:D.top,s=t?D.right:D.bottom,g=t?D.width:D.height,m=t?C.left:C.top,D=t?C.right:C.bottom,C=t?C.width:C.height,!(S===m||s===D||S+g/2===m+C/2)),S=r?"top":"left",g=R(l,"top","top")||R(q,"top","top"),m=g?g.scrollTop:void 0;if(gt!==l&&(b=w[S],Dt=false,St=!D&&e.invertSwap||E),0!==(v=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,t=o?n.top:n.left,o=o?n.bottom:n.right,n=false;if(!a)if(l&&vt<c*i){if(Dt=!Dt&&(1===mt?t+c*r/2<s:s<o-c*r/2)?true:Dt)n=true;else if(1===mt?s<t+vt:o-vt<s)return -mt}else if(t+c*(1-i)/2<s&&s<o-c*(1-i)/2)return function(t){return B(q)<B(t)?1:-1}(e);if((n=n||a)&&(s<t+c*r/2||o-c*r/2<s))return t+c/2<s?1:-1;return 0}(n,l,w,r,D?1:e.swapThreshold,null==e.invertedSwapThreshold?e.swapThreshold:e.invertedSwapThreshold,St,gt===l)))for(var _=B(q);(y=V.children[_-=v])&&("none"===P(y,"display")||y===Z););if(0===v||y===l)return O(false);mt=v;var C=(gt=l).nextElementSibling,E=false,D=Ft($,a,q,o,l,w,n,E=1===v);if(false!==D)return 1!==D&&-1!==D||(E=1===D),Ct=true,setTimeout(Ht,30),x(),E&&!C?a.appendChild(q):l.parentNode.insertBefore(q,E?C:l),g&&F(g,0,m-g.scrollTop),V=q.parentNode,void 0===b||St||(vt=Math.abs(b-k(l)[S])),M(),O(true)}if(a.contains(q))return O(false)}return  false}function T(t,e){z(t,f,A({evt:n,isOwner:u,axis:r?"vertical":"horizontal",revert:i,dragRect:o,targetRect:w,canSort:d,fromSortable:h,target:l,completed:O,onMove:function(t,e){return Ft($,a,q,o,t,k(t),n,e)},changed:M},e));}function x(){T("dragOverAnimationCapture"),f.captureAnimationState(),f!==h&&h.captureAnimationState();}function O(t){return T("dragOverCompleted",{insertion:t}),t&&(u?c._hideClone():c._showClone(f),f!==h&&(I(q,(lt||c).options.ghostClass,false),I(q,e.ghostClass,true)),lt!==f&&f!==Bt.active?lt=f:f===Bt.active&&lt&&(lt=null),h===f&&(f._ignoreWhileAnimating=l),f.animateAll(function(){T("dragOverAnimationComplete"),f._ignoreWhileAnimating=null;}),f!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(l===q&&!q.animated||l===a&&!l.animated)&&(gt=null),e.dragoverBubble||n.rootEl||l===document||(q.parentNode[j]._isOutsideThisEl(n.target),t||Xt(n)),!e.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),p=true}function M(){ot=B(q),rt=B(q,e.draggable),U({sortable:f,name:"change",toEl:a,newIndex:ot,newDraggableIndex:rt,originalEvent:n});}},_ignoreWhileAnimating:null,_offMoveEvents:function(){f(document,"mousemove",this._onTouchMove),f(document,"touchmove",this._onTouchMove),f(document,"pointermove",this._onTouchMove),f(document,"dragover",Xt),f(document,"mousemove",Xt),f(document,"touchmove",Xt);},_offUpEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._onDrop),f(t,"touchend",this._onDrop),f(t,"pointerup",this._onDrop),f(t,"touchcancel",this._onDrop),f(document,"selectstart",this);},_onDrop:function(t){var e=this.el,n=this.options;ot=B(q),rt=B(q,n.draggable),z("drop",this,{evt:t}),V=q&&q.parentNode,ot=B(q),rt=B(q,n.draggable),Bt.eventCanceled||(Dt=St=yt=false,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Kt(this.cloneId),Kt(this._dragStartId),this.nativeDraggable&&(f(document,"drop",this),f(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),u&&P(document.body,"user-select",""),P(q,"transform",""),t&&(pt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),($===V||lt&&"clone"!==lt.lastPutMode)&&tt&&tt.parentNode&&tt.parentNode.removeChild(tt),q&&(this.nativeDraggable&&f(q,"dragend",this),jt(q),q.style["will-change"]="",pt&&!yt&&I(q,(lt||this).options.ghostClass,false),I(q,this.options.chosenClass,false),U({sortable:this,name:"unchoose",toEl:V,newIndex:null,newDraggableIndex:null,originalEvent:t}),$!==V?(0<=ot&&(U({rootEl:V,name:"add",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"remove",toEl:V,originalEvent:t}),U({rootEl:V,name:"sort",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),lt&&lt.save()):ot!==nt&&0<=ot&&(U({sortable:this,name:"update",toEl:V,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),Bt.active&&(null!=ot&&-1!==ot||(ot=nt,rt=it),U({sortable:this,name:"end",toEl:V,originalEvent:t}),this.save())))),this._nulling();},_nulling:function(){z("nulling",this),$=q=V=Z=Q=tt=J=et=st=ct=pt=ot=rt=nt=it=gt=mt=lt=at=Bt.dragged=Bt.ghost=Bt.clone=Bt.active=null,Tt.forEach(function(t){t.checked=true;}),Tt.length=ut=dt=0;},handleEvent:function(t){switch(t.type){case "drop":case "dragend":this._onDrop(t);break;case "dragenter":case "dragover":q&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault();}(t));break;case "selectstart":t.preventDefault();}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)N(t=n[o],r.draggable,this.el,false)&&e.push(t.getAttribute(r.dataIdAttr)||function(t){var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;for(;n--;)o+=e.charCodeAt(n);return o.toString(36)}(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach(function(t,e){e=o.children[e];N(e,this.options.draggable,o,false)&&(n[t]=e);},this),e&&this.captureAnimationState(),t.forEach(function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]));}),e&&this.animateAll();},save:function(){var t=this.options.store;t&&t.set&&t.set(this);},closest:function(t,e){return N(t,e||this.options.draggable,this.el,false)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=K.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Pt(n);},destroy:function(){z("destroy",this);var t=this.el;t[j]=null,f(t,"mousedown",this._onTapStart),f(t,"touchstart",this._onTapStart),f(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(f(t,"dragover",this),f(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable");}),this._onDrop(),this._disableDelayedDragEvents(),Et.splice(Et.indexOf(this.el),1),this.el=t=null;},_hideClone:function(){et||(z("hideClone",this),Bt.eventCanceled||(P(tt,"display","none"),this.options.removeCloneOnHide&&tt.parentNode&&tt.parentNode.removeChild(tt),et=true));},_showClone:function(t){"clone"===t.lastPutMode?et&&(z("showClone",this),Bt.eventCanceled||(q.parentNode!=$||this.options.group.revertClone?Q?$.insertBefore(tt,Q):$.appendChild(tt):$.insertBefore(tt,q),this.options.group.revertClone&&this.animate(q,tt),P(tt,"display",""),et=false)):this._hideClone();}},xt&&h(document,"touchmove",function(t){(Bt.active||yt)&&t.cancelable&&t.preventDefault();}),Bt.utils={on:h,off:f,css:P,find:b,is:function(t,e){return !!N(t,e,t,false)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:S,closest:N,toggleClass:I,clone:_,index:B,nextTick:Lt,cancelNextTick:Kt,detectDirection:It,getChild:X},Bt.get=function(t){return t[j]},Bt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];(e=e[0].constructor===Array?e[0]:e).forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Bt.utils=A(A({},Bt.utils),t.utils)),K.mount(t);});},Bt.create=function(t,e){return new Bt(t,e)};var Wt,zt,Gt,Ut,qt,Vt,Zt=[],$t=!(Bt.version="1.14.0");function Qt(){Zt.forEach(function(t){clearInterval(t.pid);}),Zt=[];}function Jt(){clearInterval(Vt);}var te,ee=S(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=O(),u=false;zt!==e&&(zt=e,Qt(),Wt=t.scroll,i=t.scrollFn,true===Wt&&(Wt=M(e,true)));var d=0,h=Wt;do{var f=h,p=k(f),g=p.top,m=p.bottom,v=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,S=f.scrollWidth,_=f.scrollHeight,C=P(f),T=f.scrollLeft,p=f.scrollTop,D=f===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY)),T=E&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(v-r)<=l&&!!T),p=D&&(Math.abs(m-a)<=l&&p+w<_)-(Math.abs(g-a)<=l&&!!p);if(!Zt[d])for(var x=0;x<=d;x++)Zt[x]||(Zt[x]={});Zt[d].vx==T&&Zt[d].vy==p&&Zt[d].el===f||(Zt[d].el=f,Zt[d].vx=T,Zt[d].vy=p,clearInterval(Zt[d].pid),0==T&&0==p||(u=true,Zt[d].pid=setInterval(function(){o&&0===this.layer&&Bt.active._onTouchMove(qt);var t=Zt[this.layer].vy?Zt[this.layer].vy*s:0,e=Zt[this.layer].vx?Zt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Bt.dragged.parentNode[j],e,t,n,qt,Zt[this.layer].el)||F(Zt[this.layer].el,e,t);}.bind({layer:d}),24))),d++;}while(t.bubbleScroll&&h!==c&&(h=M(h,false)));$t=u;}},30),n=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,t=t.unhideGhostForTarget;e&&(i=n||i,a(),e=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,e=document.elementFromPoint(e.clientX,e.clientY),t(),i&&!i.el.contains(e)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n})));};function ne(){}function oe(){}ne.prototype={startIndex:null,dragStart:function(t){t=t.oldDraggableIndex;this.startIndex=t;},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();t=X(this.sortable.el,this.startIndex,this.options);t?this.sortable.el.insertBefore(e,t):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll();},drop:n},a(ne,{pluginName:"revertOnSpill"}),oe.prototype={onSpill:function(t){var e=t.dragEl,t=t.putSortable||this.sortable;t.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),t.animateAll();},drop:n},a(oe,{pluginName:"removeOnSpill"});var ie,re,ae,le,se,ce=[],ue=[],de=false,he=false,fe=false;function pe(n,o){ue.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t);});}function ge(){ce.forEach(function(t){t!==ae&&t.parentNode&&t.parentNode.removeChild(t);});}return Bt.mount(new function(){function t(){for(var t in this.defaults={scroll:true,forceAutoScrollFallback:false,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:true},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));}return t.prototype={dragStarted:function(t){t=t.originalEvent;this.sortable.nativeDraggable?h(document,"dragover",this._handleAutoScroll):this.options.supportPointer?h(document,"pointermove",this._handleFallbackAutoScroll):t.touches?h(document,"touchmove",this._handleFallbackAutoScroll):h(document,"mousemove",this._handleFallbackAutoScroll);},dragOverCompleted:function(t){t=t.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t);},drop:function(){this.sortable.nativeDraggable?f(document,"dragover",this._handleAutoScroll):(f(document,"pointermove",this._handleFallbackAutoScroll),f(document,"touchmove",this._handleFallbackAutoScroll),f(document,"mousemove",this._handleFallbackAutoScroll)),Jt(),Qt(),clearTimeout(g),g=void 0;},nulling:function(){qt=zt=Wt=$t=Vt=Gt=Ut=null,Zt.length=0;},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,true);},_handleAutoScroll:function(e,n){var o,i=this,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(r,a);qt=e,n||this.options.forceAutoScrollFallback||w||y||u?(ee(e,this.options,t,n),o=M(t,true),!$t||Vt&&r===Gt&&a===Ut||(Vt&&Jt(),Vt=setInterval(function(){var t=M(document.elementFromPoint(r,a),true);t!==o&&(o=t,Qt()),ee(e,i.options,t,n);},10),Gt=r,Ut=a)):this.options.bubbleScroll&&M(t,true)!==O()?ee(e,this.options,M(t,false),false):Qt();}},a(t,{pluginName:"scroll",initializeByDefault:true})}),Bt.mount(oe,ne),Bt.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"};}return t.prototype={dragStart:function(t){t=t.dragEl;te=t;},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;i.options.swap&&(t=this.sortable.el,i=this.options,n&&n!==t&&(t=te,te=false!==o(n)?(I(n,i.swapClass,true),n):null,t&&t!==te&&I(t,i.swapClass,false)),r(),e(true),a());},drop:function(t){var e,n,o=t.activeSortable,i=t.putSortable,r=t.dragEl,a=i||this.sortable,l=this.options;te&&I(te,l.swapClass,false),te&&(l.swap||i&&i.options.swap)&&r!==te&&(a.captureAnimationState(),a!==o&&o.captureAnimationState(),n=te,t=(e=r).parentNode,l=n.parentNode,t&&l&&!t.isEqualNode(n)&&!l.isEqualNode(e)&&(i=B(e),r=B(n),t.isEqualNode(l)&&i<r&&r++,t.insertBefore(n,t.children[i]),l.insertBefore(e,l.children[r])),a.animateAll(),a!==o&&o.animateAll());},nulling:function(){te=null;}},a(t,{pluginName:"swap",eventProperties:function(){return {swapItem:te}}})}),Bt.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.supportPointer?h(document,"pointerup",this._deselectMultiDrag):(h(document,"mouseup",this._deselectMultiDrag),h(document,"touchend",this._deselectMultiDrag)),h(document,"keydown",this._checkKeyDown),h(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(t,e){var n="";ce.length&&re===o?ce.forEach(function(t,e){n+=(e?", ":"")+t.textContent;}):n=e.textContent,t.setData("Text",n);}};}return t.prototype={multiDragKeyDown:false,isMultiDrag:false,delayStartGlobal:function(t){t=t.dragEl;ae=t;},delayEnded:function(){this.isMultiDrag=~ce.indexOf(ae);},setupClone:function(t){var e=t.sortable,t=t.cancel;if(this.isMultiDrag){for(var n=0;n<ce.length;n++)ue.push(_(ce[n])),ue[n].sortableIndex=ce[n].sortableIndex,ue[n].draggable=false,ue[n].style["will-change"]="",I(ue[n],this.options.selectedClass,false),ce[n]===ae&&I(ue[n],this.options.chosenClass,false);e._hideClone(),t();}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,t=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||ce.length&&re===e&&(pe(true,n),o("clone"),t()));},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,t=t.cancel;this.isMultiDrag&&(pe(false,n),ue.forEach(function(t){P(t,"display","");}),e(),se=false,t());},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),t=t.cancel;this.isMultiDrag&&(ue.forEach(function(t){P(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t);}),n(),se=true,t());},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&re&&re.multiDrag._deselectMultiDrag(),ce.forEach(function(t){t.sortableIndex=B(t);}),ce=ce.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),fe=true;},dragStarted:function(t){var e,n=this,t=t.sortable;this.isMultiDrag&&(this.options.sort&&(t.captureAnimationState(),this.options.animation&&(ce.forEach(function(t){t!==ae&&P(t,"position","absolute");}),e=k(ae,false,true,true),ce.forEach(function(t){t!==ae&&C(t,e);}),de=he=true)),t.animateAll(function(){de=he=false,n.options.animation&&ce.forEach(function(t){T(t);}),n.options.sort&&ge();}));},dragOver:function(t){var e=t.target,n=t.completed,t=t.cancel;he&&~ce.indexOf(e)&&(n(false),t());},revert:function(t){var n,o,e=t.fromSortable,i=t.rootEl,r=t.sortable,a=t.dragRect;1<ce.length&&(ce.forEach(function(t){r.addAnimationState({target:t,rect:he?k(t):a}),T(t),t.fromRect=a,e.removeAnimationState(t);}),he=false,n=!this.options.removeCloneOnHide,o=i,ce.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t);}));},dragOverCompleted:function(t){var e,n=t.sortable,o=t.isOwner,i=t.insertion,r=t.activeSortable,a=t.parentEl,l=t.putSortable,t=this.options;i&&(o&&r._hideClone(),de=false,t.animation&&1<ce.length&&(he||!o&&!r.options.sort&&!l)&&(e=k(ae,false,true,true),ce.forEach(function(t){t!==ae&&(C(t,e),a.appendChild(t));}),he=true),o||(he||ge(),1<ce.length?(o=se,r._showClone(n),r.options.animation&&!se&&o&&ue.forEach(function(t){r.addAnimationState({target:t,rect:le}),t.fromRect=le,t.thisAnimationDuration=null;})):r._showClone(n)));},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,t=t.activeSortable;ce.forEach(function(t){t.thisAnimationDuration=null;}),t.options.animation&&!n&&t.multiDrag.isMultiDrag&&(le=a({},e),e=v(ae,true),le.top-=e.f,le.left-=e.e);},dragOverAnimationComplete:function(){he&&(he=false,ge());},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c,u,d,h=this.options,f=o.children;if(!fe)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),I(ae,h.selectedClass,!~ce.indexOf(ae)),~ce.indexOf(ae))ce.splice(ce.indexOf(ae),1),ie=null,W({sortable:i,rootEl:n,name:"deselect",targetEl:ae});else {if(ce.push(ae),W({sortable:i,rootEl:n,name:"select",targetEl:ae}),e.shiftKey&&ie&&i.el.contains(ie)){var p=B(ie),t=B(ae);if(~p&&~t&&p!==t)for(var g,m=p<t?(g=p,t):(g=t,p+1);g<m;g++)~ce.indexOf(f[g])||(I(f[g],h.selectedClass,true),ce.push(f[g]),W({sortable:i,rootEl:n,name:"select",targetEl:f[g]}));}else ie=ae;re=s;}fe&&this.isMultiDrag&&(he=false,(o[j].options.sort||o!==n)&&1<ce.length&&(c=k(ae),u=B(ae,":not(."+this.options.selectedClass+")"),!de&&h.animation&&(ae.thisAnimationDuration=null),s.captureAnimationState(),de||(h.animation&&(ae.fromRect=c,ce.forEach(function(t){var e;t.thisAnimationDuration=null,t!==ae&&(e=he?k(t):c,t.fromRect=e,s.addAnimationState({target:t,rect:e}));})),ge(),ce.forEach(function(t){f[u]?o.insertBefore(t,f[u]):o.appendChild(t),u++;}),a===B(ae)&&(d=false,ce.forEach(function(t){t.sortableIndex!==B(t)&&(d=true);}),d&&r("update"))),ce.forEach(function(t){T(t);}),s.animateAll()),re=s),(n===o||l&&"clone"!==l.lastPutMode)&&ue.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t);});}},nullingGlobal:function(){this.isMultiDrag=fe=false,ue.length=0;},destroyGlobal:function(){this._deselectMultiDrag(),f(document,"pointerup",this._deselectMultiDrag),f(document,"mouseup",this._deselectMultiDrag),f(document,"touchend",this._deselectMultiDrag),f(document,"keydown",this._checkKeyDown),f(document,"keyup",this._checkKeyUp);},_deselectMultiDrag:function(t){if(!(void 0!==fe&&fe||re!==this.sortable||t&&N(t.target,this.options.draggable,this.sortable.el,false)||t&&0!==t.button))for(;ce.length;){var e=ce[0];I(e,this.options.selectedClass,false),ce.shift(),W({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e});}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=true);},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=false);}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[j];e&&e.options.multiDrag&&!~ce.indexOf(t)&&(re&&re!==e&&(re.multiDrag._deselectMultiDrag(),re=e),I(t,e.options.selectedClass,true),ce.push(t));},deselect:function(t){var e=t.parentNode[j],n=ce.indexOf(t);e&&e.options.multiDrag&&~n&&(I(t,e.options.selectedClass,false),ce.splice(n,1));}},eventProperties:function(){var n=this,o=[],i=[];return ce.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=he&&t!==ae?-1:he?B(t,":not(."+n.options.selectedClass+")"):B(t),i.push({multiDragElement:t,index:e});}),{items:r(ce),clones:[].concat(ue),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return "ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Bt}); 
	} (Sortable_min$1));
	return Sortable_min$1.exports;
}

var vuedraggable_umd_min = vuedraggable_umd_min$1.exports;

(function (module, exports) {
	(function(t,e){module.exports=e(require$$0,/*@__PURE__*/ requireSortable_min());})("undefined"!==typeof self?self:vuedraggable_umd_min,(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:false,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=true,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:true,get:r});},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:true});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:true,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"00ee":function(t,e,n){var r=n("b622"),o=r("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i);},"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}};},"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,c=[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(r(t))};},"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),c=n("fc6a"),a=n("c04e"),u=n("5135"),f=n("0cfb"),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=a(e,true),f)try{return s(t,e)}catch(n){}if(u(t,e))return i(!o.f.call(t,e),t[e])};},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}));},"13d5":function(t,e,n){var r=n("23e7"),o=n("d58f").left,i=n("a640"),c=n("ae40"),a=i("reduce"),u=c("reduce",{1:0});r({target:"Array",proto:true,forced:!a||!u},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});},"14c3":function(t,e,n){var r=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)};},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),c=n("9112");for(var a in o){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i);}catch(s){f.forEach=i;}}},"17c2":function(t,e,n){var r=n("b727").forEach,o=n("a640"),i=n("ae40"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)};},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement");},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t};},"1c7e":function(t,e,n){var r=n("b622"),o=r("iterator"),i=false;try{var c=0,a={next:function(){return {done:!!c++}},return:function(){i=!0;}};a[o]=function(){return this},Array.from(a,(function(){throw 2}));}catch(u){}t.exports=function(t,e){if(!e&&!i)return  false;var n=false;try{var r={};r[o]=function(){return {next:function(){return {done:n=!0}}}},t(r);}catch(u){}return n};},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t};},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return {foo:1}},1!==e[t](Boolean).foo}))};},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)};},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),c=n("6eeb"),a=n("ce4e"),u=n("e893"),f=n("94ca");t.exports=function(t,e){var n,s,l,d,p,v,h=t.target,b=t.global,g=t.stat;if(s=b?r:g?r[h]||a(h,{}):(r[h]||{}).prototype,s)for(l in e){if(p=e[l],t.noTargetGet?(v=o(s,l),d=v&&v.value):d=s[l],n=f(b?l:h+(g?".":"#")+l,t.forced),!n&&void 0!==d){if(typeof p===typeof d)continue;u(p,d);}(t.sham||d&&d.sham)&&i(p,"sham",true),c(s,l,p,t);}};},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)};},"25f0":function(t,e,n){var r=n("6eeb"),o=n("825a"),i=n("d039"),c=n("ad6d"),a="toString",u=RegExp.prototype,f=u[a],s=i((function(){return "/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=a;(s||l)&&r(RegExp.prototype,a,(function(){var t=o(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?c.call(t):n);return "/"+e+"/"+r}),{unsafe:true});},"2ca0":function(t,e,n){var r=n("23e7"),o=n("06cf").f,i=n("50c4"),c=n("5a34"),a=n("1d80"),u=n("ab13"),f=n("c430"),s="".startsWith,l=Math.min,d=u("startsWith"),p=!f&&!d&&!!function(){var t=o(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:true,forced:!p&&!d},{startsWith:function(t){var e=String(a(this));c(t);var n=i(l(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return s?s.call(e,r,n):e.slice(n,n+r.length)===r}});},"2d00":function(t,e,n){var r,o,i=n("da84"),c=n("342f"),a=i.process,u=a&&a.versions,f=u&&u.v8;f?(r=f.split("."),o=r[0]+r[1]):c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(o=r[1]))),t.exports=o&&+o;},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||"";},"35a1":function(t,e,n){var r=n("f5df"),o=n("3f8c"),i=n("b622"),c=i("iterator");t.exports=function(t){if(void 0!=t)return t[c]||t["@@iterator"]||o[r(t)]};},"37e8":function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("825a"),c=n("df75");t.exports=r?Object.defineProperties:function(t,e){i(t);var n,r=c(e),a=r.length,u=0;while(a>u)o.f(t,n=r[u++],e[n]);return t};},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t};},"3ca3":function(t,e,n){var r=n("6547").charAt,o=n("69f3"),i=n("7dd0"),c="String Iterator",a=o.set,u=o.getterFor(c);i(String,"String",(function(t){a(this,{type:c,string:String(t),index:0});}),(function(){var t,e=u(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:true}:(t=r(n,o),e.index+=t.length,{value:t,done:false})}));},"3f8c":function(t,e){t.exports={};},4160:function(t,e,n){var r=n("23e7"),o=n("17c2");r({target:"Array",proto:true,forced:[].forEach!=o},{forEach:o});},"428f":function(t,e,n){var r=n("da84");t.exports=r;},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),i="".split;t.exports=r((function(){return !Object("z").propertyIsEnumerable(0)}))?function(t){return "String"==o(t)?i.call(t,""):Object(t)}:Object;},"44d2":function(t,e,n){var r=n("b622"),o=n("7c73"),i=n("9bf2"),c=r("unscopables"),a=Array.prototype;void 0==a[c]&&i.f(a,c,{configurable:true,value:o(null)}),t.exports=function(t){a[c][t]=true;};},"44e7":function(t,e,n){var r=n("861d"),o=n("c6b6"),i=n("b622"),c=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==o(t))};},4930:function(t,e,n){var r=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return !String(Symbol())}));},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),c=function(t){return function(e,n,c){var a,u=r(e),f=o(u.length),s=i(c,f);if(t&&n!=n){while(f>s)if(a=u[s++],a!=a)return  true}else for(;f>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return !t&&-1}};t.exports={includes:c(true),indexOf:c(false)};},"4de4":function(t,e,n){var r=n("23e7"),o=n("b727").filter,i=n("1dde"),c=n("ae40"),a=i("filter"),u=c("filter");r({target:"Array",proto:true,forced:!a||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}});},"4df4":function(t,e,n){var r=n("0366"),o=n("7b0b"),i=n("9bdd"),c=n("e95a"),a=n("50c4"),u=n("8418"),f=n("35a1");t.exports=function(t){var e,n,s,l,d,p,v=o(t),h="function"==typeof this?this:Array,b=arguments.length,g=b>1?arguments[1]:void 0,y=void 0!==g,m=f(v),x=0;if(y&&(g=r(g,b>2?arguments[2]:void 0,2)),void 0==m||h==Array&&c(m))for(e=a(v.length),n=new h(e);e>x;x++)p=y?g(v[x],x):v[x],u(n,x,p);else for(l=m.call(v),d=l.next,n=new h;!(s=d.call(l)).done;x++)p=y?i(l,g,[s.value,x],true):s.value,u(n,x,p);return n.length=x,n};},"4fad":function(t,e,n){var r=n("23e7"),o=n("6f53").entries;r({target:"Object",stat:true},{entries:function(t){return o(t)}});},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0};},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)};},5319:function(t,e,n){var r=n("d784"),o=n("825a"),i=n("7b0b"),c=n("50c4"),a=n("a691"),u=n("1d80"),f=n("8aa5"),s=n("14c3"),l=Math.max,d=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,b=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,m=g?"$":"$0";return [function(n,r){var o=u(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!g&&y||"string"===typeof r&&-1===r.indexOf(m)){var i=n(e,t,this,r);if(i.done)return i.value}var u=o(t),p=String(this),v="function"===typeof r;v||(r=String(r));var h=u.global;if(h){var S=u.unicode;u.lastIndex=0;}var O=[];while(1){var w=s(u,p);if(null===w)break;if(O.push(w),!h)break;var E=String(w[0]);""===E&&(u.lastIndex=f(p,c(u.lastIndex),S));}for(var j="",A=0,P=0;P<O.length;P++){w=O[P];for(var I=String(w[0]),T=l(d(a(w.index),p.length),0),_=[],C=1;C<w.length;C++)_.push(b(w[C]));var L=w.groups;if(v){var R=[I].concat(_,T,p);void 0!==L&&R.push(L);var k=String(r.apply(void 0,R));}else k=x(I,p,T,_,L,r);T>=A&&(j+=p.slice(A,T)+k,A=T+I.length);}return j+p.slice(A)}];function x(t,n,r,o,c,a){var u=r+t.length,f=o.length,s=h;return void 0!==c&&(c=i(c),s=v),e.call(a,s,(function(e,i){var a;switch(i.charAt(0)){case "$":return "$";case "&":return t;case "`":return n.slice(0,r);case "'":return n.slice(u);case "<":a=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return e;if(s>f){var l=p(s/10);return 0===l?e:l<=f?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):e}a=o[s-1];}return void 0===a?"":a}))}}));},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),i=n("7418"),c=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e};},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t};},"5c6c":function(t,e){t.exports=function(t,e){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};},"5db7":function(t,e,n){var r=n("23e7"),o=n("a2bf"),i=n("7b0b"),c=n("50c4"),a=n("1c0b"),u=n("65f0");r({target:"Array",proto:true},{flatMap:function(t){var e,n=i(this),r=c(n.length);return a(t),e=u(n,0),e.length=o(e,n,n,r,0,1,t,arguments.length>1?arguments[1]:void 0),e}});},6547:function(t,e,n){var r=n("a691"),o=n("1d80"),i=function(t){return function(e,n){var i,c,a=String(o(e)),u=r(n),f=a.length;return u<0||u>=f?t?"":void 0:(i=a.charCodeAt(u),i<55296||i>56319||u+1===f||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(false),charAt:i(true)};},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),c=i("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)};},"69f3":function(t,e,n){var r,o,i,c=n("7f9a"),a=n("da84"),u=n("861d"),f=n("9112"),s=n("5135"),l=n("f772"),d=n("d012"),p=a.WeakMap,v=function(t){return i(t)?o(t):r(t,{})},h=function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(c){var b=new p,g=b.get,y=b.has,m=b.set;r=function(t,e){return m.call(b,t,e),e},o=function(t){return g.call(b,t)||{}},i=function(t){return y.call(b,t)};}else {var x=l("state");d[x]=true,r=function(t,e){return f(t,x,e),e},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)};}t.exports={set:r,get:o,has:i,enforce:v,getterFor:h};},"6eeb":function(t,e,n){var r=n("da84"),o=n("9112"),i=n("5135"),c=n("ce4e"),a=n("8925"),u=n("69f3"),f=u.get,s=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var u=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=l.join("string"==typeof e?e:"")),t!==r?(u?!d&&t[e]&&(f=true):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:c(e,n);})(Function.prototype,"toString",(function(){return "function"==typeof this&&f(this).source||a(this)}));},"6f53":function(t,e,n){var r=n("83ab"),o=n("df75"),i=n("fc6a"),c=n("d1e7").f,a=function(t){return function(e){var n,a=i(e),u=o(a),f=u.length,s=0,l=[];while(f>s)n=u[s++],r&&!c.call(a,n)||l.push(t?[n,a[n]]:a[n]);return l}};t.exports={entries:a(true),values:a(false)};},"73d9":function(t,e,n){var r=n("44d2");r("flatMap");},7418:function(t,e){e.f=Object.getOwnPropertySymbols;},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)});};},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))};},"7c73":function(t,e,n){var r,o=n("825a"),i=n("37e8"),c=n("7839"),a=n("d012"),u=n("1be4"),f=n("cc12"),s=n("f772"),l=">",d="<",p="prototype",v="script",h=s("IE_PROTO"),b=function(){},g=function(t){return d+v+l+t+d+"/"+v+l},y=function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e},m=function(){var t,e=f("iframe"),n="java"+v+":";return e.style.display="none",u.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(g("document.F=Object")),t.close(),t.F},x=function(){try{r=document.domain&&new ActiveXObject("htmlfile");}catch(e){}x=r?y(r):m();var t=c.length;while(t--)delete x[p][c[t]];return x()};a[h]=true,t.exports=Object.create||function(t,e){var n;return null!==t?(b[p]=o(t),n=new b,b[p]=null,n[h]=t):n=x(),void 0===e?n:i(n,e)};},"7dd0":function(t,e,n){var r=n("23e7"),o=n("9ed3"),i=n("e163"),c=n("d2bb"),a=n("d44e"),u=n("9112"),f=n("6eeb"),s=n("b622"),l=n("c430"),d=n("3f8c"),p=n("ae93"),v=p.IteratorPrototype,h=p.BUGGY_SAFARI_ITERATORS,b=s("iterator"),g="keys",y="values",m="entries",x=function(){return this};t.exports=function(t,e,n,s,p,S,O){o(n,e,s);var w,E,j,A=function(t){if(t===p&&C)return C;if(!h&&t in T)return T[t];switch(t){case g:return function(){return new n(this,t)};case y:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this)}},P=e+" Iterator",I=false,T=t.prototype,_=T[b]||T["@@iterator"]||p&&T[p],C=!h&&_||A(p),L="Array"==e&&T.entries||_;if(L&&(w=i(L.call(new t)),v!==Object.prototype&&w.next&&(l||i(w)===v||(c?c(w,v):"function"!=typeof w[b]&&u(w,b,x)),a(w,P,true,true),l&&(d[P]=x))),p==y&&_&&_.name!==y&&(I=true,C=function(){return _.call(this)}),l&&!O||T[b]===C||u(T,b,C),d[e]=C,p)if(E={values:A(y),keys:S?C:A(g),entries:A(m)},O)for(j in E)(h||I||!(j in T))&&f(T,j,E[j]);else r({target:e,proto:true,forced:h||I},E);return E};},"7f9a":function(t,e,n){var r=n("da84"),o=n("8925"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i));},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t};},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));},8418:function(t,e,n){var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n;};},"861d":function(t,e){t.exports=function(t){return "object"===typeof t?null!==t:"function"===typeof t};},8875:function(t,e,n){var r,o,i;(function(n,c){o=[],r=c,i="function"===typeof r?r.apply(e,o):r,void 0===i||(t.exports=i);})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(p){var n,r,o,i=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,c=/@([^@]*):(\d+):(\d+)\s*$/gi,a=i.exec(p.stack)||c.exec(p.stack),u=a&&a[1]||false,f=a&&a[2]||false,s=document.location.href.replace(document.location.hash,""),l=document.getElementsByTagName("script");u===s&&(n=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(f-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),o=n.replace(r,"$1").trim());for(var d=0;d<l.length;d++){if("interactive"===l[d].readyState)return l[d];if(l[d].src===u)return l[d];if(u===s&&l[d].innerHTML&&l[d].innerHTML.trim()===o)return l[d]}return null}}return t}));},8925:function(t,e,n){var r=n("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource;},"8aa5":function(t,e,n){var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)};},"8bbf":function(e,n){e.exports=t;},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return "Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)};},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t};},9263:function(t,e,n){var r=n("ad6d"),o=n("9f7f"),i=RegExp.prototype.exec,c=String.prototype.replace,a=i,u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),f=o.UNSUPPORTED_Y||o.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],l=u||s||f;l&&(a=function(t){var e,n,o,a,l=this,d=f&&l.sticky,p=r.call(l),v=l.source,h=0,b=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),b=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(v="(?: "+v+")",b=" "+b,h++),n=new RegExp("^(?:"+v+")",p)),s&&(n=new RegExp("^"+v+"$(?!\\s)",p)),u&&(e=l.lastIndex),o=i.call(d?n:l,b),d?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=l.lastIndex,l.lastIndex+=o[0].length):l.lastIndex=0:u&&o&&(l.lastIndex=l.global?o.index+o[0].length:e),s&&o&&o.length>1&&c.call(o[0],n,(function(){for(a=1;a<arguments.length-2;a++) void 0===arguments[a]&&(o[a]=void 0);})),o}),t.exports=a;},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==f||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i;},"99af":function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("e8b5"),c=n("861d"),a=n("7b0b"),u=n("50c4"),f=n("8418"),s=n("65f0"),l=n("1dde"),d=n("b622"),p=n("2d00"),v=d("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",g=p>=51||!o((function(){var t=[];return t[v]=false,t.concat()[0]!==t})),y=l("concat"),m=function(t){if(!c(t))return  false;var e=t[v];return void 0!==e?!!e:i(t)},x=!g||!y;r({target:"Array",proto:true,forced:x},{concat:function(t){var e,n,r,o,i,c=a(this),l=s(c,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],m(i)){if(o=u(i.length),d+o>h)throw TypeError(b);for(n=0;n<o;n++,d++)n in i&&f(l,d,i[n]);}else {if(d>=h)throw TypeError(b);f(l,d++,i);}return l.length=d,l}});},"9bdd":function(t,e,n){var r=n("825a");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(c){var i=t["return"];throw void 0!==i&&r(i.call(t)),c}};},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),c=n("c04e"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,true),i(n),o)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return "value"in n&&(t[e]=n.value),t};},"9ed3":function(t,e,n){var r=n("ae93").IteratorPrototype,o=n("7c73"),i=n("5c6c"),c=n("d44e"),a=n("3f8c"),u=function(){return this};t.exports=function(t,e,n){var f=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),c(t,f,false,true),a[f]=u,t};},"9f7f":function(t,e,n){var r=n("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));},a2bf:function(t,e,n){var r=n("e8b5"),o=n("50c4"),i=n("0366"),c=function(t,e,n,a,u,f,s,l){var d,p=u,v=0,h=!!s&&i(s,l,3);while(v<a){if(v in n){if(d=h?h(n[v],v,e):n[v],f>0&&r(d))p=c(t,e,d,o(d.length),p,f-1)-1;else {if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[p]=d;}p++;}v++;}return p};t.exports=c;},a352:function(t,n){t.exports=e;},a434:function(t,e,n){var r=n("23e7"),o=n("23cb"),i=n("a691"),c=n("50c4"),a=n("7b0b"),u=n("65f0"),f=n("8418"),s=n("1dde"),l=n("ae40"),d=s("splice"),p=l("splice",{ACCESSORS:true,0:0,1:2}),v=Math.max,h=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:true,forced:!d||!p},{splice:function(t,e){var n,r,s,l,d,p,y=a(this),m=c(y.length),x=o(t,m),S=arguments.length;if(0===S?n=r=0:1===S?(n=0,r=m-x):(n=S-2,r=h(v(i(e),0),m-x)),m+n-r>b)throw TypeError(g);for(s=u(y,r),l=0;l<r;l++)d=x+l,d in y&&f(s,l,y[d]);if(s.length=r,n<r){for(l=x;l<m-r;l++)d=l+r,p=l+n,d in y?y[p]=y[d]:delete y[p];for(l=m;l>m-r+n;l--)delete y[l-1];}else if(n>r)for(l=m-r;l>x;l--)d=l+r-1,p=l+n-1,d in y?y[p]=y[d]:delete y[p];for(l=0;l<n;l++)y[l+x]=arguments[l+2];return y.length=m-r+n,s}});},a4d3:function(t,e,n){var r=n("23e7"),o=n("da84"),i=n("d066"),c=n("c430"),a=n("83ab"),u=n("4930"),f=n("fdbf"),s=n("d039"),l=n("5135"),d=n("e8b5"),p=n("861d"),v=n("825a"),h=n("7b0b"),b=n("fc6a"),g=n("c04e"),y=n("5c6c"),m=n("7c73"),x=n("df75"),S=n("241c"),O=n("057f"),w=n("7418"),E=n("06cf"),j=n("9bf2"),A=n("d1e7"),P=n("9112"),I=n("6eeb"),T=n("5692"),_=n("f772"),C=n("d012"),L=n("90e3"),R=n("b622"),k=n("e538"),D=n("746f"),M=n("d44e"),$=n("69f3"),F=n("b727").forEach,U=_("hidden"),N="Symbol",V="prototype",G=R("toPrimitive"),B=$.set,K=$.getterFor(N),q=Object[V],W=o.Symbol,H=i("JSON","stringify"),z=E.f,Y=j.f,X=O.f,J=A.f,Q=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),nt=T("wks"),rt=o.QObject,ot=!rt||!rt[V]||!rt[V].findChild,it=a&&s((function(){return 7!=m(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=z(q,e);r&&delete q[e],Y(t,e,n),r&&t!==q&&Y(q,e,r);}:Y,ct=function(t,e){var n=Q[t]=m(W[V]);return B(n,{type:N,tag:t,description:e}),a||(n.description=e),n},at=f?function(t){return "symbol"==typeof t}:function(t){return Object(t)instanceof W},ut=function(t,e,n){t===q&&ut(Z,e,n),v(t);var r=g(e,true);return v(n),l(Q,r)?(n.enumerable?(l(t,U)&&t[U][r]&&(t[U][r]=false),n=m(n,{enumerable:y(0,false)})):(l(t,U)||Y(t,U,y(1,{})),t[U][r]=true),it(t,r,n)):Y(t,r,n)},ft=function(t,e){v(t);var n=b(e),r=x(n).concat(vt(n));return F(r,(function(e){a&&!lt.call(n,e)||ut(t,e,n[e]);})),t},st=function(t,e){return void 0===e?m(t):ft(m(t),e)},lt=function(t){var e=g(t,true),n=J.call(this,e);return !(this===q&&l(Q,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Q,e)||l(this,U)&&this[U][e])||n)},dt=function(t,e){var n=b(t),r=g(e,true);if(n!==q||!l(Q,r)||l(Z,r)){var o=z(n,r);return !o||!l(Q,r)||l(n,U)&&n[U][r]||(o.enumerable=true),o}},pt=function(t){var e=X(b(t)),n=[];return F(e,(function(t){l(Q,t)||l(C,t)||n.push(t);})),n},vt=function(t){var e=t===q,n=X(e?Z:b(t)),r=[];return F(n,(function(t){!l(Q,t)||e&&!l(q,t)||r.push(Q[t]);})),r};if(u||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),n=function(t){this===q&&n.call(Z,t),l(this,U)&&l(this[U],e)&&(this[U][e]=false),it(this,e,y(1,t));};return a&&ot&&it(q,e,{configurable:true,set:n}),ct(e,t)},I(W[V],"toString",(function(){return K(this).tag})),I(W,"withoutSetter",(function(t){return ct(L(t),t)})),A.f=lt,j.f=ut,E.f=dt,S.f=O.f=pt,w.f=vt,k.f=function(t){return ct(R(t),t)},a&&(Y(W[V],"description",{configurable:true,get:function(){return K(this).description}}),c||I(q,"propertyIsEnumerable",lt,{unsafe:true}))),r({global:true,wrap:true,forced:!u,sham:!u},{Symbol:W}),F(x(nt),(function(t){D(t);})),r({target:N,stat:true,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=true;},useSimple:function(){ot=false;}}),r({target:"Object",stat:true,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:true,forced:!u},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),r({target:"Object",stat:true,forced:s((function(){w.f(1);}))},{getOwnPropertySymbols:function(t){return w.f(h(t))}}),H){var ht=!u||s((function(){var t=W();return "[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));r({target:"JSON",stat:true,forced:ht},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(p(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),o[1]=e,H.apply(null,o)}});}W[V][G]||P(W[V],G,W[V].valueOf),M(W,N),C[U]=true;},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),c=!i((function(t){Array.from(t);}));r({target:"Array",stat:true,forced:c},{from:o});},a640:function(t,e,n){var r=n("d039");t.exports=function(t,e){var n=[][t];return !!n&&r((function(){n.call(null,e||function(){throw 1},1);}))};},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)};},ab13:function(t,e,n){var r=n("b622"),o=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e);}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(r){}}return  false};},ac1f:function(t,e,n){var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:true,forced:/./.exec!==o},{exec:o});},ad6d:function(t,e,n){var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};},ae40:function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("5135"),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var n=[][t],f=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return a[t]=!!n&&!o((function(){if(f&&!r)return  true;var t={length:-1};f?c(t,1,{enumerable:true,get:u}):t[1]=1,n.call(t,s,l);}))};},ae93:function(t,e,n){var r,o,i,c=n("e163"),a=n("9112"),u=n("5135"),f=n("b622"),s=n("c430"),l=f("iterator"),d=false,p=function(){return this};[].keys&&(i=[].keys(),"next"in i?(o=c(c(i)),o!==Object.prototype&&(r=o)):d=true),void 0==r&&(r={}),s||u(r,l)||a(r,l,p),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d};},b041:function(t,e,n){var r=n("00ee"),o=n("f5df");t.exports=r?{}.toString:function(){return "[object "+o(this)+"]"};},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/,u="name";r&&!(u in i)&&o(i,u,{configurable:true,get:function(){try{return c.call(this).match(a)[1]}catch(t){return ""}}});},b622:function(t,e,n){var r=n("da84"),o=n("5692"),i=n("5135"),c=n("90e3"),a=n("4930"),u=n("fdbf"),f=o("wks"),s=r.Symbol,l=u?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(a&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]};},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),i=n("df75"),c=n("d039"),a=c((function(){i(1);}));r({target:"Object",stat:true,forced:a},{keys:function(t){return i(o(t))}});},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),c=n("50c4"),a=n("65f0"),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,d=5==t||l;return function(p,v,h,b){for(var g,y,m=i(p),x=o(m),S=r(v,h,3),O=c(x.length),w=0,E=b||a,j=e?E(p,O):n?E(p,0):void 0;O>w;w++)if((d||w in x)&&(g=x[w],y=S(g,w,m),t))if(e)j[w]=y;else if(y)switch(t){case 3:return  true;case 5:return g;case 6:return w;case 2:u.call(j,g);}else if(s)return  false;return l?-1:f||s?s:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)};},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")};},c430:function(t,e){t.exports=false;},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)};},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c;},c740:function(t,e,n){var r=n("23e7"),o=n("b727").findIndex,i=n("44d2"),c=n("ae40"),a="findIndex",u=true,f=c(a);a in[]&&Array(1)[a]((function(){u=false;})),r({target:"Array",proto:true,forced:u||!f},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a);},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")();}catch(r){}t.exports=n;},c975:function(t,e,n){var r=n("23e7"),o=n("4d64").indexOf,i=n("a640"),c=n("ae40"),a=[].indexOf,u=!!a&&1/[1].indexOf(1,-0)<0,f=i("indexOf"),s=c("indexOf",{ACCESSORS:true,1:0});r({target:"Array",proto:true,forced:u||!f||!s},{indexOf:function(t){return u?a.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}});},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,c=n("d012");t.exports=function(t,e){var n,a=o(t),u=0,f=[];for(n in a)!r(c,n)&&r(a,n)&&f.push(n);while(e.length>u)r(a,n=e[u++])&&(~i(f,n)||f.push(n));return f};},caad:function(t,e,n){var r=n("23e7"),o=n("4d64").includes,i=n("44d2"),c=n("ae40"),a=c("indexOf",{ACCESSORS:true,1:0});r({target:"Array",proto:true,forced:!a},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes");},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}};},ce4e:function(t,e,n){var r=n("da84"),o=n("9112");t.exports=function(t,e){try{o(r,t,e);}catch(n){r[t]=e;}return e};},d012:function(t,e){t.exports={};},d039:function(t,e){t.exports=function(t){try{return !!t()}catch(e){return  true}};},d066:function(t,e,n){var r=n("428f"),o=n("da84"),i=function(t){return "function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]};},d1e7:function(t,e,n){var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return !!e&&e.enumerable}:r;},d28b:function(t,e,n){var r=n("746f");r("iterator");},d2bb:function(t,e,n){var r=n("825a"),o=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=false,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array;}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0);},d3b7:function(t,e,n){var r=n("00ee"),o=n("6eeb"),i=n("b041");r||o(Object.prototype,"toString",i,{unsafe:true});},d44e:function(t,e,n){var r=n("9bf2").f,o=n("5135"),i=n("b622"),c=i("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,c)&&r(t,c,{configurable:true,value:e});};},d58f:function(t,e,n){var r=n("1c0b"),o=n("7b0b"),i=n("44ad"),c=n("50c4"),a=function(t){return function(e,n,a,u){r(n);var f=o(e),s=i(f),l=c(f.length),d=t?l-1:0,p=t?-1:1;if(a<2)while(1){if(d in s){u=s[d],d+=p;break}if(d+=p,t?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:l>d;d+=p)d in s&&(u=n(u,s[d],d,f));return u}};t.exports={left:a(false),right:a(true)};},d784:function(t,e,n){n("ac1f");var r=n("6eeb"),o=n("d039"),i=n("b622"),c=n("9263"),a=n("9112"),u=i("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return "$0"==="a".replace(/./,"$0")}(),l=i("replace"),d=function(){return !!/./[l]&&""===/./[l]("a","$0")}(),p=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var v=i(t),h=!o((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),b=h&&!o((function(){var e=false,n=/a/;return "split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=true,null},n[v](""),!e}));if(!h||!b||"replace"===t&&(!f||!s||d)||"split"===t&&!p){var g=/./[v],y=n(v,""[t],(function(t,e,n,r,o){return e.exec===c?h&&!o?{done:true,value:g.call(e,n,r)}:{done:true,value:t.call(n,e,r)}:{done:false}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),m=y[0],x=y[1];r(String.prototype,t,m),r(RegExp.prototype,v,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)});}l&&a(RegExp.prototype[v],"sham",true);};},d81d:function(t,e,n){var r=n("23e7"),o=n("b727").map,i=n("1dde"),c=n("ae40"),a=i("map"),u=c("map");r({target:"Array",proto:true,forced:!a||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}});},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"=="undefined")||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")();}).call(this,n("c8ba"));},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),c=n("fc6a"),a=n("06cf"),u=n("8418");r({target:"Object",stat:true,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=c(t),o=a.f,f=i(r),s={},l=0;while(f.length>l)n=o(r,e=f[l++]),void 0!==n&&u(s,e,n);return s}});},dbf1:function(t,e,n){(function(t){function r(){return t.console}n.d(e,"a",(function(){return o}));var o=r();}).call(this,n("c8ba"));},ddb0:function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("e260"),c=n("9112"),a=n("b622"),u=a("iterator"),f=a("toStringTag"),s=i.values;for(var l in o){var d=r[l],p=d&&d.prototype;if(p){if(p[u]!==s)try{c(p,u,s);}catch(h){p[u]=s;}if(p[f]||c(p,f,l),o[l])for(var v in i)if(p[v]!==i[v])try{c(p,v,i[v]);}catch(h){p[v]=i[v];}}}},df75:function(t,e,n){var r=n("ca84"),o=n("7839");t.exports=Object.keys||function(t){return r(t,o)};},e01a:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("da84"),c=n("5135"),a=n("861d"),u=n("9bf2").f,f=n("e893"),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new s(t):void 0===t?s():s(t);return ""===t&&(l[e]=true),e};f(d,s);var p=d.prototype=s.prototype;p.constructor=d;var v=p.toString,h="Symbol(test)"==String(s("test")),b=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:true,get:function(){var t=a(this)?this.valueOf():this,e=v.call(t);if(c(l,t))return "";var n=h?e.slice(7,-1):e.replace(b,"$1");return ""===n?void 0:n}}),r({global:true,forced:true},{Symbol:d});}},e163:function(t,e,n){var r=n("5135"),o=n("7b0b"),i=n("f772"),c=n("e177"),a=i("IE_PROTO"),u=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null};},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}));},e260:function(t,e,n){var r=n("fc6a"),o=n("44d2"),i=n("3f8c"),c=n("69f3"),a=n("7dd0"),u="Array Iterator",f=c.set,s=c.getterFor(u);t.exports=a(Array,"Array",(function(t,e){f(this,{type:u,target:r(t),index:0,kind:e});}),(function(){var t=s(this),e=t.target,n=t.kind,r=t.index++;return !e||r>=e.length?(t.target=void 0,{value:void 0,done:true}):"keys"==n?{value:r,done:false}:"values"==n?{value:e[r],done:false}:{value:[r,e[r]],done:false}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries");},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),c=n("06cf").f,a=n("83ab"),u=o((function(){c(1);})),f=!a||u;r({target:"Object",stat:true,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}});},e538:function(t,e,n){var r=n("b622");e.f=r;},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),c=n("9bf2");t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||a(t,s,u(e,s));}};},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return "Array"==r(t)};},e95a:function(t,e,n){var r=n("b622"),o=n("3f8c"),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)};},f5df:function(t,e,n){var r=n("00ee"),o=n("c6b6"),i=n("b622"),c=i("toStringTag"),a="Arguments"==o(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),c))?n:a?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r};},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))};},fb15:function(t,e,n){if(n.r(e),"undefined"!=="undefined");n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("a434"),n("159b"),n("a4d3"),n("e439"),n("dbb4"),n("b64b");function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:true,configurable:true,writable:true}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r);}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),true).forEach((function(e){c(t,e,n[e]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));}));}return t}function f(t){if(Array.isArray(t))return t}n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function s(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=true,o=false,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done);r=!0)if(n.push(c.value),e&&n.length===e)break}catch(u){o=true,i=u;}finally{try{r||null==a["return"]||a["return"]();}finally{if(o)throw i}}return n}}n("a630"),n("fb6a"),n("b0c0"),n("25f0");function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return "Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(t,e){return f(t)||s(t,e)||d(t,e)||p()}function h(t){if(Array.isArray(t))return l(t)}function b(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(t){return h(t)||b(t)||d(t)||g()}var m=n("a352"),x=n.n(m);function S(t){null!==t.parentElement&&t.parentElement.removeChild(t);}function O(t,e,n){var r=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,r);}var w=n("dbf1");n("13d5"),n("4fad"),n("ac1f"),n("5319");function E(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var j=/-(\w)/g,A=E((function(t){return t.replace(j,(function(t,e){return e.toUpperCase()}))})),P=(n("5db7"),n("73d9"),["Start","Add","Remove","Update","End"]),I=["Choose","Unchoose","Sort","Filter","Clone"],T=["Move"],_=[T,P,I].flatMap((function(t){return t})).map((function(t){return "on".concat(t)})),C={manage:T,manageAndEmit:P,emit:I};function L(t){return  -1!==_.indexOf(t)}n("caad"),n("2ca0");var R=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function k(t){return R.includes(t)}function D(t){return ["transition-group","TransitionGroup"].includes(t)}function M(t){return ["id","class","role","style"].includes(t)||t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("on")}function $(t){return t.reduce((function(t,e){var n=v(e,2),r=n[0],o=n[1];return t[r]=o,t}),{})}function F(t){var e=t.$attrs,n=t.componentData,r=void 0===n?{}:n,o=$(Object.entries(e).filter((function(t){var e=v(t,2),n=e[0];e[1];return M(n)})));return u(u({},o),r)}function U(t){var e=t.$attrs,n=t.callBackBuilder,r=$(N(e));Object.entries(n).forEach((function(t){var e=v(t,2),n=e[0],o=e[1];C[n].forEach((function(t){r["on".concat(t)]=o(t);}));}));var o="[data-draggable]".concat(r.draggable||"");return u(u({},r),{},{draggable:o})}function N(t){return Object.entries(t).filter((function(t){var e=v(t,2),n=e[0];e[1];return !M(n)})).map((function(t){var e=v(t,2),n=e[0],r=e[1];return [A(n),r]})).filter((function(t){var e=v(t,2),n=e[0];e[1];return !L(n)}))}n("c740");function V(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false,r.configurable=true,"value"in r&&(r.writable=true),Object.defineProperty(t,r.key,r);}}function B(t,e,n){return e&&G(t.prototype,e),t}var K=function(t){var e=t.el;return e},q=function(t,e){return t.__draggable_context=e},W=function(t){return t.__draggable_context},H=function(){function t(e){var n=e.nodes,r=n.header,o=n.default,i=n.footer,c=e.root,a=e.realList;V(this,t),this.defaultNodes=o,this.children=[].concat(y(r),y(o),y(i)),this.externalComponent=c.externalComponent,this.rootTransition=c.transition,this.tag=c.tag,this.realList=a;}return B(t,[{key:"render",value:function(t,e){var n=this.tag,r=this.children,o=this._isRootComponent,i=o?{default:function(){return r}}:r;return t(n,e,i)}},{key:"updated",value:function(){var t=this.defaultNodes,e=this.realList;t.forEach((function(t,n){q(K(t),{element:e[n],index:n});}));}},{key:"getUnderlyingVm",value:function(t){return W(t)}},{key:"getVmIndexFromDomIndex",value:function(t,e){var n=this.defaultNodes,r=n.length,o=e.children,i=o.item(t);if(null===i)return r;var c=W(i);if(c)return c.index;if(0===r)return 0;var a=K(n[0]),u=y(o).findIndex((function(t){return t===a}));return t<u?0:r}},{key:"_isRootComponent",get:function(){return this.externalComponent||this.rootTransition}}]),t}(),z=n("8bbf");function Y(t,e){var n=t[e];return n?n():[]}function X(t){var e=t.$slots,n=t.realList,r=t.getKey,o=n||[],i=["header","footer"].map((function(t){return Y(e,t)})),c=v(i,2),a=c[0],f=c[1],s=e.item;if(!s)throw new Error("draggable element must have an item slot");var l=o.flatMap((function(t,e){return s({element:t,index:e}).map((function(e){return e.key=r(t),e.props=u(u({},e.props||{}),{},{"data-draggable":true}),e}))}));if(l.length!==o.length)throw new Error("Item slot must have only one child");return {header:a,footer:f,default:l}}function J(t){var e=D(t),n=!k(t)&&!e;return {transition:e,externalComponent:n,tag:n?Object(z["resolveComponent"])(t):e?z["TransitionGroup"]:t}}function Q(t){var e=t.$slots,n=t.tag,r=t.realList,o=t.getKey,i=X({$slots:e,realList:r,getKey:o}),c=J(n);return new H({nodes:i,root:c,realList:r})}function Z(t,e){var n=this;Object(z["nextTick"])((function(){return n.$emit(t.toLowerCase(),e)}));}function tt(t){var e=this;return function(n,r){if(null!==e.realList)return e["onDrag".concat(t)](n,r)}}function et(t){var e=this,n=tt.call(this,t);return function(r,o){n.call(e,r,o),Z.call(e,t,r);}}var nt=null,rt={list:{type:Array,required:false,default:null},modelValue:{type:Array,required:false,default:null},itemKey:{type:[String,Function],required:true},clone:{type:Function,default:function(t){return t}},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:false,default:null}},ot=["update:modelValue","change"].concat(y([].concat(y(C.manageAndEmit),y(C.emit)).map((function(t){return t.toLowerCase()})))),it=Object(z["defineComponent"])({name:"draggable",inheritAttrs:false,props:rt,emits:ot,data:function(){return {error:false}},render:function(){try{this.error=!1;var t=this.$slots,e=this.$attrs,n=this.tag,r=this.componentData,o=this.realList,i=this.getKey,c=Q({$slots:t,tag:n,realList:o,getKey:i});this.componentStructure=c;var a=F({$attrs:e,componentData:r});return c.render(z["h"],a)}catch(u){return this.error=true,Object(z["h"])("pre",{style:{color:"red"}},u.stack)}},created:function(){null!==this.list&&null!==this.modelValue&&w["a"].error("modelValue and list props are mutually exclusive! Please set one or another.");},mounted:function(){var t=this;if(!this.error){var e=this.$attrs,n=this.$el,r=this.componentStructure;r.updated();var o=U({$attrs:e,callBackBuilder:{manageAndEmit:function(e){return et.call(t,e)},emit:function(e){return Z.bind(t,e)},manage:function(e){return tt.call(t,e)}}}),i=1===n.nodeType?n:n.parentElement;this._sortable=new x.a(i,o),this.targetDomElement=i,i.__draggable_component__=this;}},updated:function(){this.componentStructure.updated();},beforeUnmount:function(){ void 0!==this._sortable&&this._sortable.destroy();},computed:{realList:function(){var t=this.list;return t||this.modelValue},getKey:function(){var t=this.itemKey;return "function"===typeof t?t:function(e){return e[t]}}},watch:{$attrs:{handler:function(t){var e=this._sortable;e&&N(t).forEach((function(t){var n=v(t,2),r=n[0],o=n[1];e.option(r,o);}));},deep:true}},methods:{getUnderlyingVm:function(t){return this.componentStructure.getUnderlyingVm(t)||null},getUnderlyingPotencialDraggableComponent:function(t){return t.__draggable_component__},emitChanges:function(t){var e=this;Object(z["nextTick"])((function(){return e.$emit("change",t)}));},alterList:function(t){if(this.list)t(this.list);else {var e=y(this.modelValue);t(e),this.$emit("update:modelValue",e);}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,y(t))};this.alterList(e);},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n);},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,r=this.getUnderlyingPotencialDraggableComponent(e);if(!r)return {component:r};var o=r.realList,i={list:o,component:r};if(e!==n&&o){var c=r.getUnderlyingVm(n)||{};return u(u({},c),i)}return i},getVmIndexFromDomIndex:function(t){return this.componentStructure.getVmIndexFromDomIndex(t,this.targetDomElement)},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),nt=t.item;},onDragAdd:function(t){var e=t.item._underlying_vm_;if(void 0!==e){S(t.item);var n=this.getVmIndexFromDomIndex(t.newIndex);this.spliceList(n,0,e);var r={element:e,newIndex:n};this.emitChanges({added:r});}},onDragRemove:function(t){if(O(this.$el,t.item,t.oldIndex),"clone"!==t.pullMode){var e=this.context,n=e.index,r=e.element;this.spliceList(n,1);var o={element:r,oldIndex:n};this.emitChanges({removed:o});}else S(t.clone);},onDragUpdate:function(t){S(t.item),O(t.from,t.item,t.oldIndex);var e=this.context.index,n=this.getVmIndexFromDomIndex(t.newIndex);this.updatePosition(e,n);var r={element:this.context.element,oldIndex:e,newIndex:n};this.emitChanges({moved:r});},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=y(e.to.children).filter((function(t){return "none"!==t.style["display"]})),r=n.indexOf(e.related),o=t.component.getVmIndexFromDomIndex(r),i=-1!==n.indexOf(nt);return i||!e.willInsertAfter?o:o+1},onDragMove:function(t,e){var n=this.move,r=this.realList;if(!n||!r)return  true;var o=this.getRelatedContextFromMoveEvent(t),i=this.computeFutureIndex(o,t),c=u(u({},this.context),{},{futureIndex:i}),a=u(u({},t),{},{relatedContext:o,draggedContext:c});return n(a,e)},onDragEnd:function(){nt=null;}}}),ct=it;e["default"]=ct;},fb6a:function(t,e,n){var r=n("23e7"),o=n("861d"),i=n("e8b5"),c=n("23cb"),a=n("50c4"),u=n("fc6a"),f=n("8418"),s=n("b622"),l=n("1dde"),d=n("ae40"),p=l("slice"),v=d("slice",{ACCESSORS:true,0:0,1:2}),h=s("species"),b=[].slice,g=Math.max;r({target:"Array",proto:true,forced:!p||!v},{slice:function(t,e){var n,r,s,l=u(this),d=a(l.length),p=c(t,d),v=c(void 0===e?d:e,d);if(i(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(l,p,v);for(r=new(void 0===n?Array:n)(g(v-p,0)),s=0;p<v;p++,s++)p in l&&f(r,s,l[p]);return r.length=s,r}});},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))};},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;}})["default"]}));
	
} (vuedraggable_umd_min$1));

var vuedraggable_umd_minExports = vuedraggable_umd_min$1.exports;
const draggable = /*@__PURE__*/getDefaultExportFromCjs(vuedraggable_umd_minExports);

const KANBAN_COLUMNS = [
  { id: "backlog", label: "Ideas", color: "#94a3b8" },
  { id: "todo", label: "Por hacer", color: "#38bdf8" },
  { id: "in_progress", label: "En progreso", color: "#a78bfa" },
  { id: "review", label: "En revisi\xF3n", color: "#fbbf24" },
  { id: "done", label: "Completado", color: "#34d399" }
];
const ISSUE_TYPES = [
  { value: "task", label: "Tarea" },
  { value: "story", label: "Historia" },
  { value: "bug", label: "Bug" },
  { value: "epic", label: "\xC9pica" },
  { value: "subtask", label: "Subtarea" }
];
const ISSUE_PRIORITIES = { low: "Baja", medium: "Media", high: "Alta", urgent: "Urgente" };
const issueInitials = (name) => name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
const issueDate = (date) => (/* @__PURE__ */ new Date(`${date.slice(0, 10)}T12:00:00`)).toLocaleDateString("es-CL", { day: "numeric", month: "short" });
const issueOverdue = (issue) => issue.status !== "done" && !!issue.due_date && issue.due_date.slice(0, 10) < (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
const issueActivityVerbs = {
  created: "cre\xF3",
  updated: "actualiz\xF3",
  moved: "movi\xF3",
  deleted: "elimin\xF3",
  project_updated: "actualiz\xF3 el proyecto",
  project_archived: "archiv\xF3 el proyecto",
  project_restored: "recuper\xF3 el proyecto",
  member_updated: "actualiz\xF3 los miembros de",
  member_removed: "retir\xF3 un miembro de",
  label_created: "cre\xF3 la etiqueta",
  label_updated: "actualiz\xF3 la etiqueta",
  label_deleted: "elimin\xF3 la etiqueta",
  comment_created: "coment\xF3 en",
  comment_updated: "edit\xF3 un comentario en",
  comment_deleted: "elimin\xF3 un comentario en",
  sprint_changed: "cambi\xF3 el sprint de"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "FilterBar",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    users: {},
    columns: {},
    disabled: { type: Boolean },
    showActivity: { type: Boolean }
  }, {
    "query": { required: true },
    "queryModifiers": {},
    "assignee": { required: true },
    "assigneeModifiers": {},
    "priority": { required: true },
    "priorityModifiers": {},
    "status": { required: true },
    "statusModifiers": {},
    "type": { required: true },
    "typeModifiers": {},
    "view": { required: true },
    "viewModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["refresh", "activity"], ["update:query", "update:assignee", "update:priority", "update:status", "update:type", "update:view"]),
  setup(__props, { emit: __emit }) {
    const query = useModel(__props, "query");
    const assignee = useModel(__props, "assignee");
    const priority = useModel(__props, "priority");
    const status = useModel(__props, "status");
    const type = useModel(__props, "type");
    const view = useModel(__props, "view");
    const filtered = computed(() => Boolean(query.value || assignee.value || priority.value || status.value || type.value));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center gap-2 rounded-xl border border-slate-200/80 bg-white p-3 dark:border-slate-800 dark:bg-[#1a1920]" }, _attrs))}><div class="relative min-w-[180px] flex-1">`);
      _push(ssrRenderComponent(unref(Search), { class: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }, null, _parent));
      _push(`<input${ssrRenderAttr("value", query.value)} type="search" maxlength="200" aria-label="Buscar issues" placeholder="Buscar por t\xEDtulo o clave\u2026" class="!min-h-10 !pl-9"></div><select aria-label="Filtrar por responsable" class="!min-h-10 !w-auto"><option value=""${ssrIncludeBooleanAttr(Array.isArray(assignee.value) ? ssrLooseContain(assignee.value, "") : ssrLooseEqual(assignee.value, "")) ? " selected" : ""}>Todo el equipo</option><!--[-->`);
      ssrRenderList(__props.users, (user) => {
        _push(`<option${ssrRenderAttr("value", String(user.id))}${ssrIncludeBooleanAttr(Array.isArray(assignee.value) ? ssrLooseContain(assignee.value, String(user.id)) : ssrLooseEqual(assignee.value, String(user.id))) ? " selected" : ""}>${ssrInterpolate(user.name)}</option>`);
      });
      _push(`<!--]--></select><select aria-label="Filtrar por prioridad" class="!min-h-10 !w-auto"><option value=""${ssrIncludeBooleanAttr(Array.isArray(priority.value) ? ssrLooseContain(priority.value, "") : ssrLooseEqual(priority.value, "")) ? " selected" : ""}>Prioridad</option><!--[-->`);
      ssrRenderList(unref(ISSUE_PRIORITIES), (label, id) => {
        _push(`<option${ssrRenderAttr("value", id)}${ssrIncludeBooleanAttr(Array.isArray(priority.value) ? ssrLooseContain(priority.value, id) : ssrLooseEqual(priority.value, id)) ? " selected" : ""}>${ssrInterpolate(label)}</option>`);
      });
      _push(`<!--]--></select><select aria-label="Filtrar por tipo" class="!min-h-10 !w-auto"><option value=""${ssrIncludeBooleanAttr(Array.isArray(type.value) ? ssrLooseContain(type.value, "") : ssrLooseEqual(type.value, "")) ? " selected" : ""}>Tipo</option><!--[-->`);
      ssrRenderList(unref(ISSUE_TYPES).filter((item) => item.value !== "subtask"), (item) => {
        _push(`<option${ssrRenderAttr("value", item.value)}${ssrIncludeBooleanAttr(Array.isArray(type.value) ? ssrLooseContain(type.value, item.value) : ssrLooseEqual(type.value, item.value)) ? " selected" : ""}>${ssrInterpolate(item.label)}</option>`);
      });
      _push(`<!--]--></select><select aria-label="Filtrar por estado" class="!min-h-10 !w-auto"><option value=""${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "") : ssrLooseEqual(status.value, "")) ? " selected" : ""}>Estado</option><!--[-->`);
      ssrRenderList(__props.columns, (column) => {
        _push(`<option${ssrRenderAttr("value", column.id)}${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, column.id) : ssrLooseEqual(status.value, column.id)) ? " selected" : ""}>${ssrInterpolate(column.label)}</option>`);
      });
      _push(`<!--]--></select><div class="ml-auto flex items-center gap-1">`);
      if (unref(filtered)) {
        _push(`<button aria-label="Limpiar filtros" class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">`);
        _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button aria-label="Actualizar tablero"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-50 dark:hover:bg-slate-800">`);
      _push(ssrRenderComponent(unref(RefreshCw), { class: "h-4 w-4" }, null, _parent));
      _push(`</button><button${ssrRenderAttr("aria-expanded", __props.showActivity)} class="inline-flex min-h-10 items-center rounded-lg px-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">`);
      _push(ssrRenderComponent(unref(Activity), { class: "mr-1 h-4 w-4" }, null, _parent));
      _push(`Actividad</button><div class="flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800" role="group" aria-label="Vista de issues"><button${ssrRenderAttr("aria-pressed", view.value === "board")} aria-label="Vista tablero" class="${ssrRenderClass([view.value === "board" ? "bg-white text-sky-600 shadow-sm dark:bg-slate-700 dark:text-sky-300" : "text-slate-500", "flex h-9 w-9 items-center justify-center rounded-md"])}">`);
      _push(ssrRenderComponent(unref(SquareKanban), { class: "h-4 w-4" }, null, _parent));
      _push(`</button><button${ssrRenderAttr("aria-pressed", view.value === "list")} aria-label="Vista lista" class="${ssrRenderClass([view.value === "list" ? "bg-white text-sky-600 shadow-sm dark:bg-slate-700 dark:text-sky-300" : "text-slate-500", "flex h-9 w-9 items-center justify-center rounded-md"])}">`);
      _push(ssrRenderComponent(unref(Rows3), { class: "h-4 w-4" }, null, _parent));
      _push(`</button></div></div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/FilterBar.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "MemberAvatars",
  __ssrInlineRender: true,
  props: {
    members: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex -space-x-1.5",
        "aria-label": __props.members.map((member) => member.name).join(", ") || "Sin asignar"
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.members.slice(0, 3), (member) => {
        _push(`<span${ssrRenderAttr("title", member.name)} class="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[9px] font-bold text-sky-700 ring-2 ring-white dark:bg-sky-900 dark:text-sky-200 dark:ring-slate-800">${ssrInterpolate(unref(issueInitials)(member.name))}</span>`);
      });
      _push(`<!--]-->`);
      if (__props.members.length > 3) {
        _push(`<span class="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[9px] font-bold text-slate-600 ring-2 ring-white dark:bg-slate-700 dark:text-slate-200 dark:ring-slate-800">+${ssrInterpolate(__props.members.length - 3)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/MemberAvatars.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "IssueTypeIcon",
  __ssrInlineRender: true,
  props: {
    type: {}
  },
  setup(__props) {
    const props = __props;
    const icons = { task: SquareCheck, story: BookOpen, bug: Bug, epic: Layers, subtask: GitBranch };
    const colors = { task: "text-sky-500", story: "text-emerald-500", bug: "text-red-500", epic: "text-violet-500", subtask: "text-slate-500" };
    const label = computed(() => {
      var _a;
      return ((_a = ISSUE_TYPES.find((item) => item.value === props.type)) == null ? void 0 : _a.label) || props.type;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: "inline-flex shrink-0 items-center",
        role: "img",
        "aria-label": unref(label),
        title: unref(label)
      }, _attrs))}>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(icons[__props.type] || unref(SquareCheck)), {
        class: ["h-4 w-4", colors[__props.type]],
        "aria-hidden": "true"
      }, null), _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/IssueTypeIcon.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PriorityBadge",
  __ssrInlineRender: true,
  props: {
    priority: {}
  },
  setup(__props) {
    const colors = {
      urgent: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
      high: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
      medium: "bg-slate-100 text-slate-600 dark:bg-slate-700/70 dark:text-slate-300",
      low: "bg-slate-100 text-slate-500 dark:bg-slate-700/50 dark:text-slate-400"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["inline-flex w-fit rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide", colors[__props.priority]]
      }, _attrs))}>${ssrInterpolate(unref(ISSUE_PRIORITIES)[__props.priority])}</span>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/PriorityBadge.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "IssueList",
  __ssrInlineRender: true,
  props: {
    issues: {},
    columns: {},
    canWrite: { type: Boolean },
    disabled: { type: Boolean },
    filtered: { type: Boolean }
  },
  emits: ["open", "move"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminKanbanIssueTypeIcon = _sfc_main$a;
      const _component_AdminKanbanPriorityBadge = _sfc_main$9;
      const _component_AdminKanbanMemberAvatars = _sfc_main$b;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "aria-label": "Lista de issues",
        class: "overflow-x-auto rounded-xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-[#1a1920]"
      }, _attrs))}><table class="w-full min-w-[800px] text-left text-sm"><thead class="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-800/40"><tr><th class="px-4 py-3 font-semibold">Issue</th><th class="w-36 px-3 py-3 font-semibold">Estado</th><th class="px-3 py-3 font-semibold">Prioridad</th><th class="px-3 py-3 font-semibold">Responsables</th><th class="px-3 py-3 font-semibold">Vencimiento</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800">`);
      if (!__props.issues.length) {
        _push(`<tr><td colspan="5" class="px-4 py-12 text-center text-slate-500">${ssrInterpolate(__props.filtered ? "No hay issues que coincidan con estos filtros." : "Este proyecto todav\xEDa no tiene issues.")}</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.issues, (issue) => {
        _push(`<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40"><td class="max-w-md px-4 py-3"><button${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="flex w-full items-start gap-2.5 text-left hover:text-sky-600 dark:hover:text-sky-400">`);
        _push(ssrRenderComponent(_component_AdminKanbanIssueTypeIcon, {
          type: issue.type,
          class: "mt-0.5"
        }, null, _parent));
        _push(`<span class="min-w-0"><span class="block text-[11px] font-semibold text-slate-400">${ssrInterpolate(issue.issue_key)}</span><span class="line-clamp-2 font-medium text-slate-800 dark:text-slate-100">${ssrInterpolate(issue.title)}</span></span></button></td><td class="px-3 py-3"><select${ssrRenderAttr("value", issue.status)}${ssrIncludeBooleanAttr(__props.disabled || !__props.canWrite) ? " disabled" : ""}${ssrRenderAttr("aria-label", `Estado de ${issue.issue_key}`)} class="!min-h-8 !py-1 !text-xs"><!--[-->`);
        ssrRenderList(__props.columns, (column) => {
          _push(`<option${ssrRenderAttr("value", column.id)}>${ssrInterpolate(column.label)}</option>`);
        });
        _push(`<!--]--></select></td><td class="px-3 py-3">`);
        _push(ssrRenderComponent(_component_AdminKanbanPriorityBadge, {
          priority: issue.priority
        }, null, _parent));
        _push(`</td><td class="px-3 py-3">`);
        if (issue.assignees.length) {
          _push(ssrRenderComponent(_component_AdminKanbanMemberAvatars, {
            members: issue.assignees
          }, null, _parent));
        } else {
          _push(`<span class="text-xs text-slate-400">Sin asignar</span>`);
        }
        _push(`</td><td class="${ssrRenderClass([unref(issueOverdue)(issue) ? "font-semibold text-red-500" : "text-slate-500 dark:text-slate-400", "whitespace-nowrap px-3 py-3 text-xs"])}">${ssrInterpolate(issue.due_date ? unref(issueDate)(issue.due_date) : "Sin fecha")}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/IssueList.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "IssueCard",
  __ssrInlineRender: true,
  props: {
    issue: {},
    columns: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    dragDisabled: { type: Boolean }
  },
  emits: ["open", "move"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminKanbanIssueTypeIcon = _sfc_main$a;
      const _component_AdminKanbanPriorityBadge = _sfc_main$9;
      const _component_AdminKanbanMemberAvatars = _sfc_main$b;
      _push(`<article${ssrRenderAttrs(mergeProps({
        "data-card": __props.issue.id,
        class: "group flex flex-col gap-2 rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-200 transition hover:ring-sky-400/70 dark:bg-slate-800 dark:ring-slate-700/70 dark:hover:ring-sky-500/60"
      }, _attrs))}><div class="flex items-center justify-between gap-2"><button${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"${ssrRenderAttr("aria-label", `Abrir ${__props.issue.issue_key}`)}>`);
      _push(ssrRenderComponent(_component_AdminKanbanIssueTypeIcon, {
        type: __props.issue.type
      }, null, _parent));
      _push(`${ssrInterpolate(__props.issue.issue_key || `#${__props.issue.id}`)}</button><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_AdminKanbanPriorityBadge, {
        priority: __props.issue.priority
      }, null, _parent));
      _push(`<button${ssrRenderAttr("aria-label", `Arrastrar ${__props.issue.title}`)}${ssrIncludeBooleanAttr(__props.dragDisabled) ? " disabled" : ""} class="drag-handle -mr-1.5 flex h-9 w-9 cursor-grab touch-none items-center justify-center rounded text-slate-400 hover:text-slate-600 active:cursor-grabbing disabled:cursor-default dark:text-slate-500 dark:hover:text-slate-300">`);
      _push(ssrRenderComponent(unref(GripVertical), { class: "h-4 w-4" }, null, _parent));
      _push(`</button></div></div><button${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="line-clamp-2 w-full text-left text-sm font-medium leading-snug text-slate-800 hover:text-sky-600 disabled:cursor-wait dark:text-slate-100 dark:hover:text-sky-400">${ssrInterpolate(__props.issue.title)}</button>`);
      if (__props.issue.description) {
        _push(`<p class="line-clamp-2 whitespace-pre-line text-xs leading-relaxed text-slate-500 dark:text-slate-400">${ssrInterpolate(__props.issue.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.issue.labels.length) {
        _push(`<div class="flex flex-wrap gap-1"><!--[-->`);
        ssrRenderList(__props.issue.labels.slice(0, 2), (label) => {
          _push(`<span class="inline-flex max-w-[130px] items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600 dark:bg-slate-700 dark:text-slate-300"><span class="h-1.5 w-1.5 shrink-0 rounded-full" style="${ssrRenderStyle({ backgroundColor: label.color })}"></span><span class="truncate">${ssrInterpolate(label.name)}</span></span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center justify-between gap-2 pt-1"><div class="flex items-center gap-2 text-[11px] text-slate-400">`);
      if (__props.issue.due_date) {
        _push(`<span class="${ssrRenderClass([{ "font-semibold text-red-500": unref(issueOverdue)(__props.issue) }, "flex items-center gap-1"])}">`);
        _push(ssrRenderComponent(unref(Calendar), { class: "h-3 w-3" }, null, _parent));
        _push(`${ssrInterpolate(unref(issueDate)(__props.issue.due_date))}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.issue.comments_count) {
        _push(`<span class="flex items-center gap-1"${ssrRenderAttr("aria-label", `${__props.issue.comments_count} comentarios`)}>`);
        _push(ssrRenderComponent(unref(MessageSquare), { class: "h-3 w-3" }, null, _parent));
        _push(`${ssrInterpolate(__props.issue.comments_count)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.issue.subtasks_count) {
        _push(`<span class="flex items-center gap-1"${ssrRenderAttr("aria-label", `${__props.issue.subtasks_count} subtareas`)}>`);
        _push(ssrRenderComponent(unref(GitBranch), { class: "h-3 w-3" }, null, _parent));
        _push(`${ssrInterpolate(__props.issue.subtasks_count)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AdminKanbanMemberAvatars, {
        members: __props.issue.assignees
      }, null, _parent));
      _push(`</div><select${ssrRenderAttr("value", __props.issue.status)}${ssrRenderAttr("aria-label", `Mover ${__props.issue.title} a otra columna`)}${ssrIncludeBooleanAttr(__props.disabled || __props.readonly) ? " disabled" : ""} class="!min-h-8 !bg-slate-50 !py-1.5 !text-xs dark:!bg-slate-700/50"><!--[-->`);
      ssrRenderList(__props.columns, (column) => {
        _push(`<option${ssrRenderAttr("value", column.id)}>${ssrInterpolate(column.label)}</option>`);
      });
      _push(`<!--]--></select></article>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/IssueCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BoardColumn",
  __ssrInlineRender: true,
  props: {
    column: {},
    columns: {},
    cards: {},
    projectId: {},
    canWrite: { type: Boolean },
    disabled: { type: Boolean },
    filtered: { type: Boolean },
    reduceMotion: { type: Boolean },
    matches: { type: Function }
  },
  emits: ["update:cards", "open", "create", "move", "start", "end", "drop"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const visibleCount = computed(() => props.cards.filter(props.matches).length);
    function dropped(event) {
      var _a, _b;
      const change = event.added || event.moved;
      if (!change) return;
      const index = props.cards.findIndex((card) => card.id === change.element.id);
      emit("drop", props.column.id, change.element, (_b = (_a = props.cards[index + 1]) == null ? void 0 : _a.id) != null ? _b : null);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminKanbanIssueCard = _sfc_main$7;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-column": __props.column.id,
        class: "flex w-[300px] min-w-[300px] flex-1 flex-col rounded-xl bg-slate-200/60 p-2.5 ring-1 ring-slate-300/50 dark:bg-black/30 dark:ring-white/10"
      }, _attrs))}><header class="mb-2.5 flex items-center gap-2 px-1.5 py-1.5"><span class="h-2.5 w-2.5 shrink-0 rounded-full" style="${ssrRenderStyle({ background: __props.column.color })}"></span><h3 class="text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">${ssrInterpolate(__props.column.label)}</h3><span class="ml-auto rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-slate-600 dark:bg-slate-800 dark:text-slate-300">${ssrInterpolate(unref(visibleCount))}</span>`);
      if (__props.canWrite) {
        _push(`<button${ssrRenderAttr("aria-label", `Agregar issue en ${__props.column.label}`)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="flex h-7 w-7 items-center justify-center rounded-md text-slate-500 hover:bg-white hover:text-sky-600 dark:hover:bg-slate-800">`);
        _push(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      _push(ssrRenderComponent(unref(draggable), {
        "model-value": __props.cards,
        "item-key": "id",
        group: `project-${__props.projectId}`,
        handle: ".drag-handle",
        animation: __props.reduceMotion ? 0 : 180,
        "force-fallback": true,
        "fallback-tolerance": 4,
        disabled: __props.filtered || __props.disabled || !__props.canWrite,
        delay: 120,
        "delay-on-touch-only": true,
        "touch-start-threshold": 5,
        "ghost-class": "kanban-ghost",
        "drag-class": "kanban-drag",
        class: "flex min-h-[160px] flex-1 flex-col gap-2",
        "onUpdate:modelValue": ($event) => emit("update:cards", $event),
        onStart: ($event) => emit("start"),
        onEnd: ($event) => emit("end"),
        onChange: dropped
      }, {
        item: withCtx(({ element: issue }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AdminKanbanIssueCard, {
              style: __props.matches(issue) ? null : { display: "none" },
              issue,
              columns: __props.columns,
              disabled: __props.disabled,
              readonly: !__props.canWrite,
              "drag-disabled": __props.filtered || __props.disabled || !__props.canWrite,
              onOpen: ($event) => emit("open", $event),
              onMove: (card, status) => emit("move", card, status)
            }, null, _parent2, _scopeId));
          } else {
            return [
              withDirectives(createVNode(_component_AdminKanbanIssueCard, {
                issue,
                columns: __props.columns,
                disabled: __props.disabled,
                readonly: !__props.canWrite,
                "drag-disabled": __props.filtered || __props.disabled || !__props.canWrite,
                onOpen: ($event) => emit("open", $event),
                onMove: (card, status) => emit("move", card, status)
              }, null, 8, ["issue", "columns", "disabled", "readonly", "drag-disabled", "onOpen", "onMove"]), [
                [vShow, __props.matches(issue)]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(visibleCount)) {
        _push(`<p class="rounded-lg border border-dashed border-slate-300/70 px-3 py-6 text-center text-xs text-slate-400 dark:border-slate-700">${ssrInterpolate(__props.filtered ? "Sin coincidencias" : "Arrastra un issue aqu\xED")}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.canWrite) {
        _push(`<button${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-slate-300 py-2 text-xs font-medium text-slate-500 hover:border-sky-400 hover:text-sky-600 disabled:opacity-50 dark:border-slate-700 dark:text-slate-400">`);
        _push(ssrRenderComponent(unref(Plus), { class: "h-3.5 w-3.5" }, null, _parent));
        _push(` Crear issue</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/BoardColumn.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ActivityTimeline",
  __ssrInlineRender: true,
  props: {
    activities: {},
    columns: {},
    users: { default: () => [] },
    labels: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const fields = { title: "T\xEDtulo", description: "Descripci\xF3n", type: "Tipo", status: "Estado", stage: "Etapa", priority: "Prioridad", story_points: "Estimaci\xF3n", due_date: "Fecha l\xEDmite", start_date: "Fecha de inicio", assignee_ids: "Responsables", label_ids: "Etiquetas", epic_id: "\xC9pica", parent_id: "Padre", sprint_id: "Sprint" };
    function valueText(field, value) {
      var _a, _b;
      if (value === null || value === void 0 || value === "" || Array.isArray(value) && !value.length) return "Sin definir";
      if (field === "status") return ((_a = props.columns.find((column) => column.id === value)) == null ? void 0 : _a.label) || String(value);
      if (field === "priority") return ISSUE_PRIORITIES[value] || String(value);
      if (field === "type") return ((_b = ISSUE_TYPES.find((type) => type.value === value)) == null ? void 0 : _b.label) || String(value);
      if (Array.isArray(value)) {
        const options = field === "assignee_ids" ? props.users : props.labels;
        return value.map((id) => {
          var _a2;
          return ((_a2 = options.find((option) => option.id === id)) == null ? void 0 : _a2.name) || `#${id}`;
        }).join(", ");
      }
      return String(value).slice(0, 180);
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.activities.length) {
        _push(`<p${ssrRenderAttrs(mergeProps({ class: "py-3 text-sm text-slate-500 dark:text-slate-400" }, _attrs))}>Todav\xEDa no hay actividad.</p>`);
      } else {
        _push(`<ol${ssrRenderAttrs(mergeProps({ class: "relative space-y-5 before:absolute before:bottom-1 before:left-[5px] before:top-1 before:w-px before:bg-slate-200 dark:before:bg-slate-700" }, _attrs))}><!--[-->`);
        ssrRenderList(__props.activities, (log) => {
          var _a, _b, _c, _d;
          _push(`<li class="relative pl-6 text-[13px] text-slate-600 dark:text-slate-400"><span class="${ssrRenderClass([log.action.includes("deleted") ? "bg-red-400" : log.action === "moved" ? "bg-amber-400" : "bg-sky-400", "absolute left-0 top-[6px] h-2.5 w-2.5 rounded-full ring-4 ring-white dark:ring-slate-900"])}"></span><p><strong class="font-semibold text-slate-800 dark:text-slate-200">${ssrInterpolate(((_a = log.user) == null ? void 0 : _a.name) || "Usuario")}</strong> ${ssrInterpolate(unref(issueActivityVerbs)[log.action] || "modific\xF3")} \xAB${ssrInterpolate(log.card_title)}\xBB`);
          if (log.action === "moved") {
            _push(`<span> a ${ssrInterpolate(((_b = __props.columns.find((column) => column.id === log.to_status)) == null ? void 0 : _b.label) || log.to_status)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`.</p>`);
          if ((_d = (_c = log.metadata) == null ? void 0 : _c.changes) == null ? void 0 : _d.length) {
            _push(`<dl class="mt-2 space-y-1 rounded-lg bg-slate-50 px-3 py-2 text-xs dark:bg-slate-800/60"><!--[-->`);
            ssrRenderList(log.metadata.changes, (change) => {
              _push(`<div class="flex flex-wrap gap-x-1"><dt class="font-medium text-slate-700 dark:text-slate-300">${ssrInterpolate(fields[change.field] || change.field)}:</dt><dd class="min-w-0 break-words">${ssrInterpolate(valueText(change.field, change.before))} <span aria-label="cambi\xF3 a">\u2192</span> <span class="text-slate-800 dark:text-slate-200">${ssrInterpolate(valueText(change.field, change.after))}</span></dd></div>`);
            });
            _push(`<!--]--></dl>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<time class="mt-1 block text-[11px] text-slate-400"${ssrRenderAttr("datetime", log.created_at)}>${ssrInterpolate(new Date(log.created_at).toLocaleString("es-CL"))}</time></li>`);
        });
        _push(`<!--]--></ol>`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/ActivityTimeline.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InlineEdit",
  __ssrInlineRender: true,
  props: {
    label: {},
    value: {},
    readonly: { type: Boolean },
    busy: { type: Boolean },
    save: {},
    multiline: { type: Boolean, default: false },
    heading: { type: Boolean, default: false },
    placeholder: { default: "Sin definir" },
    maxlength: { default: 255 },
    minlength: { default: 0 }
  },
  emits: ["dirty"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const editing = ref(false);
    const draft = ref("");
    const original = ref("");
    ref();
    const dirty = computed(() => editing.value && draft.value !== original.value);
    watch(dirty, (value) => emit("dirty", value));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(editing)) {
        _push(`<form class="space-y-2"><label class="sr-only"${ssrRenderAttr("for", `inline-${__props.label}`)}>${ssrInterpolate(__props.label)}</label>`);
        if (__props.multiline) {
          _push(`<textarea${ssrRenderAttr("id", `inline-${__props.label}`)} rows="6"${ssrRenderAttr("maxlength", __props.maxlength)}${ssrIncludeBooleanAttr(__props.busy || __props.readonly) ? " disabled" : ""} class="!text-sm !font-normal">${ssrInterpolate(unref(draft))}</textarea>`);
        } else {
          _push(`<input${ssrRenderAttr("id", `inline-${__props.label}`)}${ssrRenderAttr("value", unref(draft))}${ssrIncludeBooleanAttr(__props.minlength > 0) ? " required" : ""}${ssrRenderAttr("minlength", __props.minlength)}${ssrRenderAttr("maxlength", __props.maxlength)}${ssrIncludeBooleanAttr(__props.busy || __props.readonly) ? " disabled" : ""} class="${ssrRenderClass(__props.heading ? "!text-xl !font-semibold" : "!text-sm")}">`);
        }
        if (__props.value !== unref(original)) {
          _push(`<p class="rounded-md bg-amber-50 p-2 text-xs text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">Valor actual en el servidor: <span class="line-clamp-3 whitespace-pre-wrap">${ssrInterpolate(__props.value || "Sin definir")}</span></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center gap-2"><button type="submit"${ssrIncludeBooleanAttr(__props.busy || __props.readonly) ? " disabled" : ""} class="inline-flex min-h-8 items-center gap-1 rounded-md bg-sky-600 px-3 text-xs font-semibold text-white hover:bg-sky-700 disabled:opacity-50">`);
        if (__props.busy) {
          _push(ssrRenderComponent(unref(Loader2), { class: "h-3 w-3 animate-spin" }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(Check), { class: "h-3 w-3" }, null, _parent));
        }
        _push(`Guardar</button><button type="button"${ssrIncludeBooleanAttr(__props.busy) ? " disabled" : ""} class="inline-flex min-h-8 items-center gap-1 rounded-md px-2 text-xs text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">`);
        _push(ssrRenderComponent(unref(X), { class: "h-3 w-3" }, null, _parent));
        _push(`Cancelar</button></div></form>`);
      } else if (__props.readonly) {
        _push(`<div class="${ssrRenderClass([__props.heading ? "text-xl font-semibold leading-snug text-slate-900 dark:text-white" : "text-sm leading-relaxed text-slate-600 dark:text-slate-300", "whitespace-pre-wrap break-words"])}">${ssrInterpolate(__props.value || __props.placeholder)}</div>`);
      } else {
        _push(`<button type="button"${ssrIncludeBooleanAttr(__props.busy) ? " disabled" : ""}${ssrRenderAttr("aria-label", `Editar ${__props.label.toLowerCase()}`)} class="group -ml-2 flex w-[calc(100%+1rem)] items-start gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 disabled:opacity-60 dark:hover:bg-slate-800/60"><span class="${ssrRenderClass([__props.heading ? "text-xl font-semibold leading-snug text-slate-900 dark:text-white" : __props.value ? "text-sm leading-relaxed text-slate-600 dark:text-slate-300" : "text-sm text-slate-400", "min-w-0 flex-1 whitespace-pre-wrap break-words"])}">${ssrInterpolate(__props.value || __props.placeholder)}</span>`);
        _push(ssrRenderComponent(unref(Pencil), { class: "mt-1 h-3.5 w-3.5 shrink-0 text-slate-400 opacity-0 group-hover:opacity-100 group-focus:opacity-100" }, null, _parent));
        _push(`</button>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/InlineEdit.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "IssuePanel",
  __ssrInlineRender: true,
  props: {
    issueId: {},
    projectId: {},
    projectName: {},
    canWrite: { type: Boolean },
    users: {},
    labels: {},
    epics: {},
    columns: {}
  },
  emits: ["close", "saved", "deleted", "open", "dirty", "saving"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const api = useApi();
    const dialog = ref();
    const issue = ref(null);
    const loading = ref(false);
    const saving = ref(false);
    const error = ref("");
    const saved = ref(false);
    const discard = ref(false);
    const confirmingDelete = ref(false);
    const tab = ref("activity");
    const textDirty = reactive(/* @__PURE__ */ new Set());
    const assigneeOpen = ref(false);
    const assigneeDraft = ref([]);
    const labelOpen = ref(false);
    const labelDraft = ref([]);
    let sequence = 0;
    let disposed = false;
    const sameIds = (first, second) => JSON.stringify([...first].sort((a, b) => a - b)) === JSON.stringify([...second].sort((a, b) => a - b));
    const dirty = computed(() => {
      var _a, _b;
      return textDirty.size > 0 || assigneeOpen.value && !sameIds(assigneeDraft.value, ((_a = issue.value) == null ? void 0 : _a.assignees.map((user) => user.id)) || []) || labelOpen.value && !sameIds(labelDraft.value, ((_b = issue.value) == null ? void 0 : _b.labels.map((label) => label.id)) || []);
    });
    watch(dirty, (value) => emit("dirty", value));
    const assigneeOptions = computed(() => {
      var _a;
      return [...props.users, ...(((_a = issue.value) == null ? void 0 : _a.assignees) || []).filter((member) => !props.users.some((user) => user.id === member.id))];
    });
    const typeOptions = computed(() => ISSUE_TYPES.filter((type) => {
      var _a;
      return type.value !== "subtask" || ((_a = issue.value) == null ? void 0 : _a.type) === "subtask";
    }));
    const epicOptions = computed(() => {
      var _a;
      const options = props.epics.filter((epic) => {
        var _a2;
        return epic.id !== ((_a2 = issue.value) == null ? void 0 : _a2.id);
      });
      if (((_a = issue.value) == null ? void 0 : _a.epic) && !options.some((epic) => {
        var _a2, _b;
        return epic.id === ((_b = (_a2 = issue.value) == null ? void 0 : _a2.epic) == null ? void 0 : _b.id);
      })) options.push(issue.value.epic);
      return options;
    });
    function markDirty(field, value) {
      if (value) textDirty.add(field);
      else textDirty.delete(field);
    }
    function clearDrafts() {
      textDirty.clear();
      assigneeOpen.value = false;
      labelOpen.value = false;
      discard.value = false;
      emit("dirty", false);
    }
    async function loadIssue(initial = false) {
      if (!props.issueId) return;
      const started = ++sequence;
      const id = props.issueId;
      const projectId = props.projectId;
      if (initial) {
        loading.value = true;
        issue.value = null;
        error.value = "";
      }
      try {
        const { data } = await api.request(`kanban/cards/${id}`, { query: { project_id: projectId } });
        if (disposed || started !== sequence || props.issueId !== id || props.projectId !== projectId) return;
        issue.value = data;
      } catch (failure) {
        if (started !== sequence) return;
        if ([401, 403, 404, 419].includes(apiStatus(failure))) {
          issue.value = null;
          clearDrafts();
        }
        error.value = apiErrorMessage(failure, "No se pudo cargar el detalle. Vuelve a intentar.");
      } finally {
        if (started === sequence) loading.value = false;
      }
    }
    watch([() => props.issueId, () => props.projectId], async ([id]) => {
      var _a, _b, _c;
      sequence++;
      clearDrafts();
      error.value = "";
      saved.value = false;
      confirmingDelete.value = false;
      tab.value = "activity";
      await nextTick();
      if (!id) {
        (_a = dialog.value) == null ? void 0 : _a.close();
        issue.value = null;
        return;
      }
      if (!((_b = dialog.value) == null ? void 0 : _b.open)) (_c = dialog.value) == null ? void 0 : _c.showModal();
      await loadIssue(true);
    }, { immediate: true });
    async function saveIssue(patch) {
      if (!issue.value || saving.value || !props.canWrite) return false;
      const id = issue.value.id;
      const projectId = props.projectId;
      const version = issue.value.version;
      saving.value = true;
      emit("saving", true);
      error.value = "";
      saved.value = false;
      try {
        const { data } = await api.request(`kanban/cards/${id}`, {
          method: "PUT",
          query: { project_id: projectId },
          body: { ...patch, expected_version: version }
        });
        if (disposed || props.issueId !== id || props.projectId !== projectId || !issue.value) return false;
        issue.value = { ...issue.value, ...data };
        emit("saved", data);
        saved.value = true;
        await loadIssue();
        return true;
      } catch (failure) {
        if (props.issueId !== id) return false;
        if (apiStatus(failure) === 409) {
          await loadIssue();
          error.value = "Otra persona modific\xF3 este issue. Se carg\xF3 la versi\xF3n actual y se conserv\xF3 tu borrador. Revisa los cambios antes de guardar otra vez.";
        } else {
          error.value = apiErrorMessage(failure);
          if ([403, 404].includes(apiStatus(failure))) await loadIssue();
        }
        return false;
      } finally {
        saving.value = false;
        emit("saving", false);
      }
    }
    const fullDate = (value) => new Date(value).toLocaleString("es-CL", { dateStyle: "medium", timeStyle: "short" });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_AdminKanbanIssueTypeIcon = _sfc_main$a;
      const _component_AdminKanbanInlineEdit = _sfc_main$4;
      const _component_AdminKanbanActivityTimeline = _sfc_main$5;
      const _component_AdminKanbanMemberAvatars = _sfc_main$b;
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "dialog",
        ref: dialog,
        "aria-labelledby": "issue-panel-heading",
        class: "admin-scope issue-panel fixed inset-y-0 left-auto right-0 !m-0 h-dvh max-h-none w-full max-w-[1060px] border-l border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      }, _attrs))}><div class="flex h-full flex-col"><header class="flex min-h-16 shrink-0 items-center gap-3 border-b border-slate-200 px-5 dark:border-slate-800 sm:px-7">`);
      if (unref(issue)) {
        _push(ssrRenderComponent(_component_AdminKanbanIssueTypeIcon, {
          type: unref(issue).type
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 id="issue-panel-heading" class="text-sm font-semibold">${ssrInterpolate(((_a = unref(issue)) == null ? void 0 : _a.issue_key) || "Detalle del issue")}</h2><span class="hidden truncate text-xs text-slate-400 sm:block">${ssrInterpolate(__props.projectName)}</span>`);
      if (unref(saving)) {
        _push(`<span role="status" class="ml-auto inline-flex items-center gap-1.5 text-xs text-slate-500">`);
        _push(ssrRenderComponent(unref(Loader2), { class: "h-3.5 w-3.5 animate-spin" }, null, _parent));
        _push(`Guardando\u2026</span>`);
      } else if (unref(saved)) {
        _push(`<span role="status" class="ml-auto inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">`);
        _push(ssrRenderComponent(unref(Check), { class: "h-3.5 w-3.5" }, null, _parent));
        _push(`Guardado</span>`);
      } else {
        _push(`<span class="ml-auto"></span>`);
      }
      _push(`<button${ssrIncludeBooleanAttr(unref(saving) || unref(dirty)) ? " disabled" : ""} aria-label="Actualizar detalle" class="rounded-lg p-2 text-slate-400 hover:bg-slate-100 disabled:opacity-40 dark:hover:bg-slate-800">`);
      _push(ssrRenderComponent(unref(RefreshCw), { class: "h-4 w-4" }, null, _parent));
      _push(`</button><button${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} aria-label="Cerrar detalle de issue" class="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">`);
      _push(ssrRenderComponent(unref(X), { class: "h-5 w-5" }, null, _parent));
      _push(`</button></header><div class="min-h-0 flex-1 overflow-y-auto overscroll-contain">`);
      if (unref(error)) {
        _push(`<div role="alert" class="mx-5 mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">${ssrInterpolate(unref(error))}`);
        if (!unref(issue) && !unref(loading)) {
          _push(`<button class="ml-2 font-semibold underline">Reintentar</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(discard)) {
        _push(`<div role="alert" class="mx-5 mt-4 rounded-lg border border-amber-200 p-4 text-sm dark:border-amber-500/20"><p>Hay cambios sin guardar. \xBFQuieres descartarlos?</p><div class="mt-3 flex gap-4"><button class="font-semibold text-red-600 dark:text-red-400">Descartar y cerrar</button><button class="font-semibold text-sky-600 dark:text-sky-400">Seguir editando</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div role="status" class="space-y-6 p-7"><span class="sr-only">Cargando detalle del issue\u2026</span><div class="h-7 w-3/4 animate-pulse rounded bg-slate-100 dark:bg-slate-800"></div><div class="h-32 animate-pulse rounded bg-slate-100 dark:bg-slate-800"></div><div class="h-24 animate-pulse rounded bg-slate-100 dark:bg-slate-800"></div></div>`);
      } else if (unref(issue)) {
        _push(`<div class="grid min-h-full md:grid-cols-[minmax(0,1fr)_280px]"><section class="min-w-0 space-y-7 p-5 sm:p-7">`);
        if (!__props.canWrite) {
          _push(`<p class="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500 dark:bg-slate-800">Solo lectura. No tienes permiso para editar este proyecto o est\xE1 archivado.</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(issue).parent) {
          _push(`<button class="inline-flex items-center gap-1.5 text-xs font-medium text-sky-600 hover:underline dark:text-sky-400"${ssrIncludeBooleanAttr(unref(saving) || unref(dirty)) ? " disabled" : ""}>`);
          _push(ssrRenderComponent(unref(GitBranch), { class: "h-3.5 w-3.5" }, null, _parent));
          _push(`${ssrInterpolate(unref(issue).parent.issue_key)} \xB7 ${ssrInterpolate(unref(issue).parent.title)}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_AdminKanbanInlineEdit, {
          label: "T\xEDtulo",
          value: unref(issue).title,
          readonly: !__props.canWrite,
          busy: unref(saving),
          save: (value) => saveIssue({ title: value.trim() }),
          minlength: 2,
          heading: "",
          onDirty: ($event) => markDirty("title", $event)
        }, null, _parent));
        _push(`<section aria-labelledby="issue-description-heading"><h3 id="issue-description-heading" class="mb-2 text-sm font-semibold">Descripci\xF3n</h3>`);
        _push(ssrRenderComponent(_component_AdminKanbanInlineEdit, {
          label: "Descripci\xF3n",
          value: unref(issue).description || "",
          readonly: !__props.canWrite,
          busy: unref(saving),
          save: (value) => saveIssue({ description: value || null }),
          maxlength: 5e3,
          multiline: "",
          placeholder: "A\xF1adir contexto, objetivos y pr\xF3ximos pasos\u2026",
          onDirty: ($event) => markDirty("description", $event)
        }, null, _parent));
        _push(`</section>`);
        if (unref(issue).subtasks.length) {
          _push(`<section aria-labelledby="issue-subtasks-heading"><h3 id="issue-subtasks-heading" class="mb-3 flex items-center gap-2 text-sm font-semibold">`);
          _push(ssrRenderComponent(unref(GitBranch), { class: "h-4 w-4 text-slate-400" }, null, _parent));
          _push(`Subtareas <span class="text-xs font-normal text-slate-400">${ssrInterpolate(unref(issue).subtasks.filter((child) => child.status === "done").length)}/${ssrInterpolate(unref(issue).subtasks.length)}</span></h3><ul class="divide-y divide-slate-100 rounded-lg border border-slate-200 dark:divide-slate-800 dark:border-slate-700"><!--[-->`);
          ssrRenderList(unref(issue).subtasks, (child) => {
            var _a2;
            _push(`<li><button${ssrIncludeBooleanAttr(unref(saving) || unref(dirty)) ? " disabled" : ""} class="flex w-full items-start gap-2 px-3 py-3 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-800">`);
            _push(ssrRenderComponent(_component_AdminKanbanIssueTypeIcon, {
              type: child.type
            }, null, _parent));
            _push(`<span class="min-w-0 flex-1"><span class="mr-2 text-xs text-slate-400">${ssrInterpolate(child.issue_key)}</span>${ssrInterpolate(child.title)}</span><span class="text-[11px] text-slate-400">${ssrInterpolate((_a2 = __props.columns.find((column) => column.id === child.status)) == null ? void 0 : _a2.label)}</span></button></li>`);
          });
          _push(`<!--]--></ul></section>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(issue).links.length) {
          _push(`<section aria-labelledby="issue-links-heading"><h3 id="issue-links-heading" class="mb-2 text-sm font-semibold">Enlaces externos</h3><ul class="space-y-2 text-xs"><!--[-->`);
          ssrRenderList(unref(issue).links, (link) => {
            _push(`<li class="rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700">`);
            if (link.url && /^https?:\/\//i.test(link.url)) {
              _push(`<a${ssrRenderAttr("href", link.url)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400">${ssrInterpolate(link.title)}`);
              _push(ssrRenderComponent(unref(ExternalLink), { class: "h-3 w-3" }, null, _parent));
              _push(`</a>`);
            } else {
              _push(`<span>${ssrInterpolate(link.title)}</span>`);
            }
            _push(`<p class="mt-1 text-slate-400">${ssrInterpolate(link.provider)} \xB7 ${ssrInterpolate(link.external_id)}</p></li>`);
          });
          _push(`<!--]--></ul></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<section aria-labelledby="issue-activity-heading"><h3 id="issue-activity-heading" class="mb-3 text-sm font-semibold">Actividad</h3><div class="mb-5 flex gap-4 border-b border-slate-200 dark:border-slate-800" role="tablist" aria-label="Actividad del issue"><button id="issue-activity-tab" role="tab"${ssrRenderAttr("aria-selected", unref(tab) === "activity")}${ssrRenderAttr("tabindex", unref(tab) === "activity" ? 0 : -1)} aria-controls="issue-activity-panel" class="${ssrRenderClass([unref(tab) === "activity" ? "border-sky-500 text-sky-600 dark:text-sky-400" : "border-transparent text-slate-500", "inline-flex items-center gap-1.5 border-b-2 pb-2 text-xs font-semibold"])}">`);
        _push(ssrRenderComponent(unref(Activity), { class: "h-3.5 w-3.5" }, null, _parent));
        _push(`Historial</button><button id="issue-comments-tab" role="tab"${ssrRenderAttr("aria-selected", unref(tab) === "comments")}${ssrRenderAttr("tabindex", unref(tab) === "comments" ? 0 : -1)} aria-controls="issue-comments-panel" class="${ssrRenderClass([unref(tab) === "comments" ? "border-sky-500 text-sky-600 dark:text-sky-400" : "border-transparent text-slate-500", "inline-flex items-center gap-1.5 border-b-2 pb-2 text-xs font-semibold"])}">`);
        _push(ssrRenderComponent(unref(MessageSquare), { class: "h-3.5 w-3.5" }, null, _parent));
        _push(`Comentarios <span class="text-slate-400">${ssrInterpolate(unref(issue).comments.length)}</span></button></div><div id="issue-activity-panel" role="tabpanel" aria-labelledby="issue-activity-tab" style="${ssrRenderStyle(unref(tab) === "activity" ? null : { display: "none" })}">`);
        _push(ssrRenderComponent(_component_AdminKanbanActivityTimeline, {
          activities: unref(issue).activities,
          columns: __props.columns,
          users: __props.users,
          labels: __props.labels
        }, null, _parent));
        _push(`</div><div id="issue-comments-panel" role="tabpanel" aria-labelledby="issue-comments-tab" style="${ssrRenderStyle(unref(tab) === "comments" ? null : { display: "none" })}">`);
        if (!unref(issue).comments.length) {
          _push(`<p class="text-sm text-slate-500">Todav\xEDa no hay comentarios.</p>`);
        } else {
          _push(`<ul class="space-y-5"><!--[-->`);
          ssrRenderList(unref(issue).comments, (comment) => {
            var _a2, _b2;
            _push(`<li class="flex gap-3"><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[10px] font-semibold text-sky-700 dark:bg-sky-900 dark:text-sky-200">${ssrInterpolate(unref(issueInitials)(((_a2 = comment.user) == null ? void 0 : _a2.name) || "Usuario"))}</span><div class="min-w-0"><p class="text-xs"><strong>${ssrInterpolate(((_b2 = comment.user) == null ? void 0 : _b2.name) || "Usuario eliminado")}</strong><time class="ml-2 text-slate-400">${ssrInterpolate(fullDate(comment.created_at))}</time>`);
            if (comment.edited_at) {
              _push(`<span class="ml-1 text-slate-400">(editado)</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</p><p class="mt-1 whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-600 dark:text-slate-300">${ssrInterpolate(comment.body)}</p></div></li>`);
          });
          _push(`<!--]--></ul>`);
        }
        _push(`</div></section></section><aside aria-label="Campos del issue" class="space-y-5 border-t border-slate-200 bg-slate-50/60 p-5 dark:border-slate-800 dark:bg-slate-950/20 md:border-l md:border-t-0"><label class="block space-y-1.5 text-xs font-semibold">Estado<select${ssrRenderAttr("value", unref(issue).status)}${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="!text-sm"><!--[-->`);
        ssrRenderList(__props.columns, (column) => {
          _push(`<option${ssrRenderAttr("value", column.id)}>${ssrInterpolate(column.label)}</option>`);
        });
        _push(`<!--]--></select></label><div><p class="mb-1.5 text-xs font-semibold">Responsables</p>`);
        if (!unref(assigneeOpen)) {
          _push(`<button${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="flex min-h-10 w-full items-center gap-2 rounded-lg border border-transparent px-2 py-1.5 text-left text-sm hover:border-slate-200 hover:bg-white disabled:cursor-default dark:hover:border-slate-700 dark:hover:bg-slate-800">`);
          if (unref(issue).assignees.length) {
            _push(ssrRenderComponent(_component_AdminKanbanMemberAvatars, {
              members: unref(issue).assignees
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="min-w-0 flex-1 truncate text-xs text-slate-500 dark:text-slate-300">${ssrInterpolate(unref(issue).assignees.map((user) => user.name).join(", ") || "Sin asignar")}</span></button>`);
        } else {
          _push(`<form class="space-y-2 rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800"><fieldset${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="max-h-48 space-y-2 overflow-y-auto"><legend class="sr-only">Elegir responsables</legend><!--[-->`);
          ssrRenderList(unref(assigneeOptions), (user) => {
            _push(`<label class="flex items-center gap-2 text-xs font-normal"><input${ssrIncludeBooleanAttr(Array.isArray(unref(assigneeDraft)) ? ssrLooseContain(unref(assigneeDraft), user.id) : unref(assigneeDraft)) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", user.id)}>${ssrInterpolate(user.name)}`);
            if (!__props.users.some((member) => member.id === user.id)) {
              _push(`<span class="text-amber-600">(sin acceso)</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</label>`);
          });
          _push(`<!--]-->`);
          if (!unref(assigneeOptions).length) {
            _push(`<p class="text-xs text-slate-500">No hay colaboradores disponibles.</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</fieldset><div class="flex gap-2"><button${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="rounded bg-sky-600 px-2 py-1 text-xs text-white">Guardar</button><button type="button"${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-2 text-xs text-slate-500">Cancelar</button></div></form>`);
        }
        _push(`</div><label class="block space-y-1.5 text-xs font-semibold">Prioridad<select${ssrRenderAttr("value", unref(issue).priority)}${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="!text-sm"><!--[-->`);
        ssrRenderList(unref(ISSUE_PRIORITIES), (label, value) => {
          _push(`<option${ssrRenderAttr("value", value)}>${ssrInterpolate(label)}</option>`);
        });
        _push(`<!--]--></select></label><label class="block space-y-1.5 text-xs font-semibold">Tipo<select${ssrRenderAttr("value", unref(issue).type)}${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="!text-sm"><!--[-->`);
        ssrRenderList(unref(typeOptions), (type) => {
          _push(`<option${ssrRenderAttr("value", type.value)}>${ssrInterpolate(type.label)}</option>`);
        });
        _push(`<!--]--></select></label>`);
        if (unref(issue).type !== "epic" && unref(issue).type !== "subtask") {
          _push(`<label class="block space-y-1.5 text-xs font-semibold">\xC9pica<select${ssrRenderAttr("value", unref(issue).epic_id || "")}${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="!text-sm"><option value="">Sin \xE9pica</option><!--[-->`);
          ssrRenderList(unref(epicOptions), (epic) => {
            _push(`<option${ssrRenderAttr("value", epic.id)}>${ssrInterpolate(epic.issue_key)} \xB7 ${ssrInterpolate(epic.title)}</option>`);
          });
          _push(`<!--]--></select></label>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><p class="mb-1.5 text-xs font-semibold">Etiquetas</p>`);
        if (!unref(labelOpen)) {
          _push(`<button${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="flex min-h-9 w-full flex-wrap gap-1.5 rounded-lg px-2 py-1.5 text-left hover:bg-white dark:hover:bg-slate-800"><!--[-->`);
          ssrRenderList(unref(issue).labels, (label) => {
            _push(`<span class="inline-flex items-center gap-1 rounded bg-slate-200/60 px-1.5 py-0.5 text-xs dark:bg-slate-700"><span class="h-1.5 w-1.5 rounded-full" style="${ssrRenderStyle({ backgroundColor: label.color })}"></span>${ssrInterpolate(label.name)}</span>`);
          });
          _push(`<!--]-->`);
          if (!unref(issue).labels.length) {
            _push(`<span class="text-xs text-slate-400">Sin etiquetas</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        } else {
          _push(`<form class="space-y-2 rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800"><fieldset${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="max-h-40 space-y-2 overflow-y-auto"><legend class="sr-only">Elegir etiquetas</legend><!--[-->`);
          ssrRenderList(__props.labels, (label) => {
            _push(`<label class="flex items-center gap-2 text-xs font-normal"><input${ssrIncludeBooleanAttr(Array.isArray(unref(labelDraft)) ? ssrLooseContain(unref(labelDraft), label.id) : unref(labelDraft)) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", label.id)}>${ssrInterpolate(label.name)}</label>`);
          });
          _push(`<!--]-->`);
          if (!__props.labels.length) {
            _push(`<p class="text-xs text-slate-500">Este proyecto no tiene etiquetas.</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</fieldset><div class="flex gap-2"><button${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="rounded bg-sky-600 px-2 py-1 text-xs text-white">Guardar</button><button type="button"${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-2 text-xs text-slate-500">Cancelar</button></div></form>`);
        }
        _push(`</div><label class="block space-y-1.5 text-xs font-semibold">Fecha de inicio<input type="date"${ssrRenderAttr("value", ((_b = unref(issue).start_date) == null ? void 0 : _b.slice(0, 10)) || "")}${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="!text-xs"></label><label class="block space-y-1.5 text-xs font-semibold">Fecha l\xEDmite<input type="date"${ssrRenderAttr("value", ((_c = unref(issue).due_date) == null ? void 0 : _c.slice(0, 10)) || "")}${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} class="!text-xs"></label><label class="block space-y-1.5 text-xs font-semibold">Estimaci\xF3n \xB7 puntos<input type="number" min="0" max="100" step="0.5"${ssrRenderAttr("value", (_d = unref(issue).story_points) != null ? _d : "")}${ssrIncludeBooleanAttr(unref(saving) || !__props.canWrite) ? " disabled" : ""} placeholder="Sin estimar" class="!text-xs"></label><dl class="space-y-4 border-t border-slate-200 pt-4 text-xs dark:border-slate-800"><div><dt class="mb-1 font-semibold">Reportado por</dt><dd class="text-slate-500 dark:text-slate-400">${ssrInterpolate(((_e = unref(issue).creator) == null ? void 0 : _e.name) || "Usuario eliminado")}</dd></div>`);
        if (unref(issue).sprint) {
          _push(`<div><dt class="mb-1 font-semibold">Sprint</dt><dd class="text-slate-500 dark:text-slate-400">${ssrInterpolate(unref(issue).sprint.name)}</dd></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><dt class="mb-1 font-semibold">Creado</dt><dd class="text-slate-500 dark:text-slate-400">${ssrInterpolate(fullDate(unref(issue).created_at))}</dd></div><div><dt class="mb-1 font-semibold">Actualizado</dt><dd class="text-slate-500 dark:text-slate-400">${ssrInterpolate(fullDate(unref(issue).updated_at))}`);
        if (unref(issue).editor) {
          _push(`<span> \xB7 ${ssrInterpolate(unref(issue).editor.name)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</dd></div></dl>`);
        if (__props.canWrite && !unref(confirmingDelete)) {
          _push(`<button${ssrIncludeBooleanAttr(unref(saving) || unref(dirty)) ? " disabled" : ""} class="inline-flex items-center gap-1.5 text-xs text-red-500 hover:underline disabled:opacity-40">`);
          _push(ssrRenderComponent(unref(Trash2), { class: "h-3.5 w-3.5" }, null, _parent));
          _push(`Eliminar issue</button>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(confirmingDelete)) {
          _push(`<div class="rounded-lg border border-red-200 bg-red-50 p-3 text-xs dark:border-red-500/20 dark:bg-red-500/10"><p>\xBFEliminar este issue? No se puede deshacer.</p><div class="mt-2 flex gap-3"><button${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="font-semibold text-red-600 dark:text-red-300">Eliminar</button><button${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="text-slate-500">Conservar</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</aside></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></dialog>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/IssuePanel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "IssueCreateDialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    project: {},
    status: {},
    canWrite: { type: Boolean }
  },
  emits: ["close", "created", "dirty", "saving"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useApi();
    const dialog = ref();
    const titleInput = ref();
    const title = ref("");
    const type = ref("task");
    const busy = ref(false);
    const error = ref("");
    const discard = ref(false);
    const dirty = computed(() => !!title.value.trim());
    watch(dirty, (value) => emit("dirty", value));
    watch(() => props.open, async (open) => {
      var _a, _b, _c;
      await nextTick();
      if (open) {
        title.value = "";
        type.value = "task";
        error.value = "";
        discard.value = false;
        (_a = dialog.value) == null ? void 0 : _a.showModal();
        (_b = titleInput.value) == null ? void 0 : _b.focus();
      } else (_c = dialog.value) == null ? void 0 : _c.close();
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "dialog",
        ref: dialog,
        "aria-labelledby": "quick-issue-heading",
        class: "admin-scope !m-auto w-[min(520px,calc(100vw-32px))] rounded-xl bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/50 dark:bg-slate-900 dark:text-slate-100"
      }, _attrs))}><form class="space-y-5 p-6"><header class="flex items-center justify-between"><h2 id="quick-issue-heading" class="text-lg font-semibold">Crear issue</h2><button type="button" aria-label="Cerrar creaci\xF3n de issue"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="rounded-md p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">`);
      _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
      _push(`</button></header>`);
      if (unref(error)) {
        _push(`<p role="alert" class="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-300">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.canWrite) {
        _push(`<p role="status" class="rounded-lg bg-slate-50 p-3 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">La creaci\xF3n no est\xE1 disponible en este momento. Tu borrador se conserva.</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(discard)) {
        _push(`<div role="alert" class="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-200"><p>\xBFDescartar el t\xEDtulo que escribiste?</p><div class="mt-2 flex gap-3"><button type="button" class="font-semibold underline">Descartar y cerrar</button><button type="button" class="underline">Seguir escribiendo</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label class="block space-y-1.5 text-xs font-semibold">Proyecto<input${ssrRenderAttr("value", `${((_a = __props.project) == null ? void 0 : _a.project_key) || ""} \xB7 ${((_b = __props.project) == null ? void 0 : _b.name) || ""}`)} readonly></label><label class="block space-y-1.5 text-xs font-semibold">Tipo<select${ssrIncludeBooleanAttr(unref(busy) || !__props.canWrite) ? " disabled" : ""}><!--[-->`);
      ssrRenderList(unref(ISSUE_TYPES).filter((item) => item.value !== "subtask"), (item) => {
        _push(`<option${ssrRenderAttr("value", item.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(type)) ? ssrLooseContain(unref(type), item.value) : ssrLooseEqual(unref(type), item.value)) ? " selected" : ""}>${ssrInterpolate(item.label)}</option>`);
      });
      _push(`<!--]--></select></label><label class="block space-y-1.5 text-xs font-semibold">T\xEDtulo<input${ssrRenderAttr("value", unref(title))} required minlength="2" maxlength="255"${ssrIncludeBooleanAttr(unref(busy) || !__props.canWrite) ? " disabled" : ""} placeholder="\xBFQu\xE9 hay que hacer?"></label><p class="text-xs leading-relaxed text-slate-500 dark:text-slate-400">Completa la descripci\xF3n, los responsables y el resto de los campos desde el detalle.</p><footer class="flex justify-end gap-2 border-t border-slate-200 pt-4 dark:border-slate-800"><button type="button"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">Cancelar</button><button type="submit"${ssrIncludeBooleanAttr(unref(busy) || !__props.canWrite) ? " disabled" : ""} class="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50">`);
      if (unref(busy)) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent));
      }
      _push(`${ssrInterpolate(unref(busy) ? "Creando\u2026" : "Crear y abrir")}</button></footer></form></dialog>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/IssueCreateDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SprintDialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    projectId: {},
    projectName: {},
    canManage: { type: Boolean }
  },
  emits: ["close", "created", "saving"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useApi();
    const dialog = ref();
    const form = reactive({ name: "", goal: "", start_date: "", end_date: "" });
    const busy = ref(false);
    const error = ref("");
    watch(() => props.open, async (open) => {
      var _a, _b;
      await nextTick();
      if (open) {
        Object.assign(form, { name: "", goal: "", start_date: "", end_date: "" });
        error.value = "";
        (_a = dialog.value) == null ? void 0 : _a.showModal();
      } else (_b = dialog.value) == null ? void 0 : _b.close();
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "dialog",
        ref: dialog,
        "aria-labelledby": "sprint-heading",
        class: "admin-scope !m-auto w-[min(560px,calc(100vw-32px))] rounded-xl bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-950/50 dark:bg-slate-900 dark:text-slate-100"
      }, _attrs))}><form class="space-y-5 p-6"><header class="flex items-start justify-between"><div><h2 id="sprint-heading" class="text-lg font-semibold">Nuevo sprint</h2><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(__props.projectName)}</p></div><button type="button"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} aria-label="Cerrar creaci\xF3n de sprint" class="rounded-md p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">`);
      _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
      _push(`</button></header>`);
      if (unref(error)) {
        _push(`<p role="alert" class="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<fieldset${ssrIncludeBooleanAttr(unref(busy) || !__props.canManage) ? " disabled" : ""} class="space-y-4"><label class="block space-y-1.5 text-xs font-semibold">Nombre del sprint<input${ssrRenderAttr("value", unref(form).name)} required minlength="3" maxlength="120"></label><label class="block space-y-1.5 text-xs font-semibold">Objetivo<textarea rows="3" maxlength="500">${ssrInterpolate(unref(form).goal)}</textarea></label><div class="grid grid-cols-2 gap-4"><label class="block space-y-1.5 text-xs font-semibold">Fecha de inicio<input${ssrRenderAttr("value", unref(form).start_date)} type="date"></label><label class="block space-y-1.5 text-xs font-semibold">Fecha de fin<input${ssrRenderAttr("value", unref(form).end_date)} type="date"${ssrRenderAttr("min", unref(form).start_date || void 0)}></label></div><p class="text-xs text-slate-500">Se crear\xE1 como planificado. La gesti\xF3n de sprints se ampliar\xE1 en la fase Scrum.</p></fieldset><footer class="flex justify-end gap-2 border-t border-slate-200 pt-4 dark:border-slate-800"><button type="button"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="rounded-lg px-3 py-2 text-sm text-slate-500">Cancelar</button><button type="submit"${ssrIncludeBooleanAttr(unref(busy) || !__props.canManage) ? " disabled" : ""} class="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">`);
      if (unref(busy)) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`Crear sprint</button></footer></form></dialog>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/SprintDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function useKanbanBoard(projectId) {
  const api = useApi();
  const projectContext = useState("admin-active-project", () => null);
  const project = ref(null);
  const permissions = ref({ manage: false, collaborate: false, role: null });
  const lists = reactive({ backlog: [], todo: [], in_progress: [], review: [], done: [] });
  const users = ref([]);
  const online = ref([]);
  const labels = ref([]);
  const epics = ref([]);
  const sprints = ref([]);
  const activities = ref([]);
  const loading = ref(true);
  const busy = ref(false);
  const dragging = ref(false);
  const suspended = ref(false);
  const connected = ref(false);
  const retryable = ref(true);
  const notice = ref("");
  const canWrite = computed(() => connected.value && permissions.value.collaborate);
  let revision = -1;
  let fetching = false;
  let queued = false;
  let epoch = 0;
  let disposed = false;
  async function refresh(force = false) {
    var _a;
    if (fetching) {
      queued || (queued = force);
      return;
    }
    if (!force && (busy.value || dragging.value || suspended.value)) return;
    fetching = true;
    const started = epoch;
    const id = projectId.value;
    try {
      const { data } = await api.request("kanban/board", { query: { project_id: id } });
      if (disposed || started !== epoch || dragging.value || id !== projectId.value) return;
      if (((_a = data == null ? void 0 : data.project) == null ? void 0 : _a.id) !== id || !Array.isArray(data.cards) || !Array.isArray(data.users) || typeof data.board_version !== "number") {
        throw new Error("KANBAN_INVALID_RESPONSE");
      }
      project.value = data.project;
      permissions.value = data.permissions;
      projectContext.value = { project: data.project, permissions: data.permissions };
      users.value = data.users;
      online.value = data.online_users;
      activities.value = data.activities;
      labels.value = data.labels || [];
      epics.value = data.epics || [];
      sprints.value = data.sprints || [];
      if (force || revision !== data.board_version) {
        for (const column of KANBAN_COLUMNS) lists[column.id] = data.cards.filter((card) => card.status === column.id);
        revision = data.board_version;
      }
      connected.value = true;
      retryable.value = true;
      notice.value = "";
    } catch (error) {
      if (started !== epoch || id !== projectId.value) return;
      connected.value = false;
      permissions.value = { manage: false, collaborate: false, role: null };
      const status = apiStatus(error);
      if ([401, 403, 404, 419].includes(status)) {
        for (const column of KANBAN_COLUMNS) lists[column.id] = [];
        project.value = null;
        activities.value = [];
        online.value = [];
        users.value = [];
        labels.value = [];
        epics.value = [];
        sprints.value = [];
        projectContext.value = null;
      }
      retryable.value = ![403, 404].includes(status);
      notice.value = error instanceof Error && error.message === "KANBAN_INVALID_RESPONSE" ? "La API respondi\xF3 con un formato inesperado. Comprueba la versi\xF3n del backend." : apiErrorMessage(error, "No se pudo contactar con el Kanban. Comprueba la conexi\xF3n y vuelve a intentar.");
    } finally {
      fetching = false;
      if (started === epoch) loading.value = false;
      if (queued) {
        queued = false;
        await refresh(true);
      }
    }
  }
  function applyIssue(issue) {
    if (issue.kanban_project_id !== projectId.value) return;
    for (const column of KANBAN_COLUMNS) lists[column.id] = lists[column.id].filter((card) => card.id !== issue.id);
    if (!issue.parent_id && lists[issue.status]) {
      lists[issue.status].push(issue);
      lists[issue.status].sort((a, b) => a.position - b.position || a.id - b.id);
    }
    revision = -1;
  }
  async function move(issue, status, beforeId = null) {
    if (busy.value || !canWrite.value) return;
    busy.value = true;
    epoch++;
    revision = -1;
    const id = projectId.value;
    let failure = "";
    try {
      await api.request(`kanban/cards/${issue.id}/move`, {
        method: "PUT",
        query: { project_id: id },
        body: { status, before_id: beforeId, expected_version: issue.version }
      });
    } catch (error) {
      failure = apiErrorMessage(error);
    } finally {
      busy.value = false;
      dragging.value = false;
      await refresh(true);
      if (id === projectId.value && failure) notice.value = failure;
    }
  }
  function startDrag() {
    dragging.value = true;
    epoch++;
  }
  function resetProject() {
    epoch++;
    revision = -1;
    loading.value = true;
    connected.value = false;
    retryable.value = true;
    notice.value = "";
    project.value = null;
    projectContext.value = null;
    permissions.value = { manage: false, collaborate: false, role: null };
    for (const column of KANBAN_COLUMNS) lists[column.id] = [];
    users.value = [];
    online.value = [];
    activities.value = [];
    labels.value = [];
    epics.value = [];
    sprints.value = [];
    void refresh(true);
  }
  watch(projectId, resetProject);
  return {
    project,
    permissions,
    lists,
    users,
    online,
    labels,
    epics,
    sprints,
    activities,
    loading,
    busy,
    dragging,
    suspended,
    connected,
    retryable,
    notice,
    canWrite,
    refresh,
    applyIssue,
    move,
    startDrag
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[project]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const selectedProjectId = computed(() => Number(route.params.project));
    const {
      project,
      permissions,
      lists,
      users,
      online,
      labels,
      epics,
      activities,
      loading,
      busy,
      dragging,
      suspended,
      connected,
      retryable,
      notice,
      canWrite,
      refresh,
      applyIssue,
      move,
      startDrag
    } = useKanbanBoard(selectedProjectId);
    const columns = KANBAN_COLUMNS;
    const queryValue = (key) => typeof route.query[key] === "string" ? String(route.query[key]) : "";
    const query = ref(queryValue("q"));
    const assigneeFilter = ref(queryValue("assignee"));
    const priorityFilter = ref(queryValue("priority"));
    const statusFilter = ref(queryValue("status"));
    const typeFilter = ref(queryValue("type"));
    const viewMode = ref(route.query.view === "list" ? "list" : "board");
    const showActivity = ref(false);
    const reduceMotion = ref(false);
    const createStatus = ref("todo");
    const sprintOpen = ref(false);
    const panelDirty = ref(false);
    const createDirty = ref(false);
    const panelSaving = ref(false);
    const createSaving = ref(false);
    const sprintSaving = ref(false);
    const interacting = computed(() => busy.value || panelSaving.value || createSaving.value || sprintSaving.value);
    const filtered = computed(() => Boolean(query.value || assigneeFilter.value || priorityFilter.value || statusFilter.value || typeFilter.value));
    const selectedIssueId = computed(() => {
      const value = queryValue("issue");
      return project.value && /^[1-9]\d*$/.test(value) && Number.isSafeInteger(Number(value)) ? Number(value) : null;
    });
    const createOpen = computed(() => route.query.create === "1" && !!project.value);
    watch(interacting, (value) => {
      suspended.value = value;
    });
    useHead(() => {
      var _a;
      return { title: `${((_a = project.value) == null ? void 0 : _a.name) || "Proyecto"} \xB7 ${viewMode.value === "list" ? "Issues" : "Tablero"} \xB7 SysifosWeb`, meta: [{ name: "robots", content: "noindex, nofollow" }] };
    });
    function matches(issue) {
      const text = query.value.trim().toLocaleLowerCase();
      return (!text || `${issue.issue_key} ${issue.title} ${issue.description || ""}`.toLocaleLowerCase().includes(text)) && (!assigneeFilter.value || issue.assignees.some((user) => user.id === Number(assigneeFilter.value))) && (!priorityFilter.value || issue.priority === priorityFilter.value) && (!statusFilter.value || issue.status === statusFilter.value) && (!typeFilter.value || issue.type === typeFilter.value);
    }
    const visibleIssues = computed(() => Object.values(lists).flat().filter(matches));
    watch([query, assigneeFilter, priorityFilter, statusFilter, typeFilter, viewMode], ([q, assignee, priority, status, type, view]) => {
      const next = { ...route.query };
      for (const [key, value] of Object.entries({ q, assignee, priority, status, type, view: view === "list" ? "list" : "" })) {
        if (value) next[key] = value;
        else delete next[key];
      }
      if (JSON.stringify(next) !== JSON.stringify(route.query)) void router.replace({ query: next });
    });
    watch(() => route.query, () => {
      query.value = queryValue("q");
      assigneeFilter.value = queryValue("assignee");
      priorityFilter.value = queryValue("priority");
      statusFilter.value = queryValue("status");
      typeFilter.value = queryValue("type");
      viewMode.value = route.query.view === "list" ? "list" : "board";
    });
    watch(selectedProjectId, () => {
      sprintOpen.value = false;
      createStatus.value = "todo";
    });
    function canNavigate() {
      if (interacting.value || dragging.value) return false;
      return !(panelDirty.value || createDirty.value) || (void 0).confirm("Hay cambios sin guardar. \xBFQuieres descartarlos y continuar?");
    }
    onBeforeRouteLeave(() => canNavigate());
    onBeforeRouteUpdate((to, from) => {
      if (to.params.project !== from.params.project || to.query.issue !== from.query.issue || to.query.create !== from.query.create) return canNavigate();
    });
    function openIssue(id) {
      if (busy.value || dragging.value || !connected.value) return;
      const next = { ...route.query, issue: String(id) };
      delete next.create;
      void router.push({ query: next });
    }
    function closeIssue() {
      const next = { ...route.query };
      delete next.issue;
      void router.replace({ query: next });
    }
    function openCreate(status = "todo") {
      if (!canWrite.value || interacting.value || dragging.value) return;
      createStatus.value = status;
      void router.push({ query: { ...route.query, create: "1" } });
    }
    function closeCreate() {
      const next = { ...route.query };
      delete next.create;
      void router.replace({ query: next });
    }
    function issueCreated(issue) {
      createDirty.value = false;
      createSaving.value = false;
      applyIssue(issue);
      const next = { ...route.query, issue: String(issue.id) };
      delete next.create;
      void router.replace({ query: next });
      void refresh(true);
    }
    function issueSaved(issue) {
      applyIssue(issue);
      void refresh(true);
    }
    function issueDeleted() {
      panelDirty.value = false;
      panelSaving.value = false;
      closeIssue();
      void refresh(true);
    }
    function dropped(status, issue, beforeId) {
      void move(issue, status, beforeId);
    }
    async function sprintCreated() {
      sprintOpen.value = false;
      sprintSaving.value = false;
      await refresh(true);
      notice.value = "Sprint creado correctamente.";
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AdminKanbanFilterBar = _sfc_main$c;
      const _component_AdminKanbanMemberAvatars = _sfc_main$b;
      const _component_AdminKanbanIssueList = _sfc_main$8;
      const _component_AdminKanbanBoardColumn = _sfc_main$6;
      const _component_AdminKanbanActivityTimeline = _sfc_main$5;
      const _component_AdminKanbanIssuePanel = _sfc_main$3;
      const _component_AdminKanbanIssueCreateDialog = _sfc_main$2;
      const _component_AdminKanbanSprintDialog = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/kanban",
        class: "inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowLeft), { class: "h-3.5 w-3.5" }, null, _parent2, _scopeId));
            _push2(`Todos los proyectos`);
          } else {
            return [
              createVNode(unref(ArrowLeft), { class: "h-3.5 w-3.5" }),
              createTextVNode("Todos los proyectos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<header class="flex flex-wrap items-start justify-between gap-4"><div class="min-w-0 flex-1"><div class="flex items-center gap-3"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400">`);
      _push(ssrRenderComponent(unref(SquareKanban), { class: "h-5 w-5" }, null, _parent));
      _push(`</span><div><p class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">${ssrInterpolate(((_a = unref(project)) == null ? void 0 : _a.project_key) || "Proyecto")} \xB7 ${ssrInterpolate(unref(viewMode) === "list" ? "Issues" : "Tablero")}</p><h2 class="break-words text-xl font-semibold text-slate-900 dark:text-white">${ssrInterpolate(((_b = unref(project)) == null ? void 0 : _b.name) || "Cargando proyecto\u2026")}</h2></div></div><p class="mt-2 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate((_c = unref(project)) == null ? void 0 : _c.description)}</p></div><div class="flex items-center gap-2">`);
      if (unref(canWrite) && unref(permissions).manage) {
        _push(`<button${ssrIncludeBooleanAttr(unref(interacting) || unref(dragging)) ? " disabled" : ""} class="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800">`);
        _push(ssrRenderComponent(unref(Shield), { class: "h-4 w-4" }, null, _parent));
        _push(`Nuevo sprint</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(canWrite)) {
        _push(`<button${ssrIncludeBooleanAttr(unref(loading) || unref(interacting) || unref(dragging)) ? " disabled" : ""} class="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-sky-600 px-4 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent));
        _push(`Crear issue</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><div class="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-3 dark:border-slate-800">`);
      if (unref(project)) {
        _push(`<nav aria-label="Vistas del proyecto" class="flex items-center gap-4 text-sm font-medium">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: unref(route).path, query: { ...unref(route).query, view: void 0 } },
          "aria-current": unref(viewMode) === "board" ? "page" : void 0,
          class: unref(viewMode) === "board" ? "text-sky-600 dark:text-sky-400" : "text-slate-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Tablero`);
            } else {
              return [
                createTextVNode("Tablero")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: unref(route).path, query: { ...unref(route).query, view: "list" } },
          "aria-current": unref(viewMode) === "list" ? "page" : void 0,
          class: unref(viewMode) === "list" ? "text-sky-600 dark:text-sky-400" : "text-slate-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Issues`);
            } else {
              return [
                createTextVNode("Issues")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: `/admin/projects/${unref(selectedProjectId)}/settings`, query: unref(route).query },
          class: "text-slate-500 hover:text-sky-600 dark:text-slate-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Configuraci\xF3n y miembros`);
            } else {
              return [
                createTextVNode("Configuraci\xF3n y miembros")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</nav>`);
      } else {
        _push(`<!---->`);
      }
      if (((_d = unref(project)) == null ? void 0 : _d.archived_at) || unref(project) && !unref(permissions).collaborate) {
        _push(`<span class="ml-auto rounded bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-slate-800">${ssrInterpolate(((_e = unref(project)) == null ? void 0 : _e.archived_at) ? "Archivado \xB7 Solo lectura" : "Solo lectura")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AdminKanbanFilterBar, {
        query: unref(query),
        "onUpdate:query": ($event) => isRef(query) ? query.value = $event : null,
        assignee: unref(assigneeFilter),
        "onUpdate:assignee": ($event) => isRef(assigneeFilter) ? assigneeFilter.value = $event : null,
        priority: unref(priorityFilter),
        "onUpdate:priority": ($event) => isRef(priorityFilter) ? priorityFilter.value = $event : null,
        status: unref(statusFilter),
        "onUpdate:status": ($event) => isRef(statusFilter) ? statusFilter.value = $event : null,
        type: unref(typeFilter),
        "onUpdate:type": ($event) => isRef(typeFilter) ? typeFilter.value = $event : null,
        view: unref(viewMode),
        "onUpdate:view": ($event) => isRef(viewMode) ? viewMode.value = $event : null,
        users: unref(users),
        columns: unref(columns),
        disabled: unref(interacting) || unref(dragging),
        "show-activity": unref(showActivity),
        onRefresh: ($event) => unref(refresh)(true),
        onActivity: ($event) => showActivity.value = !unref(showActivity)
      }, null, _parent));
      _push(`<div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400"><span>${ssrInterpolate(unref(visibleIssues).length)} issues `);
      if (unref(filtered)) {
        _push(`<span>\xB7 Quita los filtros para reordenar.</span>`);
      } else {
        _push(`<span>\xB7 Abre un issue para consultar o editar su detalle.</span>`);
      }
      _push(`</span><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_AdminKanbanMemberAvatars, { members: unref(online) }, null, _parent));
      _push(`<span class="${ssrRenderClass([unref(connected) ? "bg-emerald-500" : "bg-amber-500", "h-2 w-2 rounded-full"])}"></span><span>${ssrInterpolate(unref(interacting) ? "Guardando\u2026" : unref(connected) ? "Sincronizaci\xF3n cada 15 s" : "Sin conexi\xF3n")}</span></div></div>`);
      if (unref(notice)) {
        _push(`<div role="alert" class="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200"><p>${ssrInterpolate(unref(notice))}</p>`);
        if (!unref(connected)) {
          _push(`<div class="mt-2 flex gap-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/admin/kanban",
            class: "font-semibold underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Ver proyectos`);
              } else {
                return [
                  createTextVNode("Ver proyectos")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (unref(retryable)) {
            _push(`<button class="font-semibold underline">Reintentar conexi\xF3n</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div role="status" class="grid grid-cols-1 gap-3 py-3 sm:grid-cols-3"><span class="sr-only">Cargando tablero\u2026</span><!--[-->`);
        ssrRenderList(3, (index) => {
          _push(`<div class="h-64 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(viewMode) === "list") {
        _push(ssrRenderComponent(_component_AdminKanbanIssueList, {
          issues: unref(visibleIssues),
          columns: unref(columns),
          "can-write": unref(canWrite),
          disabled: unref(interacting) || unref(dragging),
          filtered: unref(filtered),
          onOpen: ($event) => openIssue($event.id),
          onMove: unref(move)
        }, null, _parent));
      } else {
        _push(`<div class="scrollbar-thin flex gap-3 overflow-x-auto pb-5" aria-label="Columnas Kanban"><!--[-->`);
        ssrRenderList(unref(columns), (column) => {
          _push(ssrRenderComponent(_component_AdminKanbanBoardColumn, {
            key: `${unref(selectedProjectId)}-${column.id}`,
            cards: unref(lists)[column.id],
            "onUpdate:cards": ($event) => unref(lists)[column.id] = $event,
            column,
            columns: unref(columns),
            "project-id": unref(selectedProjectId),
            "can-write": unref(canWrite),
            disabled: unref(interacting),
            filtered: unref(filtered),
            "reduce-motion": unref(reduceMotion),
            matches,
            onOpen: ($event) => openIssue($event.id),
            onCreate: openCreate,
            onMove: unref(move),
            onStart: unref(startDrag),
            onEnd: ($event) => dragging.value = false,
            onDrop: dropped
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      if (unref(showActivity)) {
        _push(`<section class="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><h3 class="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white">`);
        _push(ssrRenderComponent(unref(Activity), { class: "h-4 w-4 text-slate-400" }, null, _parent));
        _push(`\xDAltimos cambios</h3>`);
        _push(ssrRenderComponent(_component_AdminKanbanActivityTimeline, {
          activities: unref(activities),
          columns: unref(columns),
          users: unref(users),
          labels: unref(labels)
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_AdminKanbanIssuePanel, {
        "issue-id": unref(selectedIssueId),
        "project-id": unref(selectedProjectId),
        "project-name": ((_f = unref(project)) == null ? void 0 : _f.name) || "",
        "can-write": unref(canWrite),
        users: unref(users),
        labels: unref(labels),
        epics: unref(epics),
        columns: unref(columns),
        onClose: closeIssue,
        onSaved: issueSaved,
        onDeleted: issueDeleted,
        onOpen: openIssue,
        onDirty: ($event) => panelDirty.value = $event,
        onSaving: ($event) => panelSaving.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_AdminKanbanIssueCreateDialog, {
        open: unref(createOpen),
        project: unref(project),
        status: unref(createStatus),
        "can-write": unref(canWrite),
        onClose: closeCreate,
        onCreated: issueCreated,
        onDirty: ($event) => createDirty.value = $event,
        onSaving: ($event) => createSaving.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_AdminKanbanSprintDialog, {
        open: unref(sprintOpen),
        "project-id": unref(selectedProjectId),
        "project-name": ((_g = unref(project)) == null ? void 0 : _g.name) || "",
        "can-manage": unref(canWrite) && unref(permissions).manage,
        onClose: ($event) => sprintOpen.value = false,
        onCreated: sprintCreated,
        onSaving: ($event) => sprintSaving.value = $event
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/kanban/[project].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_project_-3EPx-rLQ.mjs.map

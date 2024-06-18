/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/editorjs-drag-drop@1.1.14/dist/bundle.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DragDrop=t():e.DragDrop=t()}(self,(()=>(()=>{"use strict";var e={523:(e,t,r)=>{r.d(t,{A:()=>c});var o=r(601),n=r.n(o),a=r(314),i=r.n(a)()(n());i.push([e.id,'.ce-block--drop-target .ce-block__content:before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: -20px;\n  margin-top: -1px;\n  height: 8px;\n  width: 8px;\n  border: solid #a0a0a0;\n  border-width: 1px 1px 0 0;\n  -webkit-transform-origin: right;\n  transform-origin: right;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.ce-block--drop-target .ce-block__content:after {\n  background: none;\n}\n',""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),n&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=n):u[4]="".concat(n)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=r(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=n(p,o);o.byIndex=c,t.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var a=o(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=o(e,n),l=0;l<a.length;l++){var u=r(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},659:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var o={};return(()=>{r.d(o,{default:()=>g});var e=r(72),t=r.n(e),n=r(825),a=r.n(n),i=r(659),c=r.n(i),s=r(56),l=r.n(s),u=r(540),d=r.n(u),f=r(113),p=r.n(f),v=r(523),y={};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,m(o.key),o)}}function m(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}y.styleTagTransform=p(),y.setAttributes=l(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=d(),t()(v.A,y),v.A&&v.A.locals&&v.A.locals;var g=function(){return e=function e(t,r){var o=t.configuration,n=t.blocks,a=t.toolbar,i=t.save;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.toolbar=a,this.borderStyle=r||"1px dashed #aaa",this.api=n,this.holder="string"==typeof o.holder?document.getElementById(o.holder):o.holder,this.readOnly=o.readOnly,this.startBlock=null,this.endBlock=null,this.save=i,this.setDragListener(),this.setDropListener()},r=[{key:"isReadOnlySupported",get:function(){return!0}}],(t=[{key:"setElementCursor",value:function(e){if(e){var t=document.createRange(),r=window.getSelection();t.setStart(e.childNodes[0],0),t.collapse(!0),r.removeAllRanges(),r.addRange(t),e.focus()}}},{key:"setDragListener",value:function(){var e=this;if(!this.readOnly){var t=this.holder.querySelector(".ce-toolbar__settings-btn");t.setAttribute("draggable","true"),t.addEventListener("dragstart",(function(){e.startBlock=e.api.getCurrentBlockIndex()})),t.addEventListener("drag",(function(){if(e.toolbar.close(),!e.isTheOnlyBlock()){var t=e.holder.querySelectorAll(".ce-block"),r=e.holder.querySelector(".ce-block--drop-target");e.setElementCursor(r),e.setBorderBlocks(t,r)}}))}}},{key:"setBorderBlocks",value:function(e,t){var r=this;Object.values(e).forEach((function(o){var n=o.querySelector(".ce-block__content");o!==t?(n.style.removeProperty("border-top"),n.style.removeProperty("border-bottom")):Object.keys(e).find((function(r){return e[r]===t}))>r.startBlock?n.style.borderBottom=r.borderStyle:n.style.borderTop=r.borderStyle}))}},{key:"setDropListener",value:function(){var e=this;document.addEventListener("drop",(function(t){var r=t.target;if(e.holder.contains(r)&&null!==e.startBlock){var o=e.getDropTarget(r);if(o){var n=o.querySelector(".ce-block__content");n.style.removeProperty("border-top"),n.style.removeProperty("border-bottom"),e.endBlock=e.getTargetPosition(o),e.moveBlocks()}}e.startBlock=null}))}},{key:"getDropTarget",value:function(e){return e.classList.contains("ce-block")?e:e.closest(".ce-block")}},{key:"getTargetPosition",value:function(e){return Array.from(e.parentNode.children).indexOf(e)}},{key:"isTheOnlyBlock",value:function(){return 1===this.api.getBlocksCount()}},{key:"moveBlocks",value:function(){this.isTheOnlyBlock()||this.api.move(this.endBlock,this.startBlock)}}])&&b(e.prototype,t),r&&b(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}()})(),o.default})()));
!function(){"use strict";String.prototype.sprintf=function(){var a,b=this;if(arguments)for(a=0;a<arguments.length;++a)b=b.replace(/%[sd]/,arguments[a]);return b},String.prototype.fromId=function(){return this.replace(/^#/,"")},String.prototype.toId=function(){return"#"+this.toLowerCase().replace(/[^a-z0-9]/g,"-").replace(/^([^a-z])/,"id$1")},String.prototype.htmlEncode=function(){return this.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},String.prototype.paramsToObject=function(a){var b,c,d,e={};for(a=a?a:/&/,b=this.replace(/^\?/,"").split(a),c=0;c<b.length;c++)d=b[c].split("="),e[d[0]]=void 0!==d[1]?decodeURIComponent(d[1]):!0;return e},Number.prototype.toFixedString=function(a,b){if(b=b?b:0,0>=a)return"";var c,d=Math.abs(Math.roundPrecision(this,b)).toFixed(b);if(this>=0)for(c=a-1;c>0;c--)this<Math.pow(10,c)&&(d="0"+d);else{for(c=a-1;c>0;c--)this>-Math.pow(10,c)&&(d="0"+d);d="-"+d}return d},Math.roundPrecision=function(a,b){return Math.round(a*Math.pow(10,b))/Math.pow(10,b)},Math.randomInt=function(a,b){return a=parseInt(a),b=parseInt(b),Math.floor(Math.random()*(b-a+1))+a},Array.prototype.pushOnNotEmpty=function(a){return void 0!==a&&null!==a&&""!==a?this.push(a):this.length},Object.prototype.forEachProperty=function(a){var b;for(b in this)this.hasOwnProperty(b)&&a.call(this,this[b],b,this);return this},"undefined"!=typeof Element&&(Element.prototype.hasClassName=function(a){return this.classList?this.classList.contains(a):this.className.match(new RegExp("(^|\\s)"+a+"(\\s|$)","g"))},Element.prototype.addClassName=function(a){return this.classList?this.classList.add(a):this.className+=(""!==this.className?" ":"")+a,this},Element.prototype.removeClassName=function(a){return this.classList?this.classList.remove(a):this.className=this.className.replace(new RegExp("\\s?"+a),""),this},Element.prototype.toggleClassName=function(a){return this.hasClassName(a)?this.removeClassName(a):this.addClassName(a)},Element.prototype.setHTML=function(a){return this.innerHTML=a,this}),"undefined"!=typeof NodeList&&(NodeList.prototype.forEachNode=function(a,b){var c;for(c=0;c<this.length;c++)a.call(this[c],this[c],c,this);return this}),"undefined"!=typeof Location&&(Location.prototype.getSearchObject=function(){return this.search.paramsToObject()}),"undefined"!=typeof Document&&(Document.prototype.ready=function(a){return document.addEventListener?document.addEventListener("DOMContentLoaded",a):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&a()}),this},Document.prototype.getCookieObject=function(){return this.cookie.paramsToObject(/\;\s?/)})}(),DateSetFromIsoString=function(a){"use strict";var b,c=a.match(/^(\d+)\-(\d+)\-(\d+)(?:.(\d+):(\d+):(\d+)(?:(\+|\-)(\d+)\:(\d+))?)?/);if(c){for(b=0;9>=b;b++)c[b]?7!==b&&(c[b]=parseInt(c[b])):c[b]=0;var d=new Date(Date.UTC(c[1],c[2]-1,c[3],"+"===c[7]?c[4]-c[8]:c[4]+c[8],"+"===c[7]?c[5]-c[9]:c[5]+c[9],c[6]));return d}throw"No valid ISO time string"};
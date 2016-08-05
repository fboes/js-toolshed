!function(){"use strict";String.prototype.sprintf=function(){var a,b=this;if(arguments)for(a=0;a<arguments.length;++a){switch(b.match(/%([sdfF])/)[1]){case"d":arguments[a]=parseInt(arguments[a]);break;case"f":case"F":arguments[a]=parseFloat(arguments[a]);break;case"s":arguments[a]=String(arguments[a])}b=b.replace(/%[sdfF]/,arguments[a])}return b},String.prototype.fromId=function(){return this.replace(/^#/,"")},String.prototype.asciify=function(){return this.toLowerCase().replace(/[äáàâ]/g,"a").replace(/[üúùû]/g,"u").replace(/[öóòô]/g,"o").replace(/[ëéèê]/g,"o").replace(/[^a-z0-9]/g,"-")},String.prototype.toId=function(){return"#"+this.asciify().replace(/^([^a-z])/,"id$1")},String.prototype.htmlEncode=function(){return this.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},String.prototype.paramsToObject=function(a){var b,c,d,e={};for(a=a?a:/&/,b=this.replace(/^\?/,"").split(a),c=0;c<b.length;c++)d=b[c].split("="),e[d[0]]=void 0===d[1]||decodeURIComponent(d[1]);return e},Number.prototype.toFixedString=function(a,b){if(b=b?b:0,a<=0)return"";var c,d=Math.abs(Math.roundPrecision(this,b)).toFixed(b);if(this>=0)for(c=a-1;c>0;c--)this<Math.pow(10,c)&&(d="0"+d);else{for(c=a-1;c>0;c--)this>-Math.pow(10,c)&&(d="0"+d);d="-"+d}return d},Math.roundPrecision=function(a,b){return Math.round(a*Math.pow(10,b))/Math.pow(10,b)},Math.randomInt=function(a,b){return a=parseInt(a),b=parseInt(b),Math.floor(Math.random()*(b-a+1))+a},Array.prototype.pushOnNotEmpty=function(a){return void 0!==a&&null!==a&&""!==a?this.push(a):this.length},Object.prototype.forEachProperty=function(a){var b;for(b in this)this.hasOwnProperty(b)&&a.call(this,this[b],b,this);return this},"undefined"!=typeof Element&&(Element.prototype.hasClassName=function(a){return this.classList?this.classList.contains(a):this.className.match(new RegExp("(^|\\s)"+a+"(\\s|$)","g"))},Element.prototype.addClassName=function(a){return this.classList?this.classList.add(a):this.className+=(""!==this.className?" ":"")+a,this},Element.prototype.removeClassName=function(a){return this.classList?this.classList.remove(a):this.className=this.className.replace(new RegExp("\\s?"+a),""),this},Element.prototype.toggleClassName=function(a,b){return this.classList?this.classList.toggle(a,b):"undefined"!=typeof b?b?this.addClassName(a):this.removeClassName(a):this.hasClassName(a)?this.removeClassName(a):this.addClassName(a),this},Element.prototype.setHTML=function(a){return this.innerHTML=a,this}),"undefined"!=typeof NodeList&&(NodeList.prototype.forEachNode=function(a,b){var c;for(c=0;c<this.length;c++)a.call(this[c],this[c],c,this);return this}),"undefined"!=typeof Location&&(Location.prototype.getSearchObject=function(){return this.search.paramsToObject()}),"undefined"!=typeof EventTarget&&(EventTarget.prototype.addBubbledEventListener=function(a,b,c,d){this.addEventListener?this.addEventListener(a,function(a){a.target.matches(b)&&c.call(a.target,a)},d):this.attachEvent("on"+a,function(a){a.target.matches(b)&&c.call(a.target,a)})}),"undefined"!=typeof Document&&(Document.prototype.ready=function(a){return"loading"!==document.readyState?a():document.addEventListener?document.addEventListener("DOMContentLoaded",a):document.attachEvent("onreadystatechange",function(){"loading"!==document.readyState&&a()}),this},Document.prototype.getCookieObject=function(){return this.cookie.paramsToObject(/\;\s?/)})}(),DateSetFromIsoString=function(a){"use strict";var b,c=a.match(/^(\d+)\-(\d+)\-(\d+)(?:.(\d+):(\d+):(\d+)(?:(\+|\-)(\d+)\:(\d+))?)?/),d=new Date;if(c){for(b=0;b<=9;b++)if(c[b])7!==b&&(c[b]=parseInt(c[b]));else switch(b){case 7:c[b]=d.getTimezoneOffset()>=0?"+":"-";break;case 8:c[b]=Math.abs(d.getTimezoneOffset()/60);break;default:c[b]=0}return d=new Date(Date.UTC(c[1],c[2]-1,c[3],"+"===c[7]?c[4]-c[8]:c[4]+c[8],"+"===c[7]?c[5]-c[9]:c[5]+c[9],c[6]))}throw"No valid ISO time string"};
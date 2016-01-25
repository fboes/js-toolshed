if(Number.prototype.toFixedString=function(a){"use strict";var b,c=Math.abs(this).toString();if(this>=0)for(b=a-1;b>0;b--)this<Math.pow(10,b)&&(c="0"+c);else{for(b=a-1;b>0;b--)this>-Math.pow(10,b)&&(c="0"+c);c="-"+c}return c},Math.roundPrecision=function(a,b){"use strict";return Math.round(a*Math.pow(10,b))/Math.pow(10,b)},Array.prototype.pushOnNotEmpty=function(a){"use strict";return a?this.push(a):this.length},Array.prototype.average=function(){"use strict";var a,b=0;for(a=0;a<this.length;a++)b+=parseFloat(this[a],10);return b/this.length},String.prototype.sprintf=function(){"use strict";var a,b=this;if(arguments)for(a=0;a<arguments.length;++a)b=b.replace(/%s/,arguments[a]);return b},String.prototype.fromId=function(){"use strict";return this.replace(/^#/,"")},String.prototype.trim||(String.prototype.trim=function(){"use strict";return this.replace(/^\s+|\s+$/g,"")}),DateSetFromIsoString=function(a){"use strict";var b=a.match(/^(\d+)\-(\d+)\-(\d+).(\d+):(\d+):(\d+)(\+|\-)(\d+):(\d+)/);if(b){var c=new Date(Date.UTC(b[1],b[2]-1,b[3],"+"===b[7]?b[4]-b[8]:b[4]+b[8],"+"===b[7]?b[5]-b[9]:b[5]-b[9],b[6]));return c}return null},Element.prototype.hasClassName=function(a){"use strict";return this.classList?this.classList.contains(a):this.className.match(new RegExp("(^|\\s)"+a+"(\\s|$)","g"))},Element.prototype.addClassName=function(a){"use strict";return this.classList?this.classList.add(a):this.className+=(""!==this.className?" ":"")+a,this},Element.prototype.removeClassName=function(a){"use strict";return this.classList?this.classList.remove(a):this.className=this.className.replace(new RegExp("\\s?"+a),""),this},Element.prototype.toggleClassName=function(a){"use strict";return this.hasClassName(a)?this.removeClassName(a):this.addClassName(a)},Node.prototype.addEvent=function(a,b){"use strict";return this.addEventListener?this.addEventListener(a,b,!1):this.attachEvent&&(this["e"+a+b]=b,this[a+b]=function(){this["e"+a+b](window.event)},this.attachEvent("on"+a,this[a+b])),this},Node.prototype.removeEvent=function(a,b){"use strict";return this.removeEventListener?this.removeEventListener(a,b,!1):this.detachEvent&&(this.detachEvent("on"+a,this[a+b]),this[a+b]=null,this["e"+a+b]=null),this},"undefined"==typeof console||"undefined"==typeof console.log)var console={log:function(){},warn:function(){},error:function(){}};
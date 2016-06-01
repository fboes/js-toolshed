
/** @class String */

/**
 * Replace `%s` in given string with parameters
 * @param  {scalar}  args One or morge arguments
 * @return {this}         [description]
 */
String.prototype.sprintf = function () {
	'use strict';
	var i, that = this;
	if (arguments) {
		for (i = 0; i < arguments.length; ++i) {
			that = that.replace(/%[sd]/,arguments[i]);
		}
	}
	return that;
};

/**
 * Convert `#string` into `string`
 * @return {this}           [description]
 */
String.prototype.fromId = function () {
	'use strict';
	return this.replace(/^#/,'');
};

/**
 * Convert `#string` into `string`
 * @return {this}           [description]
 */
String.prototype.toId = function () {
	'use strict';
	return '#'+ this.toLowerCase().replace(/[^a-z0-9]/g,'-').replace(/^([^a-z])/,'id$1');
};

/**
 * Convert string to XML / HTML safe string
 * @return {this}           [description]
 */
String.prototype.htmlEncode = function () {
	'use strict';
	return this.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
};

/**
 * Convert String like '?a=b&c=d' into `{a:'b',c:'d'}`. See Window.location.getParameters() for implementation.
 * @return {Object} [description]
 */
String.prototype.paramsToObject = function () {
	'use strict';
	var obj = {}, parts, i, currItem;
	parts = this.replace(/^\?/,'').split(/&/);
	for (i=0; i < parts.length; i++) {
		currItem = parts[i].split('=');
		obj[currItem[0]] = (currItem[1] !== undefined) ? decodeURIComponent(currItem[1]) : true;
	}
	return obj;
};

/** @class Number */

/**
 * Convert a number to a string representation with a fixed with, e.g. by padding it with `0`
 * @param  {integer} digits number of characters
 * @return {string}         [description]
 */
Number.prototype.toFixedString = function (digits) {
	'use strict';
	var thisString = Math.abs(this).toString(),i;
	if (this >= 0) {
		for (i = (digits - 1); i > 0; i--) {
			if (this < Math.pow(10,i)) {
				thisString = '0' + thisString;
			}
		}
	}
	else {
		for (i = (digits - 1); i > 0; i--) {
			if (this > -Math.pow(10,i)) {
				thisString = '0' + thisString;
			}
		}
		thisString = '-' + thisString;
	}
	return thisString;
};

/** @class Math */

/**
 * Round number to a given number of decimals
 * @param  {number}  val       [description]
 * @param  {integer} precision [description]
 * @return {number}            [description]
 */
Math.roundPrecision = function (val, precision) {
	'use strict';
	return Math.round(val * Math.pow(10,precision)) / Math.pow(10,precision);
};

/**
 * Get a random number between min (inclusive) and max (inclusive)
 * @param  {integer} min [description]
 * @param  {integer} max [description]
 * @return {integer}     [description]
 */
Math.randomInt = function (min, max) {
	'use strict';
	min = parseInt(min);
	max = parseInt(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
};

/** @class Array */

/**
 * Push element only to array if element is not empty
 * @param  {mixed}    element [description]
 * @return {this}             [description]
 */
Array.prototype.pushOnNotEmpty = function (element) {
	'use strict';
	return (element) ? this.push(element) : this.length;
};

/** @class Object */

/**
 * Run function on all properties of an object.
 * @param  {Function} fn  function(value,key,object){}, `this` being value
 * @return {this}         [description]
 */
Object.prototype.forEachProperty = function (fn) {
	'use strict';
	var key;
	for (key in this) {
		if (!this.hasOwnProperty(key)) {continue;}
		fn.call(this,this[key],key,this);
	}
	return this;
};

/**
 * Convert given UTC string into Date object
 * @param  {string} dateString like '2015-11-06 13:21:00+02:00'
 * @return {Date}              [description]
 */
DateSetFromIsoString = function (dateString) {
	'use strict';
	var dateValues = dateString.match(/^(\d+)\-(\d+)\-(\d+)(?:.(\d+):(\d+):(\d+)(?:(\+|\-)(\d+)\:(\d+))?)?/), i;
	if (dateValues) {
		for (i = 0; i <= 9; i++) {
			if (!dateValues[i]) {
				dateValues[i] = 0;
			}
			else if (i !== 7) {
				dateValues[i] = parseInt(dateValues[i]);
			}
		}
		var that = new Date(Date.UTC(
			(dateValues[1]),
			(dateValues[2] - 1),
			(dateValues[3]),
			((dateValues[7] === '+') ? dateValues[4] - dateValues[8] : dateValues[4] + dateValues[8]),
			((dateValues[7] === '+') ? dateValues[5] - dateValues[9] : dateValues[5] - dateValues[9]),
			(dateValues[6])
		));
		return that;
	}
	throw "No valid ISO time string";
};

if (typeof Element !== 'undefined') {
	/** @class Element */

	/**
	 * Check if element has a given classname in its class attribute
	 * @param  {string}  className [description]
	 * @return {Boolean}           [description]
	 */
	Element.prototype.hasClassName = function (className) {
		'use strict';
		if (this.classList) {
			return this.classList.contains(className);
		} else {
			return (this.className.match(new RegExp('(^|\\s)'+className+'(\\s|$)','g')));
		}
	};

	/**
	 * Add classname to given element
	 * @param  {string} className [description]
	 * @return {this}             [description]
	 */
	Element.prototype.addClassName = function (className) {
		'use strict';
		if (this.classList) {
			this.classList.add(className);
		} else {
			this.className += ((this.className !== '') ? ' ' : '') + className;
		}
		return this;
	};

	/**
	 * Remove classname from given element
	 * @param  {string} className [description]
	 * @return {this}             [description]
	 */
	Element.prototype.removeClassName = function (className) {
		'use strict';
		if (this.classList) {
			this.classList.remove(className);
		} else {
			this.className = this.className.replace(new RegExp('\\s?' + className), '');
		}
		return this;
	};

	/**
	 * Remove classname from element if present, add classname if not present
	 * @param  {string} className [description]
	 * @return {this}             [description]
	 */
	Element.prototype.toggleClassName = function (className) {
		'use strict';
		if (this.hasClassName(className)) {
			return this.removeClassName(className);
		} else {
			return this.addClassName(className);
		}
	};

	Element.prototype.setHTML = function (html) {
		'use strict';
		this.innerHTML = html;
		return this;
	};
}

if (typeof NodeList !== 'undefined') {
	/** @class NodeList */

	/**
	 * Run function with all Nodes contained in a NodeList.
	 * @param  {Function} fn  function(currentNode,index,NodeList){}, `this` being currentNode
	 * @return {this}         [description]
	 */
	NodeList.prototype.forEachNode = function ( fn, thisArg ) {
		'use strict';
		var i;
		for (i = 0; i < this.length; i++) {
			fn.call(this[i],this[i],i,this);
		}
		return this;
	};
}
if (typeof Location !== 'undefined') {
	/** @class Window.location */

	/**
	 * Get current query string as object, refer to String.paramsToObject()
	 * @return {Object} [description]
	 */
	Location.prototype.getParameters = function () {
		'use strict';
		return this.search.paramsToObject();
	};
}

if (typeof Document !== 'undefined') {
	/** @class Document */

	/**
	 * Execute function after DOM is ready; hattip to http://youmightnotneedjquery.com/
	 * @param  {Function} fn  [description]
	 * @return {this}         [description]
	 */
	Document.prototype.ready = function (fn) {
		'use strict';
		if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', fn);
		}
		else {
			document.attachEvent('onreadystatechange', function() {
				if (document.readyState != 'loading') {
					fn();
				}
			});
		}
		return this;
	};
}

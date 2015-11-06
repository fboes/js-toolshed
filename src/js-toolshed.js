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
 * Push element only to array if element is not empty
 * @param  {mixed}    element [description]
 * @return {this}             [description]
 */
Array.prototype.pushOnNotEmpty = function (element) {
	'use strict';
	return (element) ? this.push(element) : this.length;
};

/**
 * Get average of all numbers in an array
 * @return {this}           [description]
 */
Array.prototype.average = function () {
	'use strict';
	var sum = 0, i;
	for(i = 0; i < this.length; i++ ){
		sum += parseFloat( this[i], 10 );
	}
	return sum/this.length;
};

String.prototype.sprintf = function (args) {
	'use strict';
	var i;
	if (args && typeof args === 'object') {
		for (i = 0; i < args.length; ++i) {
			this.sprintf(args[i]);
		}
		return this;
	}
	else {
		return this.replace(/%s/,args);
	}
};

/**
 * Convert '#string' into 'string'
 * @return {this}           [description]
 */
String.prototype.fromId = function () {
	'use strict';
	return this.replace(/^#/,'');
};

if (!String.prototype.trim) {
	/**
	 * Remove whitespaces around string
	 * @return {this}           [description]
	 */
	String.prototype.trim = function () {
		'use strict';
		return this.replace(/^\s+|\s+$/g, '');
	};
}

/**
 * Convert given string into Date object
 * @param  {string} dateString like '2015-11-06 13:21:00'
 * @return {Date}              [description]
 */
DateSetFromIsoString = function (dateString) {
	'use strict';
	var dateValues = dateString.match(/^(\d+)\-(\d+)\-(\d+).(\d+):(\d+):(\d+)(\+|\-)(\d+):(\d+)/);
	if (dateValues) {
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
	return null;
};

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

/**
 * Add an event
 * @param {string}   type [description]
 * @param {Function} fn   [description]
 * @return {this}         [description]
 */
Node.prototype.addEvent = function ( type, fn ) {
	'use strict';
	if (this.addEventListener) {
		this.addEventListener( type, fn, false );
	} else if (this.attachEvent) {
		this["e"+type+fn] = fn;
		this[type+fn] = function() { this["e"+type+fn]( window.event ); };
		this.attachEvent( "on"+type, this[type+fn] );
	}
	return this;
};

/**
 * Remove an event
 * @param {string}   type [description]
 * @param {Function} fn   [description]
 * @return {this}         [description]
 */
Node.prototype.removeEvent = function ( type, fn ) {
	'use strict';
	if (this.removeEventListener) {
		this.removeEventListener( type, fn, false );
	} else if (this.detachEvent) {
		this.detachEvent( "on"+type, this[type+fn] );
		this[type+fn] = null;
		this["e"+type+fn] = null;
	}
	return this;
};

if (typeof console == "undefined" || typeof console.log == "undefined") {
	var console = {
		log: function() {},
		warn: function() {},
		error: function() {}
	};
}

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

if (!Element.prototype.matches) {
	Element.prototype.matches = function (selector) {
		'use strict';
		return (this.matchesSelector || this.msMatchesSelector || this.mozMatchesSelector || this.webkitMatchesSelector || this.oMatchesSelector).call(this, selector);
	};
}

if (!Element.prototype.closest) {
	/**
	 * Find closest match to given selector, starting at current element and traversing up
	 * @param  {bool}   includeSelf include yourself. Defaulty to false
	 * @return {this}   [description]
	 */
	Element.prototype.closest = function (selector) {
		'use strict';
		var el = this;
		if (!includeSelf) {
			el = el.parentNode;
		}
		while (!el.matches(selector)) {
			el = el.parentNode;
			if (el.tagName === undefined) {
				return null;
			}
		}
		return el;
	};
}

if (typeof console == "undefined" || typeof console.log == "undefined") {
	var console = {
		log: function() {},
		warn: function() {},
		error: function() {}
	};
}

if (!EventTarget.prototype.addEventListener) {
	/**
	 * Add an event
	 * @param {string}   type [description]
	 * @param {Function} fn   [description]
	 * @return {this}         [description]
	 */
	EventTarget.prototype.addEventListener = function ( type, fn ) {
		'use strict';
		if (this.attachEvent) {
			this["e"+type+fn] = fn;
			this[type+fn] = function() { this["e"+type+fn]( window.event ); };
			this.attachEvent( "on"+type, this[type+fn] );
		}
		return this;
	};
}
if (!EventTarget.prototype.removeEventListener) {
	/**
	 * Remove an event
	 * @param {string}   type [description]
	 * @param {Function} fn   [description]
	 * @return {this}         [description]
	 */
	EventTarget.prototype.removeEventListener = function ( type, fn ) {
		'use strict';
		if (this.detachEvent) {
			this.detachEvent( "on"+type, this[type+fn] );
			this[type+fn] = null;
			this["e"+type+fn] = null;
		}
		return this;
	};
}

(function () {
	'use strict';
	if (!String.prototype.trim) {
		/**
		 * Remove whitespaces around string. Available in Chrome, FF 3.5, IE 9, Safari 5.
		 * @return {String}         [description]
		 */
		String.prototype.trim = function () {
			return this.replace(/^\s+|\s+$/g, '');
		};
	}

	/** @class Element */
	if (!Element.prototype.matches) {
		/**
		 * The Element.matches() method returns true if the element would be selected by the specified selector string; otherwise, returns false. Available in Chrome 34, FF 34, Safari 7.
		 * @param  {string} selector [description]
		 * @return {bool}            [description]
		 */
		Element.prototype.matches = function (selector) {
			return (this.matchesSelector || this.msMatchesSelector || this.mozMatchesSelector || this.webkitMatchesSelector || this.oMatchesSelector).call(this, selector);
		};
	}

	if (!Element.prototype.closest) {
		/**
		 * Find closest match to given selector, starting at current element and traversing up. Available in Chrome 41, FF 35, Safari 9.
		 * @return {Element}   [description]
		 */
		Element.prototype.closest = function (selector) {
			var el = this;
			while (!el.matches(selector)) {
				el = el.parentNode;
				if (el.tagName === undefined) {
					return null;
				}
			}
			return el;
		};
	}

	/** @class EventTarget */
	if (!EventTarget.prototype.addEventListener) {
		/**
		 * Add an event. Available in Chrome 1, Firefox 1, IE 9, Safari 1.
		 * @param {string}   type [description]
		 * @param {Function} fn   [description]
		 * @return {EventTarget}         [description]
		 */
		EventTarget.prototype.addEventListener = function ( type, fn ) {
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
		 * Remove an event. Available in Chrome 1, Firefox 1, IE 9, Safari 1.
		 * @param {string}   type [description]
		 * @param {Function} fn   [description]
		 * @return {EventTarget}         [description]
		 */
		EventTarget.prototype.removeEventListener = function ( type, fn ) {
			if (this.detachEvent) {
				this.detachEvent( "on"+type, this[type+fn] );
				this[type+fn] = null;
				this["e"+type+fn] = null;
			}
			return this;
		};
	}
}());

if (typeof console == "undefined" || typeof console.log == "undefined") {
	// Available in Chrome, Firefox 4, Internet Explorer 8, Safari.
	var console = {
		assert: function() {},
		log: function() {},
		warn: function() {},
		error: function() {},
		group: function() {},
		groupCollapsed: function() {},
		groupEnd: function() {}
	};
}

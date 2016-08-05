(function () {
	'use strict';
	/** @class String */

	/**
	 * Replace `%s`, `%d`, `%f` in given string with parameters.
	 * @param  {scalar}  args One or morge arguments
	 * @return {String}         [description]
	 */
	String.prototype.sprintf = function () {
		var i, that = this;
		if (arguments) {
			for (i = 0; i < arguments.length; ++i) {
				switch (that.match(/%([sdfF])/)[1]) {
					case 'd':
						arguments[i] = parseInt(arguments[i]);
						break;
					case 'f':
					case 'F':
						arguments[i] = parseFloat(arguments[i]);
						break;
					case 's':
						arguments[i] = String(arguments[i]);
						break;
				}
				that = that.replace(/%[sdfF]/,arguments[i]);
			}
		}
		return that;
	};

	/**
	 * Convert `#string` into `string`.
	 * @return {String}           [description]
	 */
	String.prototype.fromId = function () {
		return this.replace(/^#/,'');
	};

	/**
	 * Remove any special characters from string and convert into lowercase.
	 * @return {String} [description]
	 */
	String.prototype.asciify = function () {
		return this.toLowerCase()
			.replace(/[äáàâ]/g,'a')
			.replace(/[üúùû]/g,'u')
			.replace(/[öóòô]/g,'o')
			.replace(/[ëéèê]/g,'o')
			.replace(/[^a-z0-9]/g,'-')
		;
	};

	/**
	 * Convert `String` into `#string`.
	 * @return {String}           [description]
	 */
	String.prototype.toId = function () {
		return '#'+ this.asciify().replace(/^([^a-z])/,'id$1')
		;
	};

	/**
	 * Convert string to XML / HTML safe string.
	 * @return {String}           [description]
	 */
	String.prototype.htmlEncode = function () {
		return this.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
	};

	/**
	 * Convert String like '?a=b&c=d' into `{a:'b',c:'d'}`. See Window.location.getParameters() for implementation.
	 * @param  {RegExp}  splitter term to split key/value-pairs
	 * @return {Object}  E.g. `{a:'b',c:'d'}`
	 */
	String.prototype.paramsToObject = function (splitter) {
		var obj = {}, parts, i, currItem;
		splitter = splitter ? splitter : /&/;
		parts = this.replace(/^\?/,'').split(splitter);
		for (i=0; i < parts.length; i++) {
			currItem = parts[i].split('=');
			obj[currItem[0]] = (currItem[1] !== undefined) ? decodeURIComponent(currItem[1]) : true;
		}
		return obj;
	};

	/** @class Number */

	/**
	 * Convert a number to a string representation with a fixed width, e.g. by padding it with `0`. See also `.toFixed()` for padding the decimals of a given number.
	 * @param  {integer} digits number of characters
	 * @return {String}         [description]
	 */
	Number.prototype.toFixedString = function (digits, decimals) {
		decimals = decimals ? decimals : 0;
		if (digits <= 0) {
			return '';
		}
		var thisString = Math.abs(Math.roundPrecision(this, decimals)).toFixed(decimals),i;
		if (this >= 0) {
			for (i = (digits - 1); i > 0; i--) {
				if (this < Math.pow(10,i)) {
					thisString = '0' + thisString;
				}
			}
		} else {
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
	 * Round number to a given number of decimals.
	 * @param  {Number}  val       [description]
	 * @param  {integer} precision [description]
	 * @return {Number}            [description]
	 */
	Math.roundPrecision = function (val, precision) {
		return Math.round(val * Math.pow(10,precision)) / Math.pow(10,precision);
	};

	/**
	 * Get a random number between min (inclusive) and max (inclusive).
	 * @param  {integer} min [description]
	 * @param  {integer} max [description]
	 * @return {integer}     [description]
	 */
	Math.randomInt = function (min, max) {
		min = parseInt(min);
		max = parseInt(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	};

	/** @class Array */

	/**
	 * Push element only to array if element is not empty.
	 * @param  {mixed}    element [description]
	 * @return {Array}            [description]
	 */
	Array.prototype.pushOnNotEmpty = function (element) {
		return (element !== undefined && element !== null && element !== '') ? this.push(element) : this.length;
	};

	/** @class Object */

	/**
	 * Run function on all properties of an object.
	 * @param  {Function} fn  function(value,key,object){}, `this` being the current object
	 * @return {Object}       [description]
	 */
	Object.prototype.forEachProperty = function (fn) {
		var key;
		for (key in this) {
			if (!this.hasOwnProperty(key)) {continue;}
			fn.call(this,this[key],key,this);
		}
		return this;
	};



	if (typeof Element !== 'undefined') {
		/** @class Element */

		/**
		 * Check if element has a given classname in its class attribute
		 * @param  {String}  className [description]
		 * @return {Boolean}           [description]
		 */
		Element.prototype.hasClassName = function (className) {
			if (this.classList) {
				return this.classList.contains(className);
			} else {
				return (this.className.match(new RegExp('(^|\\s)'+className+'(\\s|$)','g')));
			}
		};

		/**
		 * Add classname to given element
		 * @param  {String} className [description]
		 * @return {Element}          [description]
		 */
		Element.prototype.addClassName = function (className) {
			if (this.classList) {
				this.classList.add(className);
			} else {
				this.className += ((this.className !== '') ? ' ' : '') + className;
			}
			return this;
		};

		/**
		 * Remove classname from given element
		 * @param  {String} className [description]
		 * @return {Element}          [description]
		 */
		Element.prototype.removeClassName = function (className) {
			if (this.classList) {
				this.classList.remove(className);
			} else {
				this.className = this.className.replace(new RegExp('\\s?' + className), '');
			}
			return this;
		};

		/**
		 * Remove classname from element if present, add classname if not present. If second parameter is set to `true`, the class will be always added, if it is set to `false` it will be always removed.
		 * @param  {String}  className [description]
		 * @param  {Boolean} force     Optional. If this is present, it will set the class if `true`, else remove that class.
		 * @return {Element}           [description]
		 */
		Element.prototype.toggleClassName = function (className, force) {
			if (this.classList) {
				this.classList.toggle(className, force);
			} else if (typeof force !== 'undefined') {
				if (force) {
					this.addClassName(className);
				} else {
					this.removeClassName(className);
				}
			} else if (this.hasClassName(className)) {
				this.removeClassName(className);
			} else {
				this.addClassName(className);
			}
			return this;
		};

		Element.prototype.setHTML = function (html) {
			this.innerHTML = html;
			return this;
		};
	}

	if (typeof NodeList !== 'undefined') {
		/** @class NodeList */

		/**
		 * Run function with all Nodes contained in a NodeList.
		 * @param  {Function} fn  function(currentNode,index,NodeList){}, `this` being currentNode
		 * @return {NodeList}     [description]
		 */
		NodeList.prototype.forEachNode = function ( fn, thisArg ) {
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
		 * Get current query string as object. Refer to String.paramsToObject().
		 * @return {Object} [description]
		 */
		Location.prototype.getSearchObject = function () {
			return this.search.paramsToObject();
		};
	}

	if (typeof EventTarget !== 'undefined') {
		/** @class EventTarget */

		/**
		 * Add event listener to an element, but only react to special sub elements of this element. Useful for having one single event listener for multiple elements.
		 * @param {String}   type     Event type to listen for. E.g. `click`.
		 * @param {String}   selector Selector like in `.matches()`. E.g. `.button`.
		 * @param {Boolean}  useCapture  Like in `addEventListener()`
		 * @param {Function} fn       function(e), where `this` is the filtered element, and `e` the event object
		 */
		EventTarget.prototype.addBubbledEventListener = function ( type, selector, fn, useCapture ) {
			if (this.addEventListener) {
				this.addEventListener( type, function(e) {
					if (e.target.matches(selector)) {
						fn.call(e.target,e);
					}
				}, useCapture);
			} else { // IE8
				this.attachEvent('on' + type, function(e){
					if (e.target.matches(selector)) {
						fn.call(e.target,e);
					}
				});
			}
		};
	}

	if (typeof Document !== 'undefined') {
		/** @class Document */

		/**
		 * Execute function after DOM is ready; hattip to http://youmightnotneedjquery.com/
		 * @param  {Function} fn  [description]
		 * @return {Document}     [description]
		 */
		Document.prototype.ready = function (fn) {
			if (document.readyState !== 'loading') {
				fn();
			} else if (document.addEventListener) {
				document.addEventListener('DOMContentLoaded', fn);
			} else { // IE8
				document.attachEvent('onreadystatechange', function() {
					if (document.readyState !== 'loading') {
						fn();
					}
				});
			}
			return this;
		};

		/**
		 * Get `document.cookie` as an object with `key=value`. Refer to String.paramsToObject().
		 * @return {Object} [description]
		 */
		Document.prototype.getCookieObject = function () {
			return this.cookie.paramsToObject(/\;\s?/);
		};
	}
}());

/**
 * Convert given UTC string into Date object
 * @param  {String} dateString like '2015-11-06 13:21:00+02:00'
 * @return {Date}              [description]
 */
DateSetFromIsoString = function (dateString) {
	'use strict';
	var dateValues = dateString.match(/^(\d+)\-(\d+)\-(\d+)(?:.(\d+):(\d+):(\d+)(?:(\+|\-)(\d+)\:(\d+))?)?/), i, that = new Date();
	if (dateValues) {
		for (i = 0; i <= 9; i++) {
			if (!dateValues[i]) {
				switch (i) {
					case 7:
						dateValues[i] = (that.getTimezoneOffset() >= 0) ? '+' : '-';
						break;
					case 8:
						dateValues[i] = Math.abs(that.getTimezoneOffset()/60);
						break;
					default:
						dateValues[i] = 0;
						break;
				}
			} else if (i !== 7) {
				dateValues[i] = parseInt(dateValues[i]);
			}
		}
		that = new Date(Date.UTC(
			(dateValues[1]),
			(dateValues[2] - 1),
			(dateValues[3]),
			((dateValues[7] === '+') ? dateValues[4] - dateValues[8] : dateValues[4] + dateValues[8]),
			((dateValues[7] === '+') ? dateValues[5] - dateValues[9] : dateValues[5] + dateValues[9]),
			(dateValues[6])
		));
		return that;
	}
	throw "No valid ISO time string";
};

Number.prototype.toFixedString = function (digits) {
	var thisString = Math.abs(this).toString();
	if (this >= 0) {
		for (var i = (digits - 1); i > 0; i--) {
			if (this < Math.pow(10,i)) {
				thisString = '0' + thisString;
			}
		}
	}
	else {
		for (var i = (digits - 1); i > 0; i--) {
			if (this > -Math.pow(10,i)) {
				thisString = '0' + thisString;
			}
		}
		thisString = '-' + thisString;
	}
	return thisString;
};

Math.roundPrecision = function (val, precision) {
	return Math.round(val * Math.pow(10,precision)) / Math.pow(10,precision);
};

Array.prototype.pushOnNotEmpty = function (element) {
	return (element)
		? this.push(element)
		: this.length
	;
};

String.prototype.sprintf = function (args) {
	if (args && typeof args === 'object') {
		for (var i = 0; i < args.length; ++i) {
			this.sprintf(args[i]);
		}
		return this;
	}
	else {
		return this.replace(/%s/,args);
	}
}

String.prototype.fromId = function () {
	return this.replace(/^#/,'');
}

if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^\s+|\s+$/g, '');
	}
}

DateSetFromIsoString = function (dateString) {
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
}

Node.prototype.hasClassName = function (className) {
	if (this.classList) {
		return this.classList.contains(className);
	} else {
		return (this.className.match(new RegExp('(^|\\s)'+className+'(\\s|$)','g')));
	}
}

Node.prototype.addClassName = function (className) {
	if (this.classList) {
		this.classList.add(className);
	} else {
		this.className += ((this.className != '') ? ' ' : '') + className;
	}
	return this;
}

Node.prototype.removeClassName = function (className) {
	if (this.classList) {
		this.classList.remove(className);
	} else {
		this.className = this.className.replace(new RegExp('\\s?' + className), '');
	}
	return this;
}

Node.prototype.toggleClassName = function (className) {
	if (this.hasClassName(className)) {
		return this.removeClassName(className);
	} else {
		return this.addClassName(className);
	}
}

Node.prototype.addEvent = function ( type, fn ) {
	if (this.addEventListener) {
		this.addEventListener( type, fn, false );
	} else if (this.attachEvent) {
		this["e"+type+fn] = fn;
		this[type+fn] = function() { this["e"+type+fn]( window.event ); }
		this.attachEvent( "on"+type, this[type+fn] );
	}
	return this;
}

Node.prototype.removeEvent = function ( type, fn ) {
	if (this.removeEventListener) {
		this.removeEventListener( type, fn, false );
	} else if (this.detachEvent) {
		this.detachEvent( "on"+type, this[type+fn] );
		this[type+fn] = null;
		this["e"+type+fn] = null;
	}
	return this;
}

if (typeof console == "undefined" || typeof console.log == "undefined") {
	var console = {
		log: function() {}
	};
}

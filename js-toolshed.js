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

DateSetFromIsoString = function (dateString) {
	var that = new Date();
	var dateValues = dateString.match(/^(\d+)\-(\d+)\-(\d+).(\d+):(\d+):(\d+)(\+|\-)(\d+):(\d+)/);
	if (dateValues) {
		that.setUTCFullYear(dateValues[1]);
		that.setUTCMonth(dateValues[2] - 1);
		that.setUTCDate( dateValues[3]);
		that.setUTCHours((dateValues[7] === '+') ? dateValues[4] - dateValues[8] : dateValues[4] + dateValues[8]);
		that.setUTCMinutes((dateValues[7] === '+') ? dateValues[5] - dateValues[9] : dateValues[5] - dateValues[9]);
		that.setUTCSeconds(dateValues[6]);
	}
	return that;
}

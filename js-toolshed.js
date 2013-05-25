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

Array.prototype.pushOnNotEmpty = function (element) {
	if (element) {
		this.push(element)
	}
};

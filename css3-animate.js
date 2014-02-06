Node.prototype.setTransition = function (duration, type) {
	this.style.transition = 'all';
	this.style.transition += ' ' + (duration / 1000).toString() + 's';
	this.style.transition += ' ' + type;
	return this;
}
Node.prototype.animateProp = function (prop, val1, val2) {
	if (!this.style.transition) {
		this.setTransition(500, 'ease');
	}
	this.style[prop] = (this.style[prop] == val1) ? val2 : val1;
	return this;
}
Node.prototype.animateBackground = function (val1, val2) {
	return this.animateProp('background', val1, val2);
}
Node.prototype.animateHeight = function (val1, val2) {
	return this.animateProp('minHeight', val1, val2);
}
Node.prototype.animateWidth = function (val1, val2) {
	return this.animateProp('maxWidth', val1, val2);
}
Node.prototype.animateOpacity = function (val1, val2) {
	return this.animateProp('opacity', val1, val2);
}
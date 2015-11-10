(function ($) {
	'use strict';
	$.fn.html5form = function ( fn ) {
		return this.each(function() {
			var main = {
				el : null,
				strings: {},
				numbers: {},
				init : function (el) {
					var that = this,
						inputs = el.find(':input')
					;
					this.el = el;
					inputs.each(function() {
						var el = $(this),
							val = that.getValue(el),
							type = el.attr('type') || 'select'
						;
						if (el.attr('required')) {
							el.closest('.form-field').addClass('required');
						}
					});
					if (fn !== undefined) {
						fn.call(this);
					}
					el
						.on('click.html5form', "[type='reset']", function (event) {
							event.preventDefault();
							el.trigger('reset');
							that.validate($(this));
							inputs.each(function() {
								that.validate($(this));
							});
							if (fn !== undefined) {
								fn.call(that);
							}
						})
						.on('change.html5form keyup.html5form blur.html5form input.html5form', ':input', function (event) {
							event.stopPropagation();
							that.validate($(this));
							if (fn !== undefined) {
								fn.call(that);
							}
						})
						.on('submit.html5form', function (event) {
							var error = false;
							inputs.each(function() {
								error &= that.validate($(this));
							});
							if (error) {
								event.preventDefault();
								if (console !== undefined) {
									console.error('Prevent form from submitting due to errors');
								}
							}
							if (fn !== undefined) {
								fn.call(that);
							}
						})
					;
				},
				validate : function ( el ) {
					var val = this.getValue(el),
						error = [],
						field = el.closest('.form-field'),
						output = el.data('output'),
						validity = el.prop('validity')
					;
					if (output) {
						this.setValueById(output,val);
					}
					if (el.attr('novalidate')) {
						return true;
					}
					// uses HTML5
					if (validity !== undefined) {
						if(!validity.valid) {
							error.push('validity');
						}
					}
					// does not use HTML5
					else {
						if (!val) {
							if (el.attr('required')) {
								error.push('valueMissing');
							}
						}
						else {
							if (el.attr('type') === 'number' || el.attr('type') === 'range') {
								val = Number(val);
								if (el.attr('min') && val < Number(el.attr('min'))) {
									error.push('rangeUnderflow');
								}
								if (el.attr('max') && val > Number(el.attr('max'))) {
									error.push('rangeOverflow');
								}
								if (el.attr('step') &&  (val * 1000) % (Number(el.attr('step')) * 1000)) {
									error.push('stepMismatch');
								}
							}
							else {
								if (el.attr('maxlength') && val.length > parseInt(el.attr('maxlength'))) {
									error.push('tooLong');
								}
								if (el.attr('pattern') && !val.match(new RegExp('^'+el.attr('pattern')+'$'))) {
									error.push('patternMismatch');
								}
							}
						}
					}

					if (el.data('pattern') && !val.match(new RegExp('^'+el.data('pattern')+'$'))) {
						error.push('patternMismatch');
					}

					if (error.length > 0) {
						if (console !== undefined) {
							console.error('Validation error',el, error);
						}
						field.addClass('error');
						field.data('error',error.join(' '));
						return false;
					}
					else {
						field.removeClass('error');
						field.data('error','');
					}
					return true;
				},
				getValue : function (el) {
					var val = el.val(),
						type = el.attr('type') || 'select'
					;
					if (type === 'checkbox' || type === 'radio') {
						val = el.closest('.form-field').find(':checked').val();
					}
					this._setValue(el.attr('name'),val, type);
					return val;
				},
				setValue : function (el, value) {
					el.val(value);
					this._setValue(el.attr('name'),value, el.attr('type'));
					return el;
				},
				_setValue : function (name, value, type) {
					var num;
					if (type === 'date') {
						var date = value.split(/[^\d]/);
						num = Math.round(new Date(date[0],date[1],date[2]).getTime() / 1000);
					}
					else if (type === 'time') {
						var time = value.split(/[^\d]/);
						num = (Number(time[0]) * 60) + Number(time[1]);
					}
					else {
						num = Number(value);
					}
					this.strings[name] = value;
					if (!isNaN(num)) {
						this.numbers[name] = num;
					}
					return this;
				},
				setValueById : function (id, value) {
					var elOut = $('#'+id);
					if (elOut.length) {
						if (elOut.is(':input')) {
							this.setValue(elOut, value);
						}
						else {
							elOut.html(value);
						}
					}
					return elOut;
				},
				hasError : function () {
					return (this.el.find('.form-field.error').length > 0);
				}
			};

			main.init($(this));
		});
	};
	$.fn.toggleRequired = function ( cond ) {
		return this.each(function() {
			if (cond === undefined) {
				cond = $(this).attr('required');
			}
			if (cond) {
				$(this).removeAttr('required');
				$(this).closest('.form-field').removeClass('required');
			}
			else {
				$(this).attr('required','required');
				$(this).closest('.form-field').addClass('required');
			}
		});
	};
}( jQuery ));

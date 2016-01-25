(function ($) {
	'use strict';
	/**
	 * Invoke HTML5Form auto updater
	 * @param  {Function} fn               This function will be exectuted after change of form elements. In this function `this` will be the html5form.main object. You can access `this.strings` and `this.numbers` for string and numerical represntation of form.
	 * @param  {string}   decimalSeparator Optional: This will be used to convert string represnations of numbers
	 * @return {this}                      Chainable element
	 */
	$.fn.html5form = function ( fn, decimalSeparator, thousandSeparator ) {
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
					if (type === 'radio') {
						val = el.closest('.form-field').find(':checked').val();
					}
					else if (type === 'checkbox') {
						val = [];
						el.closest('.form-field').find(':checked').each(function() {
							val.push($(this).val());
						});
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
					switch (type) {
						case 'date':
						case 'month':
						case 'datetime-local':
							var date = value.split(/[^\d]/);
							if (date[2] === undefined) { date[2] = 0; }
							if (date[3] === undefined) { date[3] = 0; }
							if (date[4] === undefined) { date[4] = 0; }
							num = Math.round(new Date(date[0],date[1],date[2],date[3],date[4]).getTime() / 1000);
							break;
						case 'time':
							var time = value.split(/[^\d]/);
							num = (Number(time[0]) * 60) + Number(time[1]);
							break;
						case 'checkbox':
							num = value.reduce(function(a, b) { return Number(a) + Number(b); }, 0);
							break;
						default:
							num = Number(value);
							break;
					}
					this.strings[name] = value;
					if (!isNaN(num)) {
						this.numbers[name] = num;
					}
					return this;
				},
				/**
				 * Set value of form field or HTML tag. This will convert decimal separator if it is defined
				 * @param {string} id    [description]
				 * @param {mixed}  value [description]
				 */
				setValueById : function (id, value) {
					var elOut = $('#'+id);
					if (elOut.length) {
						if (elOut.is(':input')) {
							this.setValue(elOut, value);
						}
						else {
							if (decimalSeparator !== undefined) {
								value = String(value).replace(/\./,decimalSeparator);
							}
							if (thousandSeparator !== undefined) {
								value = String(value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1"+thousandSeparator);
							}
							elOut.html(value);
						}
					}
					return elOut;
				},
				/**
				 * Check if form has an error
				 * @return {Boolean} [description]
				 */
				hasError : function () {
					return (this.el.find('.form-field.error').length > 0);
				}
			};

			main.init($(this));
		});
	};
	/**
	 * Toggle `required` attribute and corresponding classes for given form field
	 * @param  {boolean} cond [description]
	 * @return {this}        [description]
	 */
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

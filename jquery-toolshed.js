(function ($) {
	// invoke on <input type="range" />
	$.fn.activateRangeOutput = function () {
		return this.each(function() {
			var rangeInput  = $(this);
			var rangeOutput = $('output[for="'+rangeInput.attr('id')+'"]').first();
			if (rangeOutput.length) {
				rangeOutput.html(
					rangeInput.val()
				);
				rangeInput.on('change',function(event) {
					$('output[for="'+rangeInput.attr('id')+'"]').first().html(
						$(this).val()
					);
				});
			}
			var rangeOutput = $('input[for="'+rangeInput.attr('id')+'"]').first();
			if (rangeOutput.length) {
				rangeOutput.val(
					rangeInput.val()
				);
				rangeInput.on('change',function(event) {
					$('input[for="'+rangeInput.attr('id')+'"]').first().val(
						$(this).val()
					);
				});
				rangeOutput.on('change',function(event) {
					$('#'+rangeOutput.attr('for')).val(
						$(this).val()
					);
				});
				rangeOutput.on('keyup',function(event) {
					$('#'+rangeOutput.attr('for')).val(
						$(this).val()
					);
				});
			}
		})
	};

	// invoke on <input|textarea maxlength>
	$.fn.activateMaxlengthOutput = function () {
		function setMaxlengthOutput (input) {
			var maxlength = parseInt(input.attr('maxlength'));
			var curLength = input.val().length;
			var maxlengthOutput = $('output[for="'+input.attr('id')+'"]').first();
			maxlengthOutput.html(curLength + ' / ' + maxlength);
		}

		return this.each(function() {
			var input = $(this);
			var maxlength = parseInt(input.attr('maxlength'));

			if (maxlength) {
				var maxlengthOutput = $('output[for="'+input.attr('id')+'"]').first();
				if (maxlengthOutput.length) {
					setMaxlengthOutput(input);
					input.on('keyup', function() {
						setMaxlengthOutput($(this));
					});
				}
			}

		})
	}

	// invoke on <textarea>
	$.fn.activateAutosizeTextarea = function () {
		function setRows (textarea) {
			var paragraphs = textarea.val().split(/[\n\r]/g);
			var rows = 0;
			var cols = parseInt(textarea.attr('cols'));
			for (var i = 0; i < paragraphs.length; ++i) {
				rows += Math.max (Math.ceil(paragraphs[i].length / cols),1);
			}

			textarea.attr('rows', Math.max(rows,2)+1);
		}

		return this.each(function() {
			var textarea = $(this);
			if (!textarea.attr('cols')) {
				textarea.attr('cols', Math.ceil(textarea.width() / 16));
			}
			setRows(textarea);

			textarea.on('keyup', function() {
				setRows($(this));
			});
		})
	};

})(jQuery);



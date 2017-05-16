$(document).ready(function() {
	// Hide placeholder
	$(function () {
		$('input,textarea').focus(function () {
			$(this).data('placeholder', $(this).attr('placeholder'))
				.attr('placeholder', '');
		}).blur(function () {
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	});

	// Disable scroll mobile
	$('body').on('touchmove', function (e) {
		e.preventDefault();
	});

	// Check if email is valid
	$('#formEmail').submit(function() {
		if ($.trim($('#email').val()) === '') {
			console.log('NOP!');
			$(this).addClass('emptyField');
			$('.emptyFieldMessage').show();
			return false;
		} else {
			console.log('YES!');
			return true;
		}
	});
});
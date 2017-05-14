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

	$('body').on('touchmove', function (e) {
		e.preventDefault();
	});
});
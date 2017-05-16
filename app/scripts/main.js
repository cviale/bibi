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

	function validateEmail(sEmail) {
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (filter.test(sEmail)) {
			return true;
		}
		else {
			return false;
		}
	}​

	$('#submit').click(function() {
		var sEmail = $('#email').val();
		if ($.trim(sEmail).length == 0) {
			alert('Please enter valid email address');
			e.preventDefault();
		}
		if (validateEmail(sEmail)) {
			alert('Email is valid');
		}
		else {
			alert('Invalid Email Address');
			e.preventDefault();
		}
	});











});
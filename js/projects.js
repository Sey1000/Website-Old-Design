$(document).ready(function() {
	// Meme Generator
	$('#top-text').keyup(function() {
		$('.words-top').text($('#top-text').val());
	});
	$('#bottom-text').keyup(function() {
		$('.words-bottom').text($('#bottom-text').val());
	});
	$('#image-url').keyup(function() {
		$('#memeImg').attr('src', $('#image-url').val())
	});
	// Invalid Form Fill Messages
	$('#notCreateAccount').click(function() {
		if($('#firstName').val() === "") {
			$('.first-name-error').text("Please enter your first name");
		}
		if($('#lastName').val() === "") {
			$('.last-name-error').text("Please enter your last name");
		}
		if($('#username').val() === "") {
			$('.username-error').text("Please enter username");
		}
		if($('#password').val() === "") {
			$('.password-error').text("Please enter password");
		} else if ($('#password').val().length < 8) {
			$('.password-error').text("Password must be at least 8 characters")
		}
		return false;
	});
});
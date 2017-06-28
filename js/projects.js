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
		} else {
			$('.first-name-error').empty()
		}
		if($('#lastName').val() === "") {
			$('.last-name-error').text("Please enter your last name");
		} else {
			$('.last-name-error').empty()
		}
		if($('#username').val() === "") {
			$('.username-error').text("Please enter username")
		} else {
			$('.username-error').empty()
		}
		if($('#password').val() === "") {
			$('.password-error').text("Please enter password");
		} else if ($('#password').val().length < 8) {
			$('.password-error').text("Password must be at least 8 characters")
		} else {
			$('.password-error').empty()
		}
		return false;
	});
	// Message Thread
	$('#messageButton').click(function() {
		if($('#newMessage').val() != "") {
			$('#messages').append($('<li>').text($('#newMessage').val()));
			$('#newMessage').val("");
			$("#messages").animate({ scrollTop: $('#messages').height() }, 1000);
		}
	});
	
	
});
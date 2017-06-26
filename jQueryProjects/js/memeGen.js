$(document).ready(function() {
	$('#top-text').keyup(function() {
		$('.words-top').text($('#top-text').val());
	});
	$('#bottom-text').keyup(function() {
		$('.words-bottom').text($('#bottom-text').val());
	});
	$('#image-url').keyup(function() {
		$('#memeImg').attr('src', $('#image-url').val())
	})

});
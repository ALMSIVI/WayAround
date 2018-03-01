'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function initializePage() {
	// Register change
	window.Parsley.addValidator('notEqual', {
		requirementType: 'string',
		validateString: function(value, requirement) {
			return value != $(requirement).val();
		},
		messages: {
			en: "Starting position and Destination should not be the same."
		}
	});


	// Reset the form
	$("#resetbutton").click(function() {
		clearForm('.options');
	});

	$('#showbutton').click(function() {
		localStorage.setItem('start', $("input[name='start']").val());
		localStorage.setItem('dest', $("input[name='dest']").val());
	});

	/* Set the button to green once a parameter is set */
	// Accessibility
	$("input[type=checkbox][name=terrain]").change(function() {
		var value = $("input[type=checkbox][name=terrain]:checked").val();
		if (value !== undefined) {
			$('html, body').animate({
				scrollTop: $("#aestheticRadio").offset().top
			}, 500);
		}
	});

	// Aesthetics
	$("select[name=places]").change(function() {
		if ($(this).val() != "none") {
			$('html, body').animate({
				scrollTop: $("#congestionRadio").offset().top
			}, 500);
		}
	});

	// Congestion
	$("input[type=radio][name=congestion]").change(function() {
		if ($(this).val() != "none") {
			$('html, body').animate({
				scrollTop: $("#crowdOptions").offset().top
			}, 500);
		}
	});

	$("input[type=radio][name=quietness]").change(function() {
		if ($(this).val() != "none") {
			$('html, body').animate({
				scrollTop: $("#safetyRadio").offset().top
			}, 500);
		}
	});

	// Safety
	$("input[type=checkbox][name=safety]").change(function() {
		var value = $("input[type=checkbox][name=safety]:checked").val();
		if (value !== undefined) {
			$('html, body').animate({
				scrollTop: $(document).height()
			}, 500);
		}
	});

	/* Scroll to top/bottom */
	$("#scrollTop").click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1200);
		return false;
	});

	$("#scrollBottom").click(function() {
		$('html, body').animate({
			scrollTop: $(document).height()
		}, 1200);
		return false;
	});
}

// Referred to https://www.electrictoolbox.com/jquery-clear-form/
function clearForm(e) {
	$(e).find(':input').each(function() {
		switch(this.type) {
			case 'select-multiple':
			case 'select-one':
			$(this).val("none");
			break;
			case 'checkbox':
			case 'radio':
			this.checked = false;
		}
	});

	$('html, body').animate({
			scrollTop: $("#params").offset().top
		}, 1200);
}
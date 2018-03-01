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
	$("input[name=terrain]").change(function() {
		var value = $("input[name=terrain]:checked").val();
		if (value !== undefined) {
			$('html, body').animate({
				scrollTop: $("#aestheticRadio").offset().top
			}, 500);
			$("#terrainOptions").addClass("bg-complete");
		} else {
			$("#terrainOptions").removeClass("bg-complete");
		}
	});

	// Aesthetics
	$("select[name=places]").change(function() {
		if ($(this).val() != "none") {
			$('html, body').animate({
				scrollTop: $("#congestionRadio").offset().top
			}, 500);
			$("#aestheticOptions").addClass("bg-complete");
		} else {
			$("#aestheticOptions").removeClass("bg-complete");
		}
	});

	// Congestion
	$("input[name=quietness]").change(function() {
		var value = $("input[name=quietness]:checked").val();
		if (value !== undefined) {
			$('html, body').animate({
				scrollTop: $("#crowdOptions").offset().top
			}, 500);
			$("#quietnessOptions").addClass("bg-complete");
		} else {
			$("#quietnessOptions").removeClass("bg-complete");
		}
	});

	$("input[name=congestion]").change(function() {
		var value = $("input[name=congestion]:checked").val();
		if (value !== undefined) {
			$('html, body').animate({
				scrollTop: $("#safetyRadio").offset().top
			}, 500);
			$("#crowdOptions").addClass("bg-complete");
		} else {
			$("#crowdOptions").removeClass("bg-complete");
		}
	});

	// Safety
	$("input[name=safety]").change(function() {
		var value = $("input[name=safety]:checked").val();
		if (value !== undefined) {
			$('html, body').animate({
				scrollTop: $(document).height()
			}, 500);
			$("#safetyOptions").addClass("bg-complete");
		} else {
			$("#safetyOptions").removeClass("bg-complete");
		}
	});

	/* Scroll to top/bottom */
	$("#scrollTop").click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
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
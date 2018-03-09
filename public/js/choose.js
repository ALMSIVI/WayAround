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

	// Hide the things
	$(".options").hide();
	$("#params").hide();

	// Expand the options
	$(".bg-primary").click(function() {
		var id = this.id;
		var opt = id.split('R')[0];
		$('#' + opt + "Options").toggle(200);
		if ($(this).is(":visible")) {
			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 500);
		}
	});

	// Reset the form
	$("#resetbutton").click(function() {
		clearForm('.options');
	});

	$('#showbutton').click(function() {
		localStorage.setItem('start', $("input[name='start']").val());
		localStorage.setItem('dest', $("input[name='dest']").val());

		/// GOOGLE ANALYTICS CODE ///
		if (window.performance) {
			// Gets the number of milliseconds since page load (and rounds the result since the value must be an integer).
			var timeSincePageLoad = Math.round(performance.now());
			// Sends the timing event to Google Analytics.
			ga('send', 'timing', 'formtime', 'load', timeSincePageLoad);
		}
		/// END OF GOOGLD ANALYTICS CODE ///
	});

	/* Set the button to green once a parameter is set */
	// Accessibility
	$("input[name=terrain]").change(function() {
		var value = $("input[name=terrain]:checked").val();
		if (value === undefined) {
			$("#terrainRadio").removeClass("bg-success").addClass("bg-primary");
		} else {
			$("#terrainRadio").removeClass("bg-primary").addClass("bg-success");
		}

		/// GOOGLE ANALYTICS CODE ///
		ga("send", "event", "accessibility", "click", "numClicks");
		/// END OF GOOGLD ANALYTICS CODE ///
	});

	// Aesthetics
	$("input[name=places]").change(function() {
		var value = $("input[name=places]:checked").val();
		if (value === undefined) {
			$("#aestheticRadio").removeClass("bg-success").addClass("bg-primary");
		} else {
			$("#aestheticRadio").removeClass("bg-primary").addClass("bg-success");
		}

		/// GOOGLE ANALYTICS CODE ///
		ga("send", "event", "aesthetics", "click", "numClicks");
		/// END OF GOOGLD ANALYTICS CODE ///		
	});

	// Congestion
	$("[name=congestion], [name=quietness]").change(function() {
		var value1 = $("input[name=congestion]:checked").val();
		var value2 = $("input[name=quietness]:checked").val();
		if (value1 === undefined && value2 === undefined) {
			$("#congestionRadio").removeClass("bg-success").addClass("bg-primary");
		} else {
			$("#congestionRadio").removeClass("bg-primary").addClass("bg-success");
		}

		/// GOOGLE ANALYTICS CODE ///
		ga("send", "event", "congestion", "click", "numClicks");
		/// END OF GOOGLD ANALYTICS CODE ///	
	});

	// Safety
	$("input[name=safety]").change(function() {
		var value = $("input[name=safety]:checked").val();
		if (value === undefined) {
			$("#safetyRadio").removeClass("bg-success").addClass("bg-primary");
		} else {
			$("#safetyRadio").removeClass("bg-primary").addClass("bg-success");
		}

		/// GOOGLE ANALYTICS CODE ///
		ga("send", "event", "safety", "click", "numClicks");
		/// END OF GOOGLD ANALYTICS CODE ///
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

	$(".bg-success").removeClass("bg-success").addClass("bg-primary");

	$('html, body').animate({
			scrollTop: $("#params").offset().top
	}, 1200);
}


// Index validation
function validatePlace() {
	var start = $("#start").parsley();
	var dest = $("#dest").parsley();
	start.validate();
	dest.validate();
	// Validate that the twofields are not the same
	if (!(start.isValid()) || !(dest.isValid())) {
		$("#params").hide();
		$("#place-failure").toggleClass("hidden", false);
	} else {
		$("#params").show();
		$("#place-failure").toggleClass("hidden", true);
		$('html, body').animate({
			scrollTop: $("#params").offset().top
		}, 1200);
	}
}
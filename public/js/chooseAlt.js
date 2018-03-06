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

		/// GOOGLE ANALYTICS CODE ///
		var start = $("#start").parsley();
		var dest = $("#dest").parsley();
		if (start.isValid() && dest.isValid()) {
			if (window.performance) {
				// Gets the number of milliseconds since page load (and rounds the result since the value must be an integer).
				var timeSincePageLoad = Math.round(performance.now());
				// Sends the timing event to Google Analytics.
				gtag('event', 'timing_complete', {
					'name': 'formFillAlt',
					'value': timeSincePageLoad
				});
			}
		}
		/// END OF GOOGLD ANALYTICS CODE ///
	});

	/* Set the button to green once a parameter is set */
	// Accessibility
	$("input[name=terrain]").change(function() {
		var value = $("input[name=terrain]:checked").val();
		if (value !== undefined) {
			$("#terrainOptions").addClass("bg-complete");
		} else {
			$("#terrainOptions").removeClass("bg-complete");
		}

		/// GOOGLE ANALYTICS CODE ///
		gtag('event', 'click', {
			'event_category': 'accessibility',
			'event_label': 'numClicks'
		});
		/// END OF GOOGLD ANALYTICS CODE ///
	});

	// Aesthetics
	$("select[name=places]").change(function() {
		if ($(this).val() != "none") {
			$("#aestheticOptions").addClass("bg-complete");
		} else {
			$("#aestheticOptions").removeClass("bg-complete");
		}

		/// GOOGLE ANALYTICS CODE ///
		gtag('event', 'click', {
			'event_category': 'aesthetics',
			'event_label': 'numClicks'
		});
		/// END OF GOOGLD ANALYTICS CODE ///	
	});

	// Congestion
	$("input[name=quietness]").change(function() {
		var value = $("input[name=quietness]:checked").val();
		if (value !== undefined) {
			$("#quietnessOptions").addClass("bg-complete");
		} else {
			$("#quietnessOptions").removeClass("bg-complete");
		}

		/// GOOGLE ANALYTICS CODE ///
		gtag('event', 'click', {
			'event_category': 'congestion',
			'event_label': 'numClicks'
		});
		/// END OF GOOGLD ANALYTICS CODE ///
	});

	$("input[name=congestion]").change(function() {
		var value = $("input[name=congestion]:checked").val();
		if (value !== undefined) {
			$("#crowdOptions").addClass("bg-complete");
		} else {
			$("#crowdOptions").removeClass("bg-complete");
		}

		/// GOOGLE ANALYTICS CODE ///
		gtag('event', 'click', {
			'event_category': 'congestion',
			'event_label': 'numClicks'
		});
		/// END OF GOOGLD ANALYTICS CODE ///
	});

	// Safety
	$("input[name=safety]").change(function() {
		var value = $("input[name=safety]:checked").val();
		if (value !== undefined) {
			$("#safetyOptions").addClass("bg-complete");
		} else {
			$("#safetyOptions").removeClass("bg-complete");
		}

		/// GOOGLE ANALYTICS CODE ///
		gtag('event', 'click', {
			'event_category': 'safety',
			'event_label': 'numClicks'
		});
		/// END OF GOOGLD ANALYTICS CODE ///
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

	$(".options").removeClass("bg-complete");
}
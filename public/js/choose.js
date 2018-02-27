'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function initializePage() {
	// Define new rule

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
	// Aesthetics
	$("select[name=places]").change(function() {
		if ($(this).val() == "none") {
			$("#aestheticRadio").removeClass("bg-success").addClass("bg-primary");
		} else {
			$("#aestheticRadio").removeClass("bg-primary").addClass("bg-success");
		}
	});

	// Congestion
	$("input[type=radio]").change(function() {
		if ($("input[type=radio][name=congestion]").val() != "none" || $("input[type=radio][name=quietness]").val() != "none") {
			$("#congestionRadio").removeClass("bg-primary").addClass("bg-success");
		}
	});

	// Terrain
	$("input[type=checkbox][name=terrain]").change(function() {
		var value = $("input[type=checkbox][name=terrain]:checked").val();
		if (value === undefined) {
			$("#terrainRadio").removeClass("bg-success").addClass("bg-primary");
		} else {
			$("#terrainRadio").removeClass("bg-primary").addClass("bg-success");
		}
	});

	// Safety
	$("input[type=checkbox][name=safety]").change(function() {
		var value = $("input[type=checkbox][name=safety]:checked").val();
		if (value === undefined) {
			$("#safetyRadio").removeClass("bg-success").addClass("bg-primary");
		} else {
			$("#safetyRadio").removeClass("bg-primary").addClass("bg-success");
		}
	});
}

// Index validation
	function validatePlace(e) {
		var start = $("#start").parsley();
		var dest = $("#dest").parsley();
		// Validate that the twofields are not the same
		if (!(start.isValid()) || !(dest.isValid())) {
			$("#params").hide();
			$("#place-failure").toggleClass("hidden", false);
		} else {
			$("#params").show();
			$("#place-failure").toggleClass("hidden", true);
		}
	}

// Referred to https://www.electrictoolbox.com/jquery-clear-form/
function clearForm(e) {
	$(e).find(':input').each(function() {
		switch(this.type) {
			case 'select':
			$(this).val('');
			break;
			case 'checkbox':
			case 'radio':
			this.checked = false;
		}
	});

	$(".bg-success").removeClass("bg-success").addClass("bg-primary");
}
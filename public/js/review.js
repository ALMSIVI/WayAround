'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	var params = require("../json/params.json");
	var reviewParams=[];
	if (params[places] != false) {
		reviewParams.push("Aesthetics");
	}

	if (params)
}

$(".form-group").hide();
$(".current").show();

$("#skipButton").click(function() {
	clearForm('.current');
	if ($("#nextButton").text() == "Submit") {
		submit();
	} else {
		showNext();
	}
});

$("#prevButton").click(function() {
	showPrevious();
})

$("#nextButton").click(function() {
	if ($("#nextButton").text() == "Submit") {
		submit();
	} else {
		showNext();
	}
})

function showPrevious() {
	var prev = $('.current').prev(".form-group");
	
	$('.current').toggle(200);
	$('.current').removeClass('current');
	prev.addClass('current');
	$('.current').toggle(200);
	// check if reached form beginning
	prev = $('.current').prev(".form-group");
	if (prev.length == 0) { // beginning
		$("#prevButton").prop("disabled", true);
	}
}

function showNext() {
	var next = $('.current').next(".form-group");
	$('.current').toggle(200);
	$('.current').removeClass('current');
	next.addClass('current');
	$('.current').toggle(200);
	$("#prevButton").prop("disabled", false);
	// check if reached form end
	next = $('.current').next(".form-group");
	if (next.length == 0) { // end
		readyForSubmit();
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
}

function readyForSubmit() {
	$("#nextButton").text("Submit");
}

function reverseSubmit() {
	$("#nextButton").text("Next");
}

function submit() {
	// Handle Submit action here
	$("#reviewForm").submit();
}
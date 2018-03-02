'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
var numFields = 2; // overall and comments
var currField = 0;
function initializePage() {
	$("#resetImage").hide();

	$.getJSON("./json/params.json", function(data) {

		if (!data.hasOwnProperty("terrain")) {
			$("#terrain").remove();
		} else {
			numFields++;
		}


		if (!data.hasOwnProperty("places") || data.places == "none") {
			$("#scenery").remove();
		} else {
			numFields++;
		}

		if (!data.hasOwnProperty("quietness") && !data.hasOwnProperty("congestion")) {
			$("#congestion").remove();
		} else {
			numFields++;
		}

		if (!data.hasOwnProperty("safety")) {
			$("#safety").remove();
		} else {
			numFields++;
		}
	});	
}

$(".form-group").hide();
$(".current").show();

$("#skipButton").click(function() {
	clearForm('.current');
	if (currField == numFields - 1 || currField == 0) {
		submit();
	} else {
		showNext();
	}
});

$("#prevButton").click(function() {
	showPrevious();
})

$("#nextButton").click(function() {
	if (currField == numFields - 1) {
		submit();
	} else {
		showNext();
	}
})

function showPrevious() {
	reverseSubmit();
	var prev = $('.current').prev(".form-group");
	
	$('.current').toggle(200);
	$('.current').removeClass('current');
	prev.addClass('current');
	$('.current').toggle(200);
	// check if reached form beginning
	if (currField != 0) {
		currField--;
	}

	if (currField == 0) {
		$("skipButton").text("Skip All");
		$("#prevButton").prop("disabled", true);
	}
	setProgress();
}

function showNext() {
	$("#skipButton").text("Skip");
	var next = $('.current').next(".form-group");
	$('.current').toggle(200);
	$('.current').removeClass('current');
	next.addClass('current');
	$('.current').toggle(200);
	$("#prevButton").prop("disabled", false);
	// check if reached form end
	if (currField != numFields - 1) {
		currField++;
	}

	if (currField == numFields - 1) {
		readyForSubmit();
	}

	setProgress();
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

function setProgress() {
	var newProgress = currField / (numFields - 1) * 100;
	$(".progress-bar").attr("aria-valuenow", newProgress).css('width',newProgress + "%");;
	console.log(newProgress);
}

function submit() {
	// Handle Submit action here
	$("#reviewForm").submit();
}


$("#media").change(function(event) {
	$("preview-media").addClass("thumbnail");
	var files = event.target.files;
	for(var i = 0; i < files.length; i++){
		var image = files[i];
		var reader = new FileReader();
		reader.onload = function(file) {
			var img = new Image();
			img.src = file.target.result;
			img.classList.add("img");
			img.classList.add("img-responsive");
			img.classList.add("img-margin");
			$("#preview-media").append(img);
		}
		reader.readAsDataURL(image);
	};

	$("#resetImage").show();
});

$("#resetImage").click(function(event) {
	event.preventDefault();
	$("#media").val("");
	$("preview-media").removeClass("thumbnail");
	$("img").remove();
	$("#resetImage").hide();
});
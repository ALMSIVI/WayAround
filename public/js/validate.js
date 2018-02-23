'use strict';

// Login validation
function validateLogin(e) {
	var instance = $("#loginForm").parsley();
	if (!instance.isValid()) {
		e.preventDefault();
		$("#login-failure").toggleClass("hidden", false);
	}
}


window.Parsley.addValidator('notEqual', {
    requirementType: 'string',
    validate: function(value, requirement) {
      return value != $(requirement).text();
    },
    messages: {
      en: 'Starting position and Destination should not be the same.'
    }
  });

// Index validation
function validatePlace(e) {
	var instance = $("#placeForm").parsley();
	// Validate that the twofields are not the same
	if (!instance.isValid()) {
		e.preventDefault();
		$("#place-failure").toggleClass("hidden", false);
	}
}

// Parameter validation
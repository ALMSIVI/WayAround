'use strict';

// Login validation
function validateLogin(e) {
	var instance = $("#loginForm").parsley();
	if (!instance.isValid()) {
		e.preventDefault();
		$("#login-failure").toggleClass("hidden", false);
	}
}


// Index validation
function validatePlace(e) {
	var instance = $("#placeForm").parsley();
	if (!instance.isValid()) {
		e.preventDefault();
		$("#place-failure").toggleClass("hidden", false);
	}
}

// Parameter validation
'use strict';

// Login validation
function validateLogin(e) {
	var instance = $("#loginForm").parsley();
	if (!instance.isValid()) {
		e.preventDefault();
		$("#login-failure").toggleClass("hidden", false);
	}
}
'use strict';

// Login validation
function validateLogin(e) {
	var instance = $("#loginForm").parsley();
	if (!instance.isValid()) {
		$("#login-failure").toggleClass("hidden", false);
	}
}
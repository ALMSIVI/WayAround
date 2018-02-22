
/*
 * GET home page.
 */

var places = require("../json/places.json");

exports.login = function(req, res) {
	res.redirect('login');
}

exports.view = function(req, res) {
	res.render('index', places);
};

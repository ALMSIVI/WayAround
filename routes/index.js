
/*
 * GET home page.
 */

var places = require("../json/places.json");

exports.login = function(req, res) {
	res.redirect('login', places);
}

exports.view = function(req, res) {
	res.render('index', places);
};

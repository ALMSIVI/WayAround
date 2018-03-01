
/*
 * GET home page.
 */

var coords = require("../public/json/coordinates.json");

var places = {"places": coords};

exports.login = function(req, res) {
	res.redirect('login');
};

exports.redirect = function(req, res) {
	res.redirect('index');
};

exports.view = function(req, res) {
	res.render('index', places);
};

exports.viewAlt = function(req, res) {
	res.render('indexalt', places);
};
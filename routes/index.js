
/*
 * GET home page.
 */

var coords = require("../public/json/coordinates.json");

var places = {"places": coords};

exports.login = function(req, res) {
	res.redirect('login');
}

exports.view = function(req, res) {
	res.render('index', places);
};

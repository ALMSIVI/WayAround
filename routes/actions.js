//History data
var history = require("../json/history.json");

var data = require("../json/profile.json");

exports.history = function(req, res) {
	res.render('history', history);
}

exports.profile = function(req, res) {
	res.render('profile', data);
}
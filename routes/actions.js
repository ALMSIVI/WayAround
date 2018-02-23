//History data
var history = require("../public/json/history.json");

exports.profile = function(req, res) {
	res.render('profile', history);
}
//History data
var history = require("../json/history.json");

exports.profile = function(req, res) {
	res.render('profile', history);
}
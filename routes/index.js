
/*
 * GET home page.
 */
//History data
var data = require('history.json');

var data = require('profile.json');

exports.login = function(req, res) {
	res.redirect('login');
}

exports.view = function(req, res) {
	res.render('index',history);
};

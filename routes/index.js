
/*
 * GET home page.
 */

exports.login = function(req, res) {
	res.redirect('login');
}

exports.view = function(req, res) {
	res.render('index');
};

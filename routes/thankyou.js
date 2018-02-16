exports.show = function(req, res) {
	console.log(req.body);

	var fs = require('fs');
	fs.writeFile("./json/review.json", JSON.stringify(req.body), function(err) {
		if(err) {
			return console.log(err);
		}
	});
	res.render('thankyou');
};

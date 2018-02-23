exports.show = function(req, res) {
	console.log(req.body);

	var review = require("../json/review.json");
	review.reviews.push(req.body);
	var fs = require("fs");
	fs.writeFile("./json/review.json", JSON.stringify(review), function(err) {
		if(err) {
			return console.log(err);
		}
	});
	res.render('thankyou');
};

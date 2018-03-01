var reviews = require('../public/json/reviews.json');


exports.showroute = function(req, res) {
	var fs = require("fs");
	fs.writeFile("./public/json/params.json", JSON.stringify(req.body), function(err) {
		if(err) {
			return console.log(err);
		}
	});
    res.render('showroute', reviews);
};

var reviews = require('../public/json/reviews.json');


exports.showroute = function(req, res) {
	var fs = require("fs");
	fs.writeFile("./public/json/params.json", JSON.stringify(req.body), function(err) {
		if(err) {
			return console.log(err);
		}
	});
	let obj = {...req.body, reviews : reviews};
    res.render('showroute', obj);
};

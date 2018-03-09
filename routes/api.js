var coordinates = require("../public/json/coordinates.json")
var fs  = require('fs');
var detours = require("../public/json/detours.json")

exports.getLatLon = function (req, res) {
	res.json({
		start : coordinates[req.params.start],
		dest : coordinates[req.params.dest]
	});
};

exports.getDetours = function (req, res) {

	let arr = [];
	delete req.query.start;
	delete req.query.dest;

	for (let key in req.query) {
		let tmp = req.query[key];
		if (tmp) {
			if(typeof tmp == 'string') tmp = [tmp];

			tmp.forEach((x) => {
				console.log(x);
				if (detours[key][x]) arr.push(detours[key][x][0]);	
			});
		}
	}
	console.log(arr);
	res.json({detours : arr})
}


var buildDetours = function(obj) {
	let ans = {...obj};
	const placeholder = {"lat" : 0, "lon" : 0};

	delete ans.start;
	delete ans.dest;

	['terrain', 'quietness', 'congestion', 'safety'].forEach(function(prop) {
		var arr = ans[prop];
		ans[prop] = {}
		for (let i = 0; i < arr.length; i++) {
			ans[prop][arr[i]] = [placeholder];
		}
		if (prop == 'safety') {
			fs.writeFile("public/json/detours.json", JSON.stringify(ans), function (err) {
    			if (err) {
        			return console.log(err);
    		}

    		console.log("The file was saved!");
		}); 
		}
	});

	
}
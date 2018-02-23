var coordinates = require("../public/json/coordinates.json")

exports.getLatLon = function (req, res) {
	res.json({
		start : coordinates[req.params.start],
		dest : coordinates[req.params.dest]
	});
};
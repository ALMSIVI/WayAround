var places = require("../public/json/places.json");

exports.choose = function (req, res) {
  places["start"] = req.query.start;
  places["dest"] = req.query.dest;
  res.render('choose', places);
};
exports.choose = function (req, res) {
  res.render('choose', {
  	"start": req.query.start,
  	"dest": req.query.dest
  });
};
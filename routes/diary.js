

/*
 * GET home page.
 */

exports.view = function(req, res){
	var main = req.params.name
  res.render('diary', {
  		'id' : 'main'
  });
};
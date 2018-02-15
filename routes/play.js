/*
 * GET play page.
 */

evar data = require("../playData.json");

exports.view = function(req, res){
  	console.log(data);
  	res.render('index', data);
};
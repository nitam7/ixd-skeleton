/*
 * GET play page.
 */

var data = require("../playData.json");

exports.view = function(req, res){
  	console.log(data);
  	res.render('index', data);
};
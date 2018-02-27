/*
 * GET home page.
 */
var workdata = require("../workdata.json");

exports.view = function(req, res){
	console.log(workdata);
  	res.render('entry', workdata);
};



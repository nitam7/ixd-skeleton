/*
 * GET play page.
 */

var playData = require("../playData.json");
var workData = require ("../workdata.json");

// var fs = require('fs')

// fs.readFile('./workdata.json', 'utf-8', function(err, data) {
// 	if (err) throw err

// 	var arrayOfObjects = JSON.parse(workData)
// 	arrayOfObjects.users.push({
		
// 	})

// 	console.log(arrayOfObjects)

// 	fs.writeFile('./workdata.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
// 		if (err) throw err
// 		console.log('Done!')
// 	})
// })

exports.view = function(req, res){
  	console.log(playData);
  	res.render('play', playData);
};


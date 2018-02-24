//importing all the animals

var data = require("../data.json");





var fs = require('fs')

fs.readFile('./users.json', 'utf-8', function(err, data) {
	if (err) throw err

	var arrayOfObjects = JSON.parse(data)
	arrayOfObjects.users.push({
		
	})

	console.log(arrayOfObjects)

	fs.writeFile('./users.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
		if (err) throw err
		console.log('Done!')
	})
})





			   


exports.view = function(req, res){
	console.log(data);
  	res.render('choose', data);
};
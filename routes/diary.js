

/*
 * GET home page.
 */

exports.view = function(req, res){
	var main = req.params.name;
  res.render("diary", {
  	"diaries": [
  	  {	"name": "Menu",
  	  	"id": "main",
  	  }
  	]
  });
}

exports.viewEntry = function(req, res){
	var name = req.params.name
  res.render("diary", {
	"entries": [
	  { "diaryName": "Title 1",
  	  	"id": "entry1",
  	  	"date": "1/15/18"
  	  }
  	]
  });
}
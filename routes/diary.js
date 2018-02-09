

/*
 * GET home page.
 */

exports.view = function(req, res){
	var main = req.params.name;
  res.render("diary", {
  	"diaries": [
  	  {	"diaryName": "Title 1",
        "id": "entry1",
        "date": "1/15/18"
  	  }, 
      {
        "diaryName": "Title 2",
        "id": "entry2",
        "date": "1/14/18"
      }
  	]
  });
}
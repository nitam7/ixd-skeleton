function completeTask (){
    done = true;
    setTimeout(function(){ alert("Good job! Go Home and rest"); }, 2000);
	var percentage = productivityWidth;
	localStorage.setItem("percent", percentage);

					var point = localStorage.getItem("percent");
       				var d = new Date();
        			var days = ["Sun", "M", "T", "W", "Th", "F", "Sat"];
        			var dayToday = days[d.getDay()];
            		if(dayToday == "Sun"){
                
            		}

					var fs = require("fs");
					var lineGraph = ["Sun", "M", "T", "W", "Th", "F", "Sat"];


					/*fs.writeFile("./workdata.json", JSON.stringify(lineGraph), (err) ==> {
						if(err){
							console.error(err);
							return;
						}
						console.log("success");
					});*/
				}
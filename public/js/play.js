


function completeTask (){
    done = true;
    if (altView == true) {
        setTimeout(function(){  
                    var r = confirm("Good Job! Click Ok to see Diary results or Cancel to go Home!");
                    if (r == true) {
                        window.location.href = "./diary";
                    } else {
                        window.location.href = "./index";
                    }
        }, 10);

    }
    else {
    setTimeout(function(){ alert("Good job! Go Home and rest"); }, 2000);
    }
	var percentage = productivityWidth;
	//localStorage.setItem("percent", percentage);

       				// var d = new Date();
        			// var days = ["Sun", "M", "T", "W", "Th", "F", "Sat"];
        			// var dayToday = days[d.getDay()];
           //  		if(dayToday == "Sun"){
                
           //  		}
           var b = JSON.parse(localStorage.getItem("percent"));
            if (b.length >= 5) {
                var c = []
                localStorage.removeItem("percent");
                localStorage.setItem("percent", JSON.stringify (c));
                c.push(JSON.parse(localStorage.getItem("percent")));
                console.log(localStorage.getItem("percent"));
            }

        var a = [percentage];
        a = JSON.parse(localStorage.getItem("percent"));
        a.push(percentage);
        localStorage.setItem("percent", JSON.stringify(a));
        console.log(localStorage.getItem("percent"));


     // writeJSON();
 }





// function writeJSON () {
//         $.getJSON("../workdata", function(json) {
//         var array = [];
//             for (var key in json) {
// 				if (json.hasOwnProperty(key)) {
// 			        var item = json[key];
// 			        array.push({
// 			            date: item.date,
// 			            series: item.series

// 			    	});
// 			    }
// 			}
// 		});
// 		var fs = require("fs");
// 		var lineGraph = [];


// 		fs.writeFile("./workdata.json", JSON.stringify(percentage), (err) => {
// 			if(err){
// 				console.error(err);
// 				return;
// 			}
// 				console.log("success");
// 		});
//}
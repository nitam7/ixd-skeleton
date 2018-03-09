
function completeTask (){
    done = true;

    setTimeout(function () {
            var alert = alertify.alert("Good job! Go home and rest.").setting({
                'label' : 'Go home',
                'onok' : function () {
                    window.location.href ="./index";
                }
            }).show();
        }, 10);
   
	var percentage = productivityWidth;
	
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
        
        sessionStorage.removeItem("hrs");
        sessionStorage.removeItem("mins");


       
        
      

 }






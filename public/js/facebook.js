function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

function changeUser(response) {
	$(".facebookLogin").hide();
	$("h4:first").text(response.name);
	$(".signingIn").hide();
	$("signingUp").hide();
	alert("You are logged in as: " + response.name);
	location.href = "./index";
}

function statusChangeCallback(response) {
	console.log('Facebook login status changed');
	console.log(response);
	if(response.status === 'connected') {
		console.log('Successfully logged in with Facebook');
		FB.api('/me?fields=name,first_name', changeUser);
	}
}
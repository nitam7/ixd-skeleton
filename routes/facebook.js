function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);

	});
}

 function changeUser(response) {
	$(".facebookLogin").hide();
	$("h1:first").text(response.name);
 }

function statusChangeCallback(response) {
	console.log('Facebook login status changed');
	console.log(response);
	if(response.status === 'connected') {
		console.log('Sucessfully logged in with Facebook');
		//logged into your app and FB. Get name and picture.
		FB.api('/me?fields=name,first_name', changeUser);
	}
}


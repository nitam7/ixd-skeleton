function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

function changeUser(response) {
	$(".facebookLogin").hide();
	$("p:first").text(response.name);
}

function statusChangeCallback(response) {
	if(response.status === 'connected') {
		console.log('Successfully logged in with Facebook');
		FB.api('/me?fields=name,first_name, changeUser')
	}
}
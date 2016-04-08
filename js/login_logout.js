var script = document.createElement('script');
script.src = 'js/jquery-2.2.2.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var disableLinks = function() {
	$('#mo_i').addClass('not-active');
	$('#mo_t').addClass('not-active');
	$('#mu_i').addClass('not-active');
	$('#mu_t').addClass('not-active');
	$('#bo_i').addClass('not-active');
	$('#bo_t').addClass('not-active');
}

var enableLinks = function() {
	$('#mo_i').removeClass('not-active');
	$('#mo_t').removeClass('not-active');
	$('#mu_i').removeClass('not-active');
	$('#mu_t').removeClass('not-active');
	$('#bo_i').removeClass('not-active');
	$('#bo_t').removeClass('not-active');
}

var getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}	
var check_uname = function() {
	$('#profile-name').addClass('hide');//hide the profile name by default
	$('#login-btn').removeClass('hide');
	var ck_value = getCookie('username');
	if(ck_value.length>0) { //cookie exists, therefore login must be have been succesful
		$('#login-btn').addClass('hide');
		enableLinks();
		$('#profile-name').text(ck_value + '  (Logout)');
		$('#profile-name').removeClass('hide');
		Materialize.toast('Welcome ' + ck_value + '!',2000);
	}
	//else	window.location.href="index.html";
		
}
var logout = function() {
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	window.location.href="index.html";
}

var signup_check=function() {	//check the sign-up status
	var msg = getCookie('signup');
	Materialize.toast(msg,3000);
	document.cookie = "signup=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

var reco_check=function() {	//check the sign-up status
	var msg = getCookie('recofailed');
	Materialize.toast(msg,3000);
	document.cookie = "signup=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

var login_fail = function() {
	var erck = getCookie('loginfailed');	//Error Cookie
	if(erck.length>0) {
		document.cookie = "loginfailed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
		Materialize.toast(erck, 4000);
}
}
$(document).ready(function() {
	  disableLinks();
	  check_uname();
	  signup_check();
	  login_fail();
	  reco_check();
});

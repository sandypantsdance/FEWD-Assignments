document.getElementById('signUp').onclick = talkToUser;

function talkToUser(){
	event.preventDefault();
	document.getElementById('header').style.backgroundColor = "orange";
}


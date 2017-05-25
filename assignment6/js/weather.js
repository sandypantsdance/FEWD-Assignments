$(document).ready(function(){

//listner: input
//store input
//change input into number
//take input and convert to F
//switch: degree = picture
//hot: 86+
//mild: 50-85
//cold: 49 and under

$('#button').click(convert);

function convert(){
	event.preventDefault();
	var tempC = $('#currentTemp').val().trim();
	tempC = Number(tempC);
	var result = cToF(tempC);
	$('.tempF').text(result);
	changeBackground(result);
}
	
function cToF(tempC){
		var tempF = (tempC * 1.8) + 32;
		return(tempF)
}

function changeBackground(tempF){
	switch(true){
		case (tempF > 85):
        	$('body').attr('class', 'hot');
        	break;
    	case (tempF > 50 && tempF < 85):
      		$('body').attr('class', 'mild');
        	break;
    	case (tempF < 50):
     		$('body').attr('class', 'cold');
        	break;
	}
}


});
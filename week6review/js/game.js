$(document).ready(function(){

var items = ['rock', 'paper', 'scissors'];

var botScore = 0;
var playerScore = 0;


//listen for new entry
$('#rock').click(playrock);
$('#paper').click(playpaper);
$('#scissors').click(playscissors);

function playrock(){
	play ('rock');
}

function playpaper(){
	play ('paper');
}

function playscissors(){
	play ('scissors');
}

function play(item){
	var yourPickValue = items.indexOf(item);

	$('.yourPick').text(item);

	var botPick = Math.floor(Math.random() * 3) + 1;

	Number ($('#botscore .total').text)





	console.log = item;
	if (item==="scissors" && botItem==="paper"){
		humanscore = humanscore + 1;
	} else if (item==="scissors" && botItem==="rock"){
		botscore = botscore + 1;
	} 
}



//bot selects a number between 1 and 3

function botChoice(){
	Math.floor((Math.random() * 3) + 1);
	if 
}

//compare new entry with bot's input
//winner gets plus 1, tie gets nothing



});
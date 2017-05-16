
$(document).ready(function(){

	$('.readmore').click(displayMore);
	$('.readless').click(displayLess);
	$('.learnmore').click(learnMore);

	function displayMore(){
		event.preventDefault();
		$('.readmore').hide();
		$('#show-this-on-click').slideDown();
		$('.readless').show();
	}

	function displayLess(){
		event.preventDefault();
		$('.readless').hide();
		$('#show-this-on-click').slideUp();
		$('.readmore').show();
	}

	function learnMore(){
		event.preventDefault();
		$('.learnmore').hide();
		$('#learnmoretext').slideDown();
	}


});






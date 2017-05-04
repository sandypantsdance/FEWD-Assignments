
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






/*

Using the same functions as above, if a user clicks the 
"Learn More" link in the sidebar, have the <span> inside that 
<p> slide down and hide the "Learn More" link using $.slideDown() 
and $.hide()
*/
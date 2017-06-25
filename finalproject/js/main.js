$(document).ready(function(){


	$('#hamburger').click(showHamburger);

		function showHamburger() {
			$('#mini-list').toggle();
			$('#mini-list li').style.display = "inline-block";
		}


});
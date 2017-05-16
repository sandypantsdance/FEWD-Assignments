$(document).ready(function(){


$('#submit-btn').click(showPic)


function showPic(){
	event.preventDefault();
	var city = $('#city-type').val().trim();

//NYC
	if (city === 'New York' || city === 'New York City' || 
		city === 'NYC'){
	$('body').attr('class', 'nyc');

//SF
	} else if (city === 'San Francisco' || city === 'SF' || 
		city === 'Bay Area'){
	$('body').attr('class', 'sf');

//LA
	} else if (city === 'Los Angeles' || city === 'LA' || 
		city === 'LAX'){
	$('body').attr('class', 'la');

//ATX
	} else if (city === 'Austin' || city === 'ATX'){
	$('body').attr('class', 'austin');

//SYD
	} else if (city === 'Sydney' || city === 'SYD'){
	$('body').attr('class', 'sydney');

//City not listed
	} else {
	$('body').attr('class','');	
	}

// reset the input back to nothing (#7)
	$('#city-type').val('');
};


});

/*
1. if input is: New York, New York City, NYC; 
background --> nyc.jpg
2. if input is: San Francisco, SF, Bay Area --> sf.jpg
3. input: Los Angeles, LA, LAX --> la.jpg
4. input: Austin, ATX --> austin.jpg
5. input: Sydney, SYD --> sydney.jpg
6. ??? - Remove extra lines or spaces from the input
7. Reset user input field after it is submitted*/
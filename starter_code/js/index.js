
// $(document).ready(function(){
// 	console.log('ready');
// })

//listen to the click on update

$('#submit-btn').click(img);

function img(){
	//Get input value
	var cityname;
		cityname = $('#city-type').val().toLowerCase().trim();
	
	// var bkgimg = $('url (images/citipix_skyline.jpg)');
	//If input value equals New York City
	if (cityname === 'nyc' || cityname === 'new york city' || cityname === 'new york')
		//change background-image to nyc.jpg
		$('body').css('background-image','url(images/nyc.jpg)');
	
	

	// if input value equals San-francisco 
	else if (cityname === 'san francisco' || cityname === 'sf' || cityname === 'bay area')
		// change background image to sf.jpg

		$('body').css('background-image' , 'url(images/sf.jpg)');


	// if input value equals LA
	else if (cityname === 'la' || cityname === 'los angeles' || cityname === 'lax')
		//  change background inage to LA.jpg
		$('body').css('background-image' , 'url(images/la.jpg)');
	
	// if input value equals austin	
	else if	(cityname === 'austin' || cityname === 'atx')
		// change background image to austin.jpg
		$('body').css('background-image' , 'url(images/austin.jpg)');
	
	// if input value equals sydney

	else if (cityname === 'sydney' || cityname === 'syd')
		// change background image to  sydney.jpg
		$('body').css('background-image', 'url(images/sydney.jpg)');
		
	
	// if input value equals null
	else $('body').css('background-image' , 'url(images/citipix_skyline.jpg)');


	event.preventDefault();
	

}





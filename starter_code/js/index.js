
// $(document).ready(function(){
// 	console.log('ready');
// })
// create dropdown selectors
var cityname=["San Francisco" , "Los Angeles" , "New York City"  , "Austin"  , "Sydney"];
// Add options in the selector
cityname.forEach(function(city){
	console.log(city);
	var cityOption= '<option value="' + city + '">' + city + '</option>';
	$('.dropdown').append(cityOption);
})

//listen to the click on update

$('.dropdown').change(img);

function img(){
	//Get input value
	// var cityname;
	var cityVal = $('.dropdown').val();
	console.log(cityVal); 
	
	//If input value equals San francisco
	if(cityVal === 'San Francisco')
		// add class to body
		$('body').attr('class' , 'sf');
	// If input value is New york City
	else if (cityVal === 'New York City')
		//add class to body
		$('body').attr('class' , 'nyc');
	 
	// if input value equals LA
	else if (cityVal ==='Los Angeles')
		//  Add class to body 
		$('body').attr('class' , 'la');
	
	// if input value equals austin	
	else if	(cityVal === 'Austin')
		// Add class to body 
		$('body').attr('class' , 'austin');
	// if input value equals sydney

	else if (cityVal === 'Sydney')
		// change background image to  sydney.jpg
		$('body').attr('class' , 'sydney');
		
	
	// if input value equals null
	// else $('body').css('background-image' , 'url(images/citipix_skyline.jpg)');


	event.preventDefault();
	

}





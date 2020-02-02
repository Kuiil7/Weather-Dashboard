$(document).ready(function() {
	//Check geolocation success 
	if (navigator.geolocation) {
		// Geolocation API not supported by current browser
	} else {
		console.log('Geolocation API is not supported by your browser')
	};
});
// Get latitude and longitude
navigator.geolocation.getCurrentPosition(function(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	//API URL based on user's current location
	var weatherURL2 = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
	//API URL 5-day/3hr forecast based on user's current location       
	var fiveDay2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&units=imperial&cnt=35&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
	//API URL for UV index based on user's location
	var uvIndex2 = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
	//API call to user's current location
	$(function() {
		$.ajax({
			url: weatherURL2,
			dataType: "JSON",
			success: function(data) {
            //Input search results
				//added moments.js format to weather data
				$("#time").text(moment().format("L"));
				//selected City name, country and icon added to html
				$('#city-date').html("<h3>" + data.name + ' ' + data.sys.country + ' ' + "<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
				//selected city temperature  
				$('#temp').html("Temp: " + data.main.temp + "°F");
				//selected city's humidity information              
				$('#hum').html("Hum: " + data.main.humidity);
				//selected wind speed atted to HTML             
				$('#wind').html("Wind: " + data.wind.speed + ' ' + "MPH");
            
            //API 5day/3hr API call to user's current location
				$.ajax({
					url: fiveDay2,
					dataType: "JSON",
					success: function(data) {
						//setting up a variable to be inserted into HTML as list item based on location value from user selected data, moments.js to format time, icon, temp, and humidity
//Day 1
						$("#date1").text(moment(data.list[2].dt_txt).format("L"));
						//selected City name, country and icon added to html
						$('#icon1').html("<img src='https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png'>");
						//selected city temperature  
						$('#temp1').text("Temp: " + data.list[2].main.temp + "°F");
						//selected city's humidity information              
						$('#hum1').text("Hum: " + data.list[2].main.humidity);
						
//Day 2
						//display date using moments.js
						$("#date2").text(moment(data.list[10].dt_txt).format("L"));
						//display icon
						$('#icon2').html("<img src='https://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png'>");
						//selected city temperature  
						$('#temp2').text("Temp: " + data.list[10].main.temp + "°F");
						//selected city's humidity information added to html               
						$('#hum2').text("Hum: " + data.list[10].main.humidity);
						
 //Day 3                 
						$("#date3").text(moment(data.list[18].dt_txt).format("L"));
						//selected City name, country and icon 
						$('#icon3').html("<img src='https://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png'>");
						//selected city temperature   
						$('#temp3').text("Temp: " + data.list[18].main.temp + "°F");
						//selected city's humidity information              
						$('#hum3').text("Hum: " + data.list[18].main.humidity);
						
//Day 4
						//display date
						$("#date4").text(moment(data.list[26].dt_txt).format("L"));
						//display icon 
						$('#icon4').html("<img src='https://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png'>");
						//selected city temperature  
						$('#temp4').text("Temp: " + data.list[26].main.temp + "°F");
						//selected city's humidity information              
						$('#hum4').text("Hum: " + data.list[26].main.humidity);
						
//Day 5                  
                  $("#date5").text(moment(data.list[34].dt_txt).format("L"));
						//selected City name, country and icon 
						$('#icon5').html("<img src='https://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png'>");
						//selected city temperature  
						$('#temp5').text("Temp: " + data.list[34].main.temp + "°F");
						//selected city's humidity information              
						$('#hum5').text("Hum: " + data.list[34].main.humidity);
						//making an API call to get the user selected city's UV data
						$.ajax({
							url: uvIndex2,
							type: "GET",
							dataType: "JSON",
							success: function(data) {
                     //inserting UV value in HTML

								$('#uv').html(+' ' + data.value);
							}
						});
					}
				});
				//Setting up an input search function
				$('.btn').click(function() {
					//variable that contains the input value
					var input = $("input:text").val();
					//5 day/3hr forecast API URL
					var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&units=imperial&cnt=12&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
					//user input city name search URL
					var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
					//storing button input to local storage 
               localStorage.setItem(".btn", (input));
          
					//setting up a list variable to append user input
					var li = '<li class="list-group-item">' + input + '</li>';
					$('.list-group').append(li)
					

					//Duplicating ajax URLs, calls, and individual parameters to appear on usuer input based on the steps in current locaiton 
            
               $.ajax({
						url: weatherURL,
						dataType: "JSON",
						success: function(data) {
							$("#time").text(moment().format("LLL"));
							$('#city-date').html("<h3>" + data.name + ' ' + data.sys.country + ' ' + "<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
							$('#temp').html("Temp: " + data.main.temp + "°F");
							$('#hum').html("Hum: " + data.main.humidity);
							$('#wind').html("Wind: " + data.wind.speed + ' ' + "MPH");
							$.ajax({
								url: fiveDay,
								dataType: "JSON",
								success: function(data) {
//Day 1
									//display date using moments.js
									$("#date1").text(moment(data.list[2].dt_txt).format("L"));
									//display icon
									$('#icon1').html("<img src='https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png'>");
									//display selected city temperature   
									$('#temp1').text("Temp: " + data.list[2].main.temp + "°F");
									//display selected city's humidity information              
									$('#hum1').text("Hum: " + data.list[2].main.humidity);
									//display selected wind speed            
//Day 2
									//display date using moments.js
									$("#date2").text(moment(data.list[10].dt_txt).format("L"));
									//display icon
									$('#icon2').html("<img src='https://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png'>");
									//selected city temperature    
									$('#temp1').text("Temp: " + data.list[10].main.temp + "°F");
									//selected city's humidity information             
									$('#hum2').text("Hum: " + data.list[10].main.humidity);
									//selected wind speed            
//Day 3
									//display date
									$("#date3").text(moment(data.list[18].dt_txt).format("L"));
									//display icon
									$('#icon3').html("<img src='https://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png'>");
									//selected city temperature    
									$('#temp3').text("Temp: " + data.list[18].main.temp + "°F");
									//selected city's humidity information                
									$('#hum3').text("Hum: " + data.list[18].main.humidity);
									//selected wind speed            
//Day 4
									//display date using moments.js
									$("#date4").text(moment(data.list[26].dt_txt).format("L"));
									//selected icon
									$('#icon4').html("<img src='https://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png'>");
									//selected city temperature    
									$('#temp4').text("Temp: " + data.list[26].main.temp + "°F");
									//selected city's humidity information                
									$('#hum4').text("Hum: " + data.list[26].main.humidity);
									//selected wind speed            
//Day 5
									//display date using moments.js
									$("#date5").text(moment(data.list[34].dt_txt).format("L"));
									//display icon 
									$('#icon5').html("<img src='https://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png'>");
									//display selected city temperature  
									$('#temp5').text("Temp: " + data.list[34].main.temp + "°F");
									//selected city's humidity information              
									$('#hum5').text("Hum: " + data.list[34].main.humidity);
									//selected wind speed            
                           
                           //UV Ajax call
									$.ajax({
										// https:// added
										url: uvIndex,
										type: "GET",
										dataType: "JSON",
										success: function(data) {

                                 //inserting UV value in HTML
											$('#uv').html(+' ' + data.value);
										}
									});
								}
							});
						},
					});
				});
			}
		});
	});
}); 

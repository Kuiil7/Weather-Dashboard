$(document).ready(function() {
	if (navigator.geolocation) {
	} else {
		console.log('Geolocation API is not supported by your browser')
	};
});
navigator.geolocation.getCurrentPosition(function(position) {
	const lat = position.coords.latitude;
	const long = position.coords.longitude;
	let weatherURL2 = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
	let fiveDay2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&units=imperial&cnt=35&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
	let uvIndex2 = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
	$(function() {
		$.ajax({
			url: weatherURL2,
			dataType: "JSON",
			success: function(data) {
            
				$("#time").text(moment().format("L"));
				$('#city-date').html(data.name + ' ' + data.sys.country + ' ' + "<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
				$('#temp').html("Temp: " + data.main.temp + "°F");
				$('#hum').html("Hum: " + data.main.humidity);
				$('#wind').html("Wind: " + data.wind.speed + ' ' + "MPH");
            
				$.ajax({
					url: fiveDay2,
					dataType: "JSON",
					success: function(data) {

						$("#date1").text(moment(data.list[2].dt_txt).format("L"));
						$('#icon1').html("<img src='https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png'>");
						$('#temp1').text("Temp: " + data.list[2].main.temp + "°F");
						$('#hum1').text("Hum: " + data.list[2].main.humidity);
						

						$("#date2").text(moment(data.list[10].dt_txt).format("L"));
					
						$('#icon2').html("<img src='https://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png'>");
						 
						$('#temp2').text("Temp: " + data.list[10].main.temp + "°F");
						              
						$('#hum2').text("Hum: " + data.list[10].main.humidity);
						
				$("#date3").text(moment(data.list[18].dt_txt).format("L"));
					
						$('#icon3').html("<img src='https://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png'>");
						   
						$('#temp3').text("Temp: " + data.list[18].main.temp + "°F");
				             
						$('#hum3').text("Hum: " + data.list[18].main.humidity);
						

						$("#date4").text(moment(data.list[26].dt_txt).format("L"));
				
						$('#icon4').html("<img src='https://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png'>");
						
						$('#temp4').text("Temp: " + data.list[26].main.temp + "°F");
						             
						$('#hum4').text("Hum: " + data.list[26].main.humidity);
						
                  
                  $("#date5").text(moment(data.list[34].dt_txt).format("L"));
					
						$('#icon5').html("<img src='https://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png'>");
						
						$('#temp5').text("Temp: " + data.list[34].main.temp + "°F");
					             
						$('#hum5').text("Hum: " + data.list[34].main.humidity);
						
						$.ajax({
							url: uvIndex2,
							type: "GET",
							dataType: "JSON",
							success: function(data) {
          

								$('#uv').html(' UV Index:' + ' '+ data.value);
							}
						});
					}
				});
				$('.btn').click(function() {
					let input = $("input:text").val();
					let fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&units=imperial&cnt=12&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
					let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
               localStorage.setItem(".btn", (input));
          
					let li = '<li class="list-group-item">' + input + '</li>';
					$('.list-group').append(li)
					

            
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

								
									$("#date1").text(moment(data.list[2].dt_txt).format("L"));
									
									$('#icon1').html("<img src='https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png'>");
									$('#temp1').text("Temp: " + data.list[2].main.temp + "°F");
									$('#hum1').text("Hum: " + data.list[2].main.humidity);

									$("#date2").text(moment(data.list[10].dt_txt).format("L"));
									$('#icon2').html("<img src='https://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png'>");
									$('#temp1').text("Temp: " + data.list[10].main.temp + "°F");
									$('#hum2').text("Hum: " + data.list[10].main.humidity);

								
									$("#date3").text(moment(data.list[18].dt_txt).format("L"));
								
									$('#icon3').html("<img src='https://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png'>");
									    
									$('#temp3').text("Temp: " + data.list[18].main.temp + "°F");
									              
									$('#hum3').text("Hum: " + data.list[18].main.humidity);
								           

									$("#date4").text(moment(data.list[26].dt_txt).format("L"));
								
									$('#icon4').html("<img src='https://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png'>");
									  
									$('#temp4').text("Temp: " + data.list[26].main.temp + "°F");
									             
									$('#hum4').text("Hum: " + data.list[26].main.humidity);
									          

									$("#date5").text(moment(data.list[34].dt_txt).format("L"));
								
									$('#icon5').html("<img src='https://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png'>");
									
									$('#temp5').text("Temp: " + data.list[34].main.temp + "°F");
									
									$('#hum5').text("Hum: " + data.list[34].main.humidity);
								          
                           
                        
								
								}
							});
						},
					});
				});
			}
		});
	});
}); 

$(document).ready(function(){
//Check geolocation success 
    if (navigator.geolocation) {

// Geolocation API not supported by current browser
        }  else {
           console.log('Geolocation API is not supported by your browser')
           };
        });

// Get latitude and longitude
        navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

//API URL based on user's current location
        var weatherURL2 = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon=" + long + "&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";

//API URL 5-day/3hr forecast based on user's current location       
        var fiveDay2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long+ "&units=imperial&cnt=12&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";

//API URL for UV index based on user's location
        var uvIndex2 = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";

//API call to user's current location
$(function() { 
        $.ajax({
            url: weatherURL2,
            dataType: "JSON",
            success: function(data) {

//added moments.js format to weather data
              $("#time").text(moment().format("L"));
  //selected City name, country and icon added to html
                $('#city-date').html("<h3>"  + data.name  +' ' + data.sys.country + ' ' + "<img src='https://openweathermap.org/img/w/" +  data.weather[0].icon + ".png'>"); 
   //selected city temperature added to html   
   $('#temp').html("Temp: " + data.main.temp + "°F");

//selected city's humidity information added to html               
                $('#hum').html("Hum: " + data.main.humidity);
  //selected wind speed atted to HTML             
                $('#wind').html("Wind: " + data.wind.speed + ' ' + "MPH");

//API 5day/3hr API call to user's current location
                $.ajax({
                  url: fiveDay2,
                  dataType: "JSON",
                  success: function(data) {
        //setting up a variable to be inserted into HTML as list item based on location value from user selected data, moments.js to format time, icon, temp, and humidity
                      var weeklyForecast = "";
                      $.each(data.list, function(index, value) {
                        weeklyForecast += "<p >" // Opening paragraph tag
                        weeklyForecast += moment(value.dt_txt).format("L");// Day
                        weeklyForecast += "<br>" + "<img src='https://openweathermap.org/img/w/" + value.weather[0].icon + ".png'> </br>" // Icon
                        weeklyForecast += "<br>Temp:"+' '  + value.main.temp + "&degF" + "</br>" ; // Description
                        weeklyForecast += "<br> Humidity:"+' '  + value.main.humidity + "%"+ "</br>" ; // Description
                        weeklyForecast += "</p>" // Closing paragraph tag
                          });
                          $(".five-container").html(weeklyForecast);
 
//making an API call to get the user selected city's UV data
                          $.ajax({
                            url: uvIndex2,
                           type: "GET",
                            dataType: "JSON",
                            success: function(data) {
                          
                               $('#uv').html(+' '+ data.value);
                         
        
        
                            }
                          });

                      
   
            }
            });      

//Setting up an input search function
$('.btn').click(function (){
  
//variable that contains the input value
    var input = $("input:text").val();

    
//5 day/3hr forecast API URL
    var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&units=imperial&cnt=12&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
//user input city name search URL
     var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
//User input-selected UV search URL
     var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?q=" + input + "&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";

//storing button input to local storage 
   localStorage.setItem(".btn",(input));
//setting up a list variable to append user input
       var li = "<li>" + input + "</li>";
           $('.list-group').append(li)
     

           

//Duplicating ajax URLs, calls, and individual parameters to appear on usuer input based on the steps in current locaiton 
      $.ajax({
      url: weatherURL,
      dataType: "JSON",
      success: function(data) {
        $("#time").text(moment().format("LLL"));
          $('#city-date').html("<h3>"  + data.name  +' ' + data.sys.country + ' ' + "<img src='https://openweathermap.org/img/w/" +  data.weather[0].icon + ".png'>"); 

          $('#temp').html("Temp: " + data.main.temp + "°F");
         
          $('#hum').html("Hum: " + data.main.humidity);
         
          $('#wind').html("Wind: " + data.wind.speed + ' ' + "MPH");
         

          $.ajax({
            url: fiveDay,
            dataType: "JSON",
            success: function(data) {

                var weeklyForecast = "";
                $.each(data.list, function(index, value) {
                  weeklyForecast += "<p >" // Opening paragraph tag
                  weeklyForecast += moment(value.dt_txt).format("L");// Day
                  weeklyForecast += "<br>" + "<img src='https://openweathermap.org/img/w/" + value.weather[0].icon + ".png'> </br>" // Icon
                  weeklyForecast += "<br>Temp:"+' '  + value.main.temp + "&degF" + "</br>" ; // Description
                  weeklyForecast += "<br> Humidity:"+' '  + value.main.humidity + "%"+ "</br>" ; // Description
                  weeklyForecast += "</p>" // Closing paragraph tag
                    });
             

                $(".five-container").html(weeklyForecast);
                    
                
                $.ajax({
                    // https:// added
                    url: uvIndex,
                   type: "GET",
                    dataType: "JSON",
                    success: function(data) {
                     
                       $('#uv').html(+' '+ data.value);
                 


                    }
                        
                
                  });
            
            }
       
          });
     },   
  }); 


});
            }
});
 
});});
 
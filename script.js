$(document).ready(function(){
    /*//Check geolocation success 
    if (navigator.geolocation) {
      console.log('Geolocation API success') 

      // Geolocation API not supported by current browser
      }  else {
         console.log('Geolocation API is not supported by your browser')
         };
      });

      // Get latitude and longitude
      navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var long = position.coords.longitude;

      console.log("Your latitude is: " + lat + " and your longitude is: " + long);
*/

$('.btn').click(function (){

    var input = $("input:text").val();
    
    //var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?q="+input+"";

    var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?q="+input+"&units=imperial&&cnt=5&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";

    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q="+input+"&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";

    var uvIndex = "http://api.openweathermap.org/data/2.5/uvi?&appid=ed2d8b9a647015246d1c2a69c8fa34a3&q="+input+""


    localStorage.setItem(".btn",(input));
       var li = "<li>" + input + "</li>";
           $('.list-group').append(li) 

//ajax call for weather  
      $.ajax({
      // http:// added
      url: weatherURL,
      //type: "GET",
      dataType: "JSON",
      success: function(data, weatherURL) {
        $("#time").text(moment().format("LLLL"));
          $('#city-date').html("<h3>"  + data.name  +' ' + data.sys.country + ' ' + "<img src='http://openweathermap.org/img/w/" +  data.weather[0].icon + ".png'>"); 

          $('#temp').html("Temp: " + data.main.temp + "°F");
         
          $('#hum').html("Hum: " + data.main.humidity);
         
          $('#wind').html("Wind: " + data.wind.speed + ' ' + "MPH");
         

          $.ajax({
            // http:// added
            url: fiveDay,
           // type: "GET",
            dataType: "JSON",
            success: function(data) {
                
                var weeklyForecast = "";
                $.each(data.list, function(index, value) {
                  weeklyForecast += "<p >" // Opening paragraph tag
                  weeklyForecast += moment().format("LLLL")// Day
                  weeklyForecast += "<br>" + "<img src='https://openweathermap.org/img/w/" + value.weather[0].icon + ".png'> </br>" // Icon
                  weeklyForecast += "<br>Temp:"+' '  + value.main.temp + "&degF" + "</br>" ; // Description
                  weeklyForecast += "<br> Humidity:"+' '  + value.main.humidity + "%"+ "</br>" ; // Description
                  weeklyForecast += "</p>" // Closing paragraph tag
                });
                $(".five-container").html(weeklyForecast);

                $.ajax({
                    // http:// added
                    url: uvIndex,
                   // type: "GET",
                    dataType: "JSON",
                    success: function(data) {
                    $('#uv').html("UV Index: " + value.value);



                    }
                        
                        });
            
            }
       
          });
     },   
  }); 


});



});


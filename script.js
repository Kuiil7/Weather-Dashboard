
    
    function buildQueryURL() {
        // queryURL is the url we'll use to query the API
        var queryURL = "api.openweathermap.org ";
      
        // Begin building an object to contain our API call's query parameters
        // Set the API key
        var queryParams = { "api-key": "ed2d8b9a647015246d1c2a69c8fa34a3" };
      
        // Grab text the user typed into the search input, add to the queryParams object
        queryParams.q = $("#run-search")
          .val()
          .trim();
      
        // Logging the URL so we have access to it for troubleshooting
        console.log("---------------\nURL: " + queryURL + "\n---------------");
        console.log(queryParams)
    
      }


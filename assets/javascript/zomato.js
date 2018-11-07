  // 
var cityNumber = []
console.log(cityNumber);

  function entityID(){

    var queryURL = 
    "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/locations?query=Oakland"

    // "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?cuisines=chinese/location_details?entity_id=36932&entity_type=group"
    //   var queryURL = "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/cuisines?city_id=280"

      $.ajax({
          url:queryURL,
          type:"GET",
          crossDomain: true,
          headers:{
            "user_key": "730e5838ac13eeafae0600c8b1d26457",
          }
        
      }).then(function(response){
        console.log('my object response', response)

        var city = response.location_suggestions[0].entity_id
        console.log(city)
        cityNumber.push(city);
        
        })
  }
    entityID()

    function restInfo(){

        var queryURL = 
        "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?entity_id=" + cityNumber[0] + "&entity_type=zone&radius=25&cuisines=chinese"
    
        // "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?cuisines=chinese/location_details?entity_id=36932&entity_type=group"
        //   var queryURL = "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/cuisines?city_id=280"
    
          $.ajax({
              url:queryURL,
              type:"GET",
              crossDomain: true,
              headers:{
                "user_key": "730e5838ac13eeafae0600c8b1d26457",
              }
            
          }).then(function(response){
            console.log('my object response', response)
    
            
            })
      }
        restInfo()  



    // https://developers.zomato.com/api/v2.1/search?cities&radius=25&cuisines=chinese


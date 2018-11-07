  // 
var cityNumber = []
console.log(cityNumber);
var latPush = []
var lngPush = []
console.log(latPush);

console.log(lngPush);

  function entityID(){

    var queryURL = 
    "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/locations?query=Oakland"

    // "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?cuisines=chinese/location_details?entity_id=36932&entity_type=group"
    //   var queryURL = "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/cuisines?city_id=280"

      $.ajax({
          url:queryURL,
          type:"GET",
          crossDomain: true,
          async: false,
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
           
          
           
           for ( i = 0; i < response.restaurants.length; i++) {
            
           var lat = response.restaurants[i].restaurant.location.latitude
          
           var lng = response.restaurants[i].restaurant.location.longitude
           
           latPush.push(parseFloat(lat))
           lngPush.push(parseFloat(lng))
           
          
          }

          })

          }
        
            
          

          
          
   

        function initMap(){
          setTimeout(function(){
          // Map options
          var options = {
            zoom:12,
            center:{lat:latPush[0], lng:lngPush[0]}
          }
         
          // New map
          var map = new google.maps.Map(document.getElementById('mapBox'), options);
           
           console.log(latPush);
           

          var markers = [
            {
            coords:{lat:latPush[0], lng:lngPush[0]},
            iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content:'<h1>hello</h1>',
            },
            {
              coords:{lat:latPush[1], lng:lngPush[1]},
              iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
              content:'<h1>hello again</h1>',
            },
            {
              coords:{lat:latPush[2], lng:lngPush[2]},
              content:'<h1>The Greek Theatre</h1>',
            }
            
            
          ];
        
      console.log(markers);
      
          // Loop through markers
          for(var i = 0;i < markers.length;i++){
            // Add marker
            addMarker(markers[i]);
          }
       
          // Add Marker Function
          function addMarker(props){
            var marker = new google.maps.Marker({
              position:props.coords,
              map:map,
              //icon:props.iconImage
            });
      
            // Check for customicon
            if(props.iconImage){
              // Set icon image
              marker.setIcon(props.iconImage);
            }
      
            // Check content
            if(props.content){
              var infoWindow = new google.maps.InfoWindow({
                content:props.content
              });
      
              marker.addListener('click', function(){
                infoWindow.open(map, marker);
              });
             
              
            }
          }
        }, 3000);   
        }
        
        restInfo()  

    // https://developers.zomato.com/api/v2.1/search?cities&radius=25&cuisines=c

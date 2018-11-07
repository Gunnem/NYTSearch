// Set global variables
// These variables are filled in for now. They'll be what user enters.
var cityName = "Berkeley";
// var cuisineType = "afghani";
var cityNumber= [];
console.log(cityNumber);

var cityCuisine= [];
var latPush = []
var lngPush = []


console.log(cityCuisine);

// Function to use prompt result from city name search box, and gets enitiy_ID from Zomato's API. Pushes result to cityNumber
  function entityID(){

    var queryURL1 = 
    "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/locations?query="+ cityName
// console.log(cityName);

      $.ajax({
          url:queryURL1,
          type:"GET",
          crossDomain: true,
          headers:{
            "user_key": "730e5838ac13eeafae0600c8b1d26457",
          }
        
      }).then(function(response){
        // console.log('my object response', response)

        var city = response.location_suggestions[0].entity_id
        console.log(city)
        cityNumber.push(parseFloat(city));
        })
  }
    entityID()

// Function that takes cityNumber and enters it in Zomato's search parameter. This retrieves all the cuisines and their corresponding cuisine ID numbers available in that city. Pushes results to cityCuisine array.
//     function cuisineID(){
//       setTimeout(function(){
//       var queryURL2 = 
//       "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/cuisines?city_id="+ cityNumber[0]
// console.log(cityNumber);

//         $.ajax({
//             url:queryURL2,
//             type:"GET",
//             crossDomain: true,
//             headers:{
//               "user_key": "730e5838ac13eeafae0600c8b1d26457",
//             }
          
//         }).then(function(response){
//           console.log('my cuisine response', response)
  
//           var cuisine = response.cuisines[0].cuisine
//           console.log(cuisine)
//           cityCuisine.push(cuisine);
//           })
//         }, 1000);
//     }
//     cuisineID()

    // Function that uses cityNumber and cityCuisine results into the query paramters to retrieve restaurant info.
    function restInfo(){
      setTimeout(function(){
        var queryURL3 = 
        "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?city_id=" + cityNumber[0] + "&entity_type=zone&radius=25&cuisines=1"
    // console.log(cityNumber[0]);
    // console.log(cityCuisine[0]);
    
    
          $.ajax({
              url:queryURL3,
              type:"GET",
              crossDomain: true,
              headers:{
                "user_key": "730e5838ac13eeafae0600c8b1d26457",
              }
            
          }).then(function(response){
            // console.log('my object response', response)
            for ( i = 0; i < response.restaurants.length; i++) {
              
              var lat = response.restaurants[i].restaurant.location.latitude
             
              var lng = response.restaurants[i].restaurant.location.longitude
              
              latPush.push(parseFloat(lat))
              lngPush.push(parseFloat(lng))
              
             
             }
            
            }) }, 1000); 
          }
         
          restInfo()  
          function initMap(){
            setTimeout(function(){
            // Map options
            var options = {
              zoom:12,
              center:{lat:latPush[0], lng:lngPush[0]}
            }
           
            // New map
            var map = new google.maps.Map(document.getElementById('mapBox'), options);
             
            //  console.log(latPush);
            //  console.log(lngPush);
             
             
  
            var markers = [
              {
              coords:{lat:latPush[0], lng:lngPush[0]},
              content:'<h1>hello</h1>',
              },
              {
                coords:{lat:latPush[1], lng:lngPush[1]},
                content:'<h1>hello again</h1>',
              },
              {
                coords:{lat:latPush[2], lng:lngPush[2]},
                content:'<h1>The Greek Theatre</h1>',
              },
              {
              coords:{lat:latPush[3], lng:lngPush[3]},
              content:'<h1>hello</h1>',
              },
              {
                coords:{lat:latPush[4], lng:lngPush[4]},
                content:'<h1>hello again</h1>',
              },
              {
                coords:{lat:latPush[5], lng:lngPush[5]},
                content:'<h1>hello</h1>',
                },
                {
                  coords:{lat:latPush[6], lng:lngPush[6]},
                  content:'<h1>hello again</h1>',
                },
                {
                  coords:{lat:latPush[7], lng:lngPush[7]},
                  content:'<h1>The Greek Theatre</h1>',
                },
                {
                coords:{lat:latPush[8], lng:lngPush[8]},
                content:'<h1>hello</h1>',
                },
                {
                  coords:{lat:latPush[9], lng:lngPush[9]},
                  content:'<h1>hello again</h1>',
                },
                {
                  coords:{lat:latPush[10], lng:lngPush[10]},
                  content:'<h1>hello</h1>',
                  },
                  {
                    coords:{lat:latPush[11], lng:lngPush[11]},
                    content:'<h1>hello again</h1>',
                  },
                  {
                    coords:{lat:latPush[12], lng:lngPush[12]},
                    content:'<h1>The Greek Theatre</h1>',
                  },
                  {
                  coords:{lat:latPush[13], lng:lngPush[13]},
                  content:'<h1>hello</h1>',
                  },
                  {
                    coords:{lat:latPush[14], lng:lngPush[14]},
                    content:'<h1>hello again</h1>',
                  },
                  {
                    coords:{lat:latPush[15], lng:lngPush[15]},
                    content:'<h1>hello</h1>',
                    },
                    {
                      coords:{lat:latPush[16], lng:lngPush[16]},
                      content:'<h1>hello again</h1>',
                    },
                    {
                      coords:{lat:latPush[17], lng:lngPush[17]},
                      content:'<h1>The Greek Theatre</h1>',
                    },
                    {
                    coords:{lat:latPush[18], lng:lngPush[18]},
                    content:'<h1>hello</h1>',
                    },
                    {
                      coords:{lat:latPush[19], lng:lngPush[19]},
                      content:'<h1>hello again</h1>',
                    },
              
            ];
          
        // console.log(markers);
        
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
          }, 7000);   
          }
          
      
       





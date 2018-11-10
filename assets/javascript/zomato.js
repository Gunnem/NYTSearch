// Set global variables

var cityNumber= [];
var cityCuisine= [];
var latPush = []
var lngPush = []
var nameGlobal = []
var addressGlobal = []
console.log(addressGlobal);

$('.cuisine').hide();

// for (let i = 0; i < addressGlobal.length; i++) {
  

  



    var queryURL1 = 
    "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/locations?query="+ cityName
console.log(cityName);

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
        }).then(restInfo);
 

    // Function that uses cityNumber and cityCuisine results into the query paramters to retrieve restaurant info.
    function restInfo(){
      // setTimeout(function(){
        var queryURL3 = 
        "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?city_id=" + cityNumber + "&entity_type=zone&radius=25&cuisines=" + cuisineGlobal
    
    
    
          $.ajax({
              url:queryURL3,
              type:"GET",
              crossDomain: true,
              headers:{
                "user_key": "730e5838ac13eeafae0600c8b1d26457",
              }
            
          }).then(function(response){
           
        console.log(response);
            for ( i = 0; i < response.restaurants.length; i++) {
               $("#listBox").append(JSON.stringify('<h1>' +response.restaurants[i].restaurant.name +"</h1>"));
               $("#listBox").append(JSON.stringify('<p>' +response.restaurants[i].restaurant.location.address +'</p>'));
              
              
              var name = response.restaurants[i].restaurant.name
              
              var address = response.restaurants[i].restaurant.location.address

              var lat = parseFloat(response.restaurants[i].restaurant.location.latitude)
             
              var lng = parseFloat(response.restaurants[i].restaurant.location.longitude)
              // var imageUrl = response.restaurants[i].restaurant.featured_image
              // var catImage = $("<img>");

              // // Setting the catImage src attribute to imageUrl
              // catImage.attr("src", imageUrl);
              // catImage.attr("alt", "cat image");
              // catImage.attr("id", images)
              // // Prepending the catImage to the images div
              // $("#listBox").append(catImage);
             

              // Creating and storing an image tag
             
              // Setting the catImage src attribute to imageUrl
             
              // Prepending the catImage to the images div
              
              
              latPush.push(lat)
              lngPush.push(lng)
              nameGlobal.push(name)
              addressGlobal.push(address)
             
             }
            
            }).then (function initMap(){
            
              var options = {
                zoom:13,
                center:{lat:latPush[0], lng:lngPush[0]}
              }
             
              // New map
              var map = new google.maps.Map(document.getElementById('mapBox'), options);
               
              //  console.log(latPush);
              //  console.log(lngPush);
               
               
          
              var markers = [
                {
                coords:{lat:latPush[0], lng:lngPush[0]},
              content:'<h3>'+ nameGlobal[0] + '</h3><p>' + addressGlobal[0] + '</p>',
              
                },
                {
                  coords:{lat:latPush[1], lng:lngPush[1]},
                  content:'<h3>'+ nameGlobal[1] + '</h3><p>' + addressGlobal[1] + '</p>',
                  
                },
                {
                  coords:{lat:latPush[2], lng:lngPush[2]},
                  content:'<h3>'+ nameGlobal[2] + '</h3><p>' + addressGlobal[2] + '</p>',
                  
                },
                {
                coords:{lat:latPush[3], lng:lngPush[3]},
                content:'<h3>'+ nameGlobal[3] + '</h3><p>' + addressGlobal[3] + '</p>',
               
                },
                {
                  coords:{lat:latPush[4], lng:lngPush[4]},
                  content:'<h3>'+ nameGlobal[4] + '</h3><p>' + addressGlobal[4] + '</p>',
                 
                },
                {
                  coords:{lat:latPush[5], lng:lngPush[5]},
                  content:'<h3>'+ nameGlobal[5] + '</h3><p>' + addressGlobal[5] + '</p>',
                  },
                  {
                    coords:{lat:latPush[6], lng:lngPush[6]},
                    content:'<h3>'+ nameGlobal[6] + '</h3><p>' + addressGlobal[6] + '</p>',
                  },
                  {
                    coords:{lat:latPush[7], lng:lngPush[7]},
                    content:'<h3>'+ nameGlobal[7] + '</h3><p>' + addressGlobal[7] + '</p>',
                  },
                  {
                  coords:{lat:latPush[8], lng:lngPush[8]},
                  content:'<h3>'+ nameGlobal[8] + '</h3><p>' + addressGlobal[8] + '</p>',
                  },
                  {
                    coords:{lat:latPush[9], lng:lngPush[9]},
                    content:'<h3>'+ nameGlobal[9] + '</h3>'+'<p>' + addressGlobal[9] + '</p>',
                  },
                  {
                    coords:{lat:latPush[10], lng:lngPush[10]},
                    content:'<h3>'+ nameGlobal[10] + '</h3>'+'<p>' + addressGlobal[10] + '</p>',
                    },
                    {
                      coords:{lat:latPush[11], lng:lngPush[11]},
                      content:'<h3>'+ nameGlobal[11] + '</h3>'+'<p>' + addressGlobal[11] + '</p>',
                    },
                    {
                      coords:{lat:latPush[12], lng:lngPush[12]},
                      content:'<h3>'+ nameGlobal[12] + '</h3>'+'<p>' + addressGlobal[12] + '</p>',
                    },
                    {
                    coords:{lat:latPush[13], lng:lngPush[13]},
                    content:'<h3>'+ nameGlobal[13] + '</h3>'+'<p>' + addressGlobal[13] + '</p>',
                    },
                    {
                      coords:{lat:latPush[14], lng:lngPush[14]},
                      content:'<h3>'+ nameGlobal[14] + '</h3><p>' + addressGlobal[14] + '</p>',
                    },
                    {
                      coords:{lat:latPush[15], lng:lngPush[15]},
                      content:'<h3>'+ nameGlobal[15] + '</h3><p>' + addressGlobal[15] + '</p>',
                      },
                      {
                        coords:{lat:latPush[16], lng:lngPush[16]},
                        content:'<h3>'+ nameGlobal[16] + '</h3><p>' + addressGlobal[16] + '</p>',
                      },
                      {
                        coords:{lat:latPush[17], lng:lngPush[17]},
                        content:'<h3>'+ nameGlobal[17] + '</h3><p>' + addressGlobal[17] + '</p>',
                      },
                      {
                      coords:{lat:latPush[18], lng:lngPush[18]},
                      content:'<h3>'+ nameGlobal[18] + '</h3><p>' + addressGlobal[18] + '</p>',
                      },
                      {
                        coords:{lat:latPush[19], lng:lngPush[19]},
                        content:'<h3>'+ nameGlobal[19] + '</h3><p>' + addressGlobal[19] + '</p>',
                      },
                
              ];
            
        
          
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
             cityName = []
             
            })
         
          }

         
         
        
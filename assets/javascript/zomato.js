// Set global variables
// These variables are filled in for now. They'll be what user enters.
var cityName = "Berkeley";
var cityNumber= [];
console.log(cityNumber);
var cityCuisine= [];
console.log(cityCuisine);
var latPush = []
var lngPush = []

var restNameArray = [];
console.log(restNameArray);
var restAddressArray = [];
console.log(restAddressArray);
var restUrlArray = [];
console.log(restUrlArray);

var testArray = ["one","two","three"]
var testArray2 = ["a","b","c"]

// var combinedArray ={restNameArray, restAddressArray, restUrlArray};
// console.log(combinedArray)

for (var i = 0; i < restNameArray.length; i++) {

  $("#ordList").append($("<li><p>" + restNameArray[i] + "<br>" + restAddressArray2[i] + "</p></li>"))
}

console.log($('#ordList'));
// var compiledList = '<ol>'

// combinedArray.forEach(function(combined){
//  compiledList += '<li>'+ combined + '</li>'; 
// });

// compiledList = '<ol>'

// Function to use prompt result from city name search box, and gets enitiy_ID from Zomato's API. Pushes result to cityNumber
  // function entityID(){

  //   var queryURL1 = 
  //   "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/locations?query="+ cityName
// console.log(cityName);

  //     $.ajax({
  //         url:queryURL1,
  //         type:"GET",
  //         crossDomain: true,
  //         headers:{
  //           "user_key": "730e5838ac13eeafae0600c8b1d26457",
  //         }
        
  //     }).then(function(response){
  //       // console.log('my object response', response)

  //       var city = response.location_suggestions[0].entity_id
  //       console.log(city)
  //       cityNumber.push(parseFloat(city));
  //       })
  // }
  //   entityID()

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
     
        var queryURL2 = 
        "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?city_id=280&entity_type=zone&radius=25&cuisines=168"
    // console.log(cityNumber[0]);
    // console.log(cityCuisine[0]);
    
    
          $.ajax({
              url:queryURL2,
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
              
              
              var rName = response.restaurants[i].restaurant.name
              var rAddress = response.restaurants[i].restaurant.location.address
              var rUrl = response.restaurants[i].restaurant.url

              restNameArray.push(rName)
              restAddressArray.push(rAddress)
              restUrlArray.push(rUrl)
}
            
            }) 
         
          }
         
          restInfo()  


         
          
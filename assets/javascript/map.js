

$("#submitButton").on("click", function(event) {
    event.preventDefault();
  
    // This line grabs the input from the textbox
   var cityName1 = $("#cityInput").val().trim();
    cityName.push(cityName1)
    $('.cuisine').show();

});
// $("submitButton").click(function(){
//     $.getScript("assets_javascript_zomato.js");
//   }); 
var cityName = []
var cuisineGlobal = []

// var cuisineIndex = ["193", "168","25", "156", "82", "95"]
// var cuisineType = ["BBQ", "Burger", "chinese", "Greek", "Pizza", "Thai"]
// function renderButtons() {

    

//     // Looping through the array of movies
//     for (var i = 0; i < cuisineIndex.length; i++) {

//       // Then dynamically generating buttons for each movie in the array
//       // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//       var a = $("<button>");
//       // Adding a class of movie to our button
//       a.addClass("cuisine");
//       // Adding a data-attribute
//       a.attr("data-name", cuisineIndex[i]);
//       // Providing the initial button text
//       a.text(cuisineType[i]);
//       // Adding the button to the buttons-view div
//       $("#buttonArea").append(a);
//     }
//   }
// renderButtons()


function displayCuisineInfo() {
var data = $(this).attr("data-name");

cuisineGlobal.push(parseFloat(data))
$.getScript("http://10.0.1.66:8080/assets/javascript/zomato.js");

}

$('.cuisine').hide();
$(document).on("click", ".cuisine", displayCuisineInfo);


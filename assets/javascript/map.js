

$("#submitButton").on("click", function(event) {
    event.preventDefault();
  
    // This line grabs the input from the textbox
   var cityName1 = $("#zipCode").val().trim();
    cityName.push(cityName1)
$.getScript("http://10.0.1.66:8080/assets/javascript/zomato.js");
});
// $("submitButton").click(function(){
//     $.getScript("assets_javascript_zomato.js");
//   }); 
var cityName = []


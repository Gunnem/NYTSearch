
 
//Initializing the Firebase//

 var config = {
   apiKey: "AIzaSyB59Y9d2vxVuuUhuYgL0jqdjBJs6RvAEgI",
   authDomain: "eventfinder-f4e7e.firebaseapp.com",
   databaseURL: "https://eventfinder-f4e7e.firebaseio.com",
   projectId: "eventfinder-f4e7e",
   storageBucket: "eventfinder-f4e7e.appspot.com",
   messagingSenderId: "755767002779"
 };
 firebase.initializeApp(config);

 // Variable to reference the Database//
 var database = firebase.database();



$(document).ready(function () {
    //Convert address tags to google map links - Copyright Michael Jasper 2011
    $('address').each(function () {
        var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
        $(this).html(link);
    });
});
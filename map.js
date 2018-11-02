function initMap(){
    // Map options
    var options = {
      zoom:12,
      center:{lat:37.874921, lng:-122.272063}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('mapBox'), options);

    // Listen for click on map
   
    /*
    // Add marker
    var marker = new google.maps.Marker({
      position:{lat:42.4668,lng:-70.9495},
      map:map,
      icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.InfoWindow({
      content:'<h1>Lynn MA</h1>'
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
    */

    // Array of markers
    var markers = [
      {
      coords:{lat:37.874921, lng:-122.272063},
      iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      content:'<h1>hello</h1>',
      },
      {
        coords:{lat:37.86767, lng:-122.3125},
        iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content:'<h1>hello again</h1>',
      },
      {
        coords:{lat:37.8736,lng:-122.2544},
        content:'<h1>The Greek Theatre</h1>',
      }
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
  }
//    function initMap() {
//      var options = {
//        zoom:12,
//       center:{lat: 37.871593, lng: -122.272743}
//      }

//    var map = new
//    google.maps.Map(document.getElementById("map"), options);
//    console.log(map);

//   //  var marker = new google.maps.Marker({
//   //    position:{lat:37.871853, lng:-122.258423},
//   //    map:map,
//   //    icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
//   //  });

// addMarker({
//   coords:{lat:37.871853, lng:-122.258423},
//   iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//   content:'<h1>hello</h1>',
// });
// addMarker({
//   coords:{lat:37.874921, lng:-122.272063},
//   iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//   content:'<h1>hello</h1>',
//   });


//   function addMarker(props){
//      var marker = new google.maps.Marker({
//      position:props.coords,
//      map:map,
//     //  icon:props.iconImage
//    });
//    //Check for custom icon
//    if(props.iconImage){
//      //set icon image
//      marker.setIcon(props.iconImage);
//    }

//    //check content
//   //  if(props.content){
//   //  var infoWindow = new google.maps.infoWindow({
//   //   content:props.content
//   //  });
 
//   //  marker.addListener('click', function(){
//   //    infoWindow.open(map, marker);
//   //  });
    
//   }
// }

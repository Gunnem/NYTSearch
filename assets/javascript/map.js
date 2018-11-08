console.log(latPush);
console.log(lngPush);


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
      content:'<h1>lslalalal</h1>',
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
  }, 4000);   
  }
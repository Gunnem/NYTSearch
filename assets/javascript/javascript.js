  
  // 
  var queryURL = "https://api.meetup.com/find/groups?zip=94704&radius=50&category=25&order=members&key=20786b507f532e52537c2b18212a395e&sign=true" ;
  console.log(queryURL);
  $.ajax({
      url: queryURL,
      method: 'GET'
  })
 

  

//   var queryURL = "https://api.predicthq.com/v1/events/" ;HTTP/1.1
//   ;
//   console.log(queryURL);
//   $.ajax({
//       url: queryURL,
//       method: 'GET',
//       headers: {
//         "Authorization": "Basic + base64(phq.0nCZeCDEQXPYqL4hmixCmeIrKox3yBhHw6wKL1xi:zusARtiSCWVjmBOOkwCy86pwIRlOammnVb96NYgH)"
//       },
      
      
      



//   var Client = require('predicthq')

// var phq = new Client({access_token: "wTNKEn9UHT77jLsQB1pAdwsMQSSrhp"})

// phq.events.search({q: 'Madonna', rank_level: 5, country:'AU', 'start.gte' : '2016-01-01'})
//     .then(function(results){
//         var events = results.toArray()
//         for(var i=0; i < events.length; i++)
//             console.info(events[i].rank, events[i].category, events[i].title, events[i].start, events[i].location )
//     })
// ES6

// Client ID
// phq.0nCZeCDEQXPYqL4hmixCmeIrKox3yBhHw6wKL1xi
// Client Secret
// zusARtiSCWVjmBOOkwCy86pwIRlOammnVb96NYgH
// Access token
// wTNKEn9UHT77jLsQB1pAdwsMQSSrhp
// // Display the current time
// function currentTime() {
//   var current = moment().local().format('hh:mm:ss A');
//   $("#currentTime").html("The current time is " + current);
//   setTimeout(currentTime, 1000);
// };


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
 'api-key': "749c632c403b429383ae2c86692e4500",
 'q': "car",
 'begin_date': "19900101",
 'end_date': "20000101"
});
$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {

console.log(response);});
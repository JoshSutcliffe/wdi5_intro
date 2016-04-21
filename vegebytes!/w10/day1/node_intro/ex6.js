var http = require('http');

// some libraries we can use
// var request = require('request');

var url = "http://omdbapi.com/?t=jaws";

// the response parantheses is the data that is passed back from the server
// response is sent back as streams, so you have to make events
var callback = function(response) {
  response.setEncoding('utf-8');

  var str = '';

  // // once you have some data, you have to do another call back
  // response.on('data', function(data) {
  //   console.log(data);
  // });

  // creating different streams if its long
  response.on('end', function(data) {
    console.log(data);
  });
}

// dealing with errors
http.get(url, callback).on('error', function(err) {

});


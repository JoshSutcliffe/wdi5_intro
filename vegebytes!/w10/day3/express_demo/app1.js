// need to require express
var app = require('express')();
// then the http module and function call
var server = require('http').Server(app);
var PORT = 3000;

app.get('/', function(request, response) {
  console.log('waguan');
  response.send('<h1>Why Hello There Express<\h1>');
})

// need to listen to a server port as well
server.listen(PORT, function() {
  console.log('listening on port ' + PORT)
});
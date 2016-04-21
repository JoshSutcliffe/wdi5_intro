var http = require('http');
var url = require('url');
var fs = require('fs');

// has callback signature of request and response
var app = function(request, response) {
  console.log(new Date());

  var path = url.parse(request.url).pathname;

  console.log(new Date() + ' ' + path);

// can route it with an if statement
  // if (path === '/') {
  //   response.writeHead(200, {'Content-Type': 'text/html'});
  //   response.write('this is a response');
  //   // this is ending the response
  //   response.end();
  // } else if (path === 'about') {
  //   response.writeHead(200, {'Content-Type': 'text/html'});
  //   response.write('this is a response');
  //   // this is ending the response
  //   response.end();

switch(path) {
  case '/':
    fs.readFile('./home.html', function(error, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data, 'utf-8');
      // this is ending the response
      response.end();
    })
    break;

  case '/about':
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('this is the about page');
    // this is ending the response
    response.end();
    break;

  default:
    response.writeHead(404);
    response.write('404 - this does not exist');
    // this is ending the response
    response.end();
    break;
  }
}

// here is the server
var server = http.createServer(app);
// need to make it listen to a port
server.listen(8001);
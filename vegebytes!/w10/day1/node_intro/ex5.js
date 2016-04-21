var fs = require('fs');

var callback = function(err, data) {
  if (err) {
    console.log('its fucked');
  }

  var str = data.toString().split('\n').length -1;
  console.log(str);
}

fs.readFile(process.argv[2], 'utf-8', callback);
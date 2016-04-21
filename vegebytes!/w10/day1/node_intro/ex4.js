// accept a command line argument for a file name
// print out the number of lines in the file

var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

console.log(buf.toString().split('\n').length - 1);
// how to add a library to node 'fs' is the library that has many functions. you can name the variable anything
var bob = require('fs');

// this doesnt return a string, so you have to add a buffer
var buffer = bob.readFileSync('./excercise1.js');

// turn to string
var str = buffer.toString();

console.log(str);
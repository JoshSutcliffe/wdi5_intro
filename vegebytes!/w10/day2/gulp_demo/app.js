console.log('my app');

// have to install underscore
var $ = require('jquery');
var _ = require('underscore');
var getColor = require('./getColor.js');

console.log('hey there sexy');

console.log(getColor());

console.log( _.sample([3, 5, 7]) );

console.log( $('h1').html() );
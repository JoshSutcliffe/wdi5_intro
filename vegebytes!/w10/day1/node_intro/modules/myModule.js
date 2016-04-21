// this is local as it hasnt be declared for exports
var local = 'bjcdkhd';

// whereas this is can be used in other files
var shouldWeHaveCake = function() {
  // return true;
  console.log('yes lets eat the fucker');
}

// module.exports = shouldWeHaveCake;

// we can also make this a library by turning it into an object
module.exports = { haveCake: shouldWeHaveCake} ;
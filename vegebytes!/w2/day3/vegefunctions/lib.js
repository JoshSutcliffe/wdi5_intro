

// var numbers = [1, 3, 5];

// var printNumber = function() {
//     Things[i]
//   }
// }

// var sample = ["a", "b", "c", "d"];

// var mySample = function(arr, n) {
//   n = n - 1;
//     for (var i = 0; i <= n; i++) {
//       var randomSelector1 = arr[Math.floor(arr.length * Math.random())];
//       console.log(randomSelector1);
//     }
// }

// mySample(sample, 1);


var action = function(elem) {
  console.log(elem);
}

// Higher order functions

// namespacing

var vegebyte = {
  myEach: function(arr, action) {
    for (var i = 0; i < arr.length; i++) {
      action(arr[i]);
    }
  },
  mySample: function(arr, num) {
    if (num === undefined) {
      var index = Math.floor(Math.random() * arr.length); 
      return arr[length];
    } else {
        var result = [];
        for (var i = 0; i <= num; i++) {
          result.push(arr[Math.floor(Math.random() * arr.length)]); 
        }
      return result;
    }
  }
}

var arr = ["a", "b", "c", "d"];

// // define our function with the callback argument
// function some_function(arg1, arg2, callback) {
//     // this generates a random number between
//     // arg1 and arg2
//     var my_number = Math.ceil(Math.random() *
//         (arg1 - arg2) + arg2);
//     // then we're done, so we'll call the callback and
//     // pass our result
//     callback(my_number);
// }
// // call the function
// some_function(5, 15, function(num) {
//     // this anonymous function will run when the
//     // callback is called
//     console.log("callback called! " + num);
// })

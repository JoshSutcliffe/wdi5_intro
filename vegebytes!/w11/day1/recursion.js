// Online factorial example - counts factioral backwards

// function factorial(n, accumulator) {
//   if (n === 0) {
//     return accumulator;
//     debugger
//     console.log(accumulator);
//   } else {
//     console.log(n - 1, n * accumulator);
//     n -= 1;
//     accumulator = accumulator * n;
//     return factorial(n, accumulator);
//   }

// }
// factorial(5, 1); //==>> 120

var factorial = function(n) {
  if (n === 1) {
    console.log(n + " if statement");
    return 1;
  } else {
    console.log(n + " else statement");
    return (n * factorial(n - 1));
    // debugger
  }
  // factorial(n);
  console.log(n);
}

factorial(5);

// ruby example
// def sum(list)
//   if list.length == 1
//     return list[0]
//   else
//     val = list.pop
//     return val + sum(list)
//   end
// end

// sum[3, 4, 5, 7]
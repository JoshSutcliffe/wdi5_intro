console.log("steak and eggs and eggs and steak");

var palindrome = "kinnikinnik"// add name in string here

var palindromeCalculator = function(palindrome) {
  if (palindrome === palindrome.split("").reverse().join("")) {
    console.log(palindrome + " is a palindrome");
  } else if (palindrome !== palindrome.split("").reverse().join("")) {
    console.log(palindrome + " is not a palindrome");
  }
}

palindromeCalculator(palindrome);


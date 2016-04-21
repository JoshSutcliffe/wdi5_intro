console.log("hello there gromit");

var input = "What is 1 plus 1?";

var numberCalculator = function() {
  // search the operators, change them for the symbols e.g. replace plus with +
  // use regex to get rid of everything else
  var numb = input.match(/\d+/g);
  debugger
  // numb = numb.join("");
  // console.log(numb)
}

numberCalculator();

// === testing testing 123 =====

// class CalcTest < Minitest

// def test_one_plus_one
//   calc = Calc.new
//   assert_equal 2, calc.ask('what is 1 plus 1?')
//   end
// end
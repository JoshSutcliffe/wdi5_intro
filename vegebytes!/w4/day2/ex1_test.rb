require 'minitest/autorun'
require 'minitest/reporters'
require './reps'

MiniTest::Reporters.use! MiniTest::Reporters::SpecReporter.new

# words = ["hello", "what", "is", "up", "dude"]

# def lengths(words)
#   words.map do |word|
#     word.length
#   end  
# end

# p lengths(words)

##==================

class LengthsTest < MiniTest::Test

  def test_empty_array
    assert_equal [], lengths([])
  end

  def test_exmample_from_question
    test_arr = %w{hello what is up dude}
    assert_equal [5,4,2,2,4], lengths(test_arr)
  end
    
end
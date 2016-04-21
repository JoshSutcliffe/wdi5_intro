require 'minitest/autorun'
require 'minitest/pride'
# require 'minitest/reporters'

# Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new()

# Test
# ==============================

class PhoneTest < MiniTest::Test

  def test_cleans_number
    number = Phone.new("(123) 456-7890").number
    assert_equal "1234567890", number
  end

   def test_cleans_number_with_dots
    number = Phone.new("123.456.7890").number
    assert_equal "1234567890", number
  end

  def test_valid_when_11_digits_and_first_is_1
    number = Phone.new("11234567890").number
    assert_equal "1234567890", number
  end

  def test_invalid_when_11_digits
    skip
    number = Phone.new("21234567890").number
    assert_equal "0000000000", number
  end

  def test_invalid_when_9_digits
    skip
    number = Phone.new("123456789").number
    assert_equal "0000000000", number
  end

  def test_area_code
    skip
    number = Phone.new("1234567890")
    assert_equal "123", number.area_code
  end

  def test_pretty_print
    skip
    number = Phone.new("1234567890")
    assert_equal "(123) 456-7890", number.to_s
  end
end

# To Test
# ==============================

class Phone

  def initialize(number)
    @number = number

    
  end

  def number
    @number.gsub("(", "").gsub(")", "").gsub("-", "").gsub(" ", "").gsub(".", "")
    if @number.length > 10
      if @number[0] == "1"
        @number.slice(1..10)
      end
    end
  end

  # def cleans_number
  #   new_number = number.split('')
    
  # end

  # def valid_when_11_digits_and_first_is_1
  #   if number.first == 1
  #     if number.length > 9
  #       return number.slice(1..10)
  #     end
  #   end
  # end


end

# Phone.new("11234567890")
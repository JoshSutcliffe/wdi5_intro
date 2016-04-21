require 'pry'

def get_squares(numbers)

  results = []

  numbers.each do |x|
    score1 = Math.sqrt(x)
    if score1 % 1 == 0
      results << x
    end
  end

  p results.uniq.sort
  
end

get_squares([4, 1, 16, 1, 10, 35, 22])


require 'pry'

@dice = [1, 2, 3, 4, 5, 6]
@empty_array = []

def rolling(num)
  if num == 1
    @empty_array << @dice.sample  
  elsif num > 1
    
  end
  # Push into an empty array here
end

rolling(3)
binding.pry
puts @empty_array

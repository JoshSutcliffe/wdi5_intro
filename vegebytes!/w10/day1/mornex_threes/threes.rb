require 'pry'

def threes(num)
  # create new variable that can be changed each time through the loop
  to_divide = num
  # write loop to get to 0
  if to_divide == 0
    p 0
  # need to check if first number can be divided by three
  elsif to_divide % 3 == 0
    print to_divide
    to_divide = to_divide / 3
    puts " 0"
    threes(to_divide)
  # check if you need to add one
  elsif to_divide % 3 == 1
    print to_divide
    to_divide = to_divide - 1
    to_divide = to_divide / 3
    puts " -1"
    threes(to_divide)
  else
    print to_divide
    to_divide = to_divide + 1
    to_divide = to_divide / 3
    puts " 1"
    threes(to_divide)
  end
end

threes(100)


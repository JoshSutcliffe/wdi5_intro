require 'pry'

p "Hello to Dirty Joes, Melbourne's best finger food. How many of you are dining today?"
diners = gets.chomp.to_i

count = 0
@customers = []
@orders = []

while count < diners do
  p "What is your name?"
  @customers << gets.chomp
  p "And what are you having?"
  @orders << gets.chomp
  p "Is that all bruv? y/n"
  answer = gets.upcase.chomp
  if answer == "Y"
    p "Thanks for the order!"
  elsif answer == "N"
    p "What else would you like?"
    @orders << gets.chomp
  else
    p "Invalid response, you don't deserve to order more"
  end
  count += 1 
end

def print_order
  @customers.each do |x|
    i = 0
    p "#{x} has ordered #{@orders[i]}"
    i += i
  end
  p "Thanks for coming to Dirty Joes!"
end

print_order


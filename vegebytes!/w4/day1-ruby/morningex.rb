require 'pry'

# puts 'cheese sandwich'

# a = ["Anil", "Erik", "Jonathan"]

  # a.index[1]
  # a.push("Josh")

# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

  # h[1]
  # h[:two]
  # h["two"]
  # h[3] = "Three"
  # h[:four] = 4

# is = {true => "It's true!", false => "It's false"}

  # "It's true!"
  # "It's false"
  # "It's false"
  # nil
  # nil

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],  # << is shorthand for push
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

users["Jonathan"][:twitter]
users["Erik"][:favorite_numbers].push(7)

users["Erik"][:favorite_numbers]
users["Erik"][:favorite_numbers].min
# below is all question 6
users['Erik'][:favourite_numbers].each do |num|
  
  if num % 2 == 0
    arr << num
  end

end

users['Erik'][:favourite_numbers].select do |num|
  return num % 2 == 0
end

even_numbers = users['Erik'][:favourite_numbers].select do |num|
  num.even?
end

# question 7
users["Jonathan"][:favourite_numbers] & ['Erik'][:favourite_numbers] & ['Anil'][:favourite_numbers]

# question 8
numbers = []

users.each |val|
  val[:favourite_numbers].each do |num|

  end
end











binding.pry
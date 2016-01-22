# animal = {
#   name: "Rover",
#   age: 7,
#   gender: "M",
#   species: "Dog",
#   num_toys: 2
# }

# client = {
#   name: "RSPCA",
#   num_children: 2,
#   age: 42,
#   num_pets: 3
# }
require 'pry'

shelter = []
client = []

class Animal

  attr_accessor(:name, :age, :gender, :species, :num_toys)

  def initialize(name, age, gender, species, num_toys)
    @name = name.capitalize
    @age = age
    @gender = gender.upcase
    @species = species.capitalize
    @num_toys = num_toys
  end

end

animal_entry = Animal.new

class Client

  attr_accessor(:name, :num_children, :age, :num_pets)

  def initialize(name, num_children, age, num_pets)
    @name = name.capitalize
    @num_children = num_children
    @age = age
    @num_pets = num_pets
  end

end

client_entry = Client.new

binding.pry

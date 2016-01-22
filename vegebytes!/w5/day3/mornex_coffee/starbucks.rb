require 'pry'

class NewCoffee

  attr_accessor(:coffee, :sugars, :strength, :name)

  def initialize(coffee, sugars, strength, name)
    @coffee = coffee
    @sugars = sugars
    @strength = strength
    @name = name
    
  end

  def add_to_string
    
  @coffee_orders = ''
  coffee_orders.push(@coffee, @sugars, @strength, @name)
  binding.pry

  end

end

c1 = NewCoffee.new['flat white', 2, 'strong', 'rover']



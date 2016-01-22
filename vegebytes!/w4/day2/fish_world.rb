require 'pry'

fish = {
  name: 'fishy fish',
  health: 100,
  speed: 5
}

# shark = {
#   name: 'sharky shark',
#   health: 500,
#   speed: 20
# }

# ocean_world = []
# ocean_world << fish << shark

class Fish
  # attr_accessor :name, :health # access the name class, calls it and does it for you
  # attr_reader :health #def health
  # attr_writer :health #def health=()

  def initialize(name)
    @name = name
    @health = 100
  end

  # def name 
  #   @name.upcase # you can use this to avoid the attr by making it different
  # end

  def sleep
    @health = @health + 10
  end

  def name
    return @name  
  end

  def name=(new_name)
    @name = new_name
  end

  def health
    return @health
  end

end

class Car

  def accelerate
  end

end

binding.pry
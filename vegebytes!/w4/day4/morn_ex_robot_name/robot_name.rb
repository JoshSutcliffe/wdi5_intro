arr = ('a'..'z').to_a + ('0'..'9').to_a + ('A'..'Z').to_a

class Robot

  attr_accessor(:name)

  def initialize(name)
    @name = name.sample(5).join(' ')
    
  end

end

robot1 = Robot.new(arr)

robot2 = Robot.new(arr)

robot3 = Robot.new(arr)

p robot1
p robot2
p robot3

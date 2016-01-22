require 'pry'

# school = {

# }

# # class AddStudent

#   # def initialize
#   #   school = {}
#   # end

#   def add(nombre, numero)
#     school["Name"] = nombre
#     school["Grade"] = numero
#   end

# # end

# new_student = add.new("John Smith", 4)
# p new_student.add()

# DT's example

class School

  def initialize(name)
    @name = name
    @database = {}
  end

  def db # DB method only needs a hash to make it work
    @database    # and push it into it. Created the variable
  end # of empty hash to do it all in one place
  # This displays a hash

  def add(name, grade) # add is also a method
    
    # @database[grade] = [name]
    # This is how to add to a hash
    # Wrap in [] to make something an array (this will
    # be overwritten if something is inside it)

    # if @database[grade]
    #   @database[grade] << name
    # else
    #   @database[grade] = [name]
    # end
    # This checks if something is there, if so it pushes it in

    # Above can be shortened to:
    @database[grade] ||= []
    @database[grade] << name
    # This adds to the hash
    
  end

  def grade(grade)
    @database[grade]
  end
  # This displays the hash

  def sort
    @database.sort.inject({}) do |name, elem|
      memo[elem.first] = elem.last.sort
  end
  # This sorts both the grades and then the names
  # In the array
      
  end



end






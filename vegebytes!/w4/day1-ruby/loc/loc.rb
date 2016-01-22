require 'pry'

file = ARGV[0]

string = IO.read(file)

count = 0

arr = string.split("\n")

# arr.each do |line| this is to check for nothing on a line and "\n"

#   # unless line == "" #or just use line.empty?
#   unless line.strip.empty?
#     count += 1
#     or line.strip
#   end

# end

# this includes // comments as well

p arr

arr.each do |line|

  unless line
    
end




puts count
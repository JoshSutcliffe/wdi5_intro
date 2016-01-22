require 'httparty'
require 'pry'

url = "http://swapi.co/api/people/"

# result = HTTParty.get('http://www.omdbapi.com/?t=jaws')
result = HTTParty.get(url)

puts "Type Y if you want to see the characters"
answer = gets.chomp.capitalize

if answer == "Y"
  @arr = result["results"]
  @arr.each do |characters| # this loops through the keys from
    p characters["name"] # @arr and printing them
  end
end
binding.pry
# if answer == "Jaws"
#   p result
# end



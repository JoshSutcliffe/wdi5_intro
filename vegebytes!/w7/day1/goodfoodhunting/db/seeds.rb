# %w{dish user like}.each do |file|
#   require "./models/#{file}"
# end

require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

# Examples:

#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# https://github.com/stympy/faker is great for fake data
# Dish.create(name: 'bad man cake', image_url: 'https://i.ytimg.com/vi/KbhwQk8Q-J0/maxresdefault.jpg')

Like.delete_all
Dish.delete_all

30.times do
  Dish.create(name: Faker::Hipster.sentence(1), image_url: 'http://4.bp.blogspot.com/-Dj4WDT0tIXQ/Ug2N815l0FI/AAAAAAAAAWs/8beHpW2AE1M/s1600/IMG_6306.JPG', venue: Faker::Hipster.sentence(1))
end
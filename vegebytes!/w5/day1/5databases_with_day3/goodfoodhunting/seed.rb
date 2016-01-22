require './db_config'
require './models/dish'
require './models/dish_type'
require './models/user'
require './models/like'

DishType.delete_all
Dish.delete_all

DishType.create(name: 'snack')
DishType.create(name: 'dessert')
brunch = DishType.create(name: 'brunch')

Dish.create(name: 'cakepudding', dish_type_id: brunch.id)
# This will empty the database and add these, so we can work on it on the site

# DishType.all.map { |dish_type| dish_type.id  }
DishType.pluck(:id)
# .pluck does the same as create a map

10.times do 
  Dish.create(name: "dish#{count}")
end
# The loop wil randomise what it creates


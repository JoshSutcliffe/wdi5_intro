class DishType < ActiveRecord::Base
  has_many :dishes
  # Telling AR that its linked to the dish.rb page
  # This maps the dis_types table
end
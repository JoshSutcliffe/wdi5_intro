class Dish < ActiveRecord::Base

  belongs_to :dish_type
  # Telling AR that its linked to the dish_type.rb page
  # This maps the dishes table
  has_many :likes

  validates :name, presence: true
  # How to make sure the input boxes for a new dish have something from them
  # Search for ActiveRecord for validations - there are loads
end
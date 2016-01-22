require 'active_record'
# This is the library we are using
require 'pry'

options = {
  adapter: 'postgresql',
  # username: 'josh',
  database: 'goodfoodhunting'
}

ActiveRecord::Base.establish_connection(options)
# This is a call to the database using active record

class Dish < ActiveRecord::Base
  belongs_to :dish_type
end

class DishType < ActiveRecord::Base
  has_many :dish
  # This is to link the two as well
  # Don't use plurals in these sections
end
binding.pry

# How to connect data tables
# select * from dishes join dish_types on (dishes.dish_type_id = dish_types_id) where dishes.id = 1

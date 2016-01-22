require 'pry'
require 'active_record'
 # Using the encrypted password gem

ActiveRecord::Base.logger = Logger.new(STDERR)

require './db_config'
require './models/dish'
require './models/dish_type'
require './models/user'
require './models/like'

binding.pry
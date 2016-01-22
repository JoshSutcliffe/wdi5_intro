require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'goodfoodhunting'
}

ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || options)
# This just connects to the environment that the site is deployed in
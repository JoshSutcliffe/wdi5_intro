class User < ActiveRecord::Base
  has_secure_password # give me 2 new methods for user object
  # 1. password
  # 2. scrambles the password

  has_many :likes
end
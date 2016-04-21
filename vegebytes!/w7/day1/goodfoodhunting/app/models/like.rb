class Like < ActiveRecord::Base
  belongs_to :dish
  belongs_to :user

  validates :dish_id, presence: true
  # Go to likes controller - this is showing the error message that can be used to put on a page
end

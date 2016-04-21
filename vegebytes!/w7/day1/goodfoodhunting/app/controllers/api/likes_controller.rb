class Api::LikesController < ApplicationController

  def create
    @like = Like.new
    @like.dish_id = params[:dish_id]
    @like.user_id = current_user.id
    # current_user is accessed from parent folder - application controller
    # helper methods can be called from anywhere
    if @like.save
      # Counting the amount of likes here, sending it back to the API
      count = Dish.find(params[:dish_id]).likes.count
      
      render json: { count: count }, status: 201 # This is the code for successfully creating something
    else
      render json: @like.errors
      # We can use the json errors on the screen if something goes wrong
    end
  end

end

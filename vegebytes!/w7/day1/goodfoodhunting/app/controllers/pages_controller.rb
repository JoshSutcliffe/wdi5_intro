class PagesController < ApplicationController
  # Uses the layout created in the session page
  # Becomes default for all methods in the class
  layout 'session'

  def home
    redirect_to '/login' unless logged_in?
  end

  def show_dish
    @dish = Dish.find(params[:id])
    @comments = @dish.comments
    # raise
    # @comments = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new
    @comment.body = params[:new_comment]
    @comment.dish_id = params[:dish_id]
    @comment.save

    # @dish = Dish.find(params[:id])
    # "/dishes/#{ params[:id] }"
    redirect_to '/dishes/#{ params[:id] }'
  end

end
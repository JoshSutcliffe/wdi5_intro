# Second part of the routing from routes file
class Admin::DishesController < ApplicationController
  # Tells the route which file to go to
  def index
    # This will take it to the index file in views
    @dishes = Dish.all

    render :index
  end

  def new
    @dish = Dish.new
    # The above is needed for the rails form helper to work 
  end

  def create
    # Below creates the dish and redirects elsewhere
    @dish = Dish.new
    @dish.name = params[:name]
    @dish.image_url = params[:image_url]
    @dish.venue = params[:venue]
    @dish.save
    redirect_to '/admin/dishes'
  end

  def show
    @dish = Dish.find(params[:id])
  end

  def edit
    @dish = Dish.find(params[:id])
  end

  def update
    @dish = Dish.find(params[:id])
    @dish.name = params[:name]
    @dish.venue = params[:venue]
    @dish.save
    redirect_to '/admin/dishes'
  end

  def destroy
    dish = Dish.find(params[:id])
    dish.destroy
    redirect_to '/admin/dishes'
  end

end
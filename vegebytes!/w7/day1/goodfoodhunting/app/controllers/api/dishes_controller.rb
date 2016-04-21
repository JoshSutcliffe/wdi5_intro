class Api::DishesController < ApplicationController

# We are using this to show JSON from AJAX here
  def index
    # Allowing the load more button work for food truckin
    # params[:offset] ||= 0
    @dishes = Dish.offset(params[:offset]).limit(4)

    # Building JSON format for ourselves
    # @dishes = @dishes.map do |dish|
    #   { name: dish.name, count: dish.counter }
    # end

    # Adding the method here adds whats passed to the front end
    # The method counter is at dish.rb page
    render json: @dishes, methods: [:counter], status: 200
  end

  # added to create a one dish truck show page
  def show
    @dish = Dish.find(params[:id])
    render json: @dish, status: 200
    
  end

  def create
    @dish = Dish.new
    @dish.name = params[:dish][:name]
    @dish.save
    render json: @dish
  end

end
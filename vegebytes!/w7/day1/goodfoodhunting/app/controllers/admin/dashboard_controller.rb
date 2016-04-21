class Admin::DashboardController < ApplicationController

  def index
    @dish = Dish.all
    @like = Like.all
  end

end
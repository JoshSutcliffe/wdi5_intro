class Admin::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    # Below creates the dish and redirects elsewhere
    # raise 'hey'
    # chekc admin/users/new form for the new way to add data
    # @user = User.new(params[:user])
    # need to filter this for security reasons though - user_params
    @user = User.new(user_params)
    @user.save
    redirect_to '/admin/users'
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    # @user.name = params[:name]
    @user.update(user_params)
    @user.save
    redirect_to '/admin/users'
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to '/admin/users'
  end

  def user_params
    # This is called whitelisting, filters though the hash and only allows what you want it to allow
    # Everything not after permit will not be allowed to save to db
    params.require(:user).permit(:name)
  end

end
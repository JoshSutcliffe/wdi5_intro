class SessionController < ApplicationController
  # Its inherited from application SessionController

  # creating a new session
  def new
    # Layout false kills the stylesheet
    render :new #layout: false
  end

  # Now creating a user
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      # Checking if password matches email
      # beloe creates the new session
      session[:user_id] = user.id
      redirect_to '/'
    else
      render :new
      
    end
    
  end
end
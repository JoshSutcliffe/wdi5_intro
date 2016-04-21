Rails.application.routes.draw do
  # This is where all the routes go

  # For a home request - shows where the route is - in controllers folder
              # Controller#Method
  # get '/' => 'dishes#index'
  # get '/dishes/new' => 'dishes#new'
  # post '/dishes' => 'dishes#create'
  # get '/dishes/:id' => 'dishes#show'
  # get 'dishes/:id/edit' => 'dishes#edit'
  # patch 'dishes/:id' => 'dishes#update'
  # delete 'dishes/:id' => 'dishes#delete'

  # setting the home page
  get '/' => 'pages#home'

  # to allow comments to work
  post '/dishes/:id' => 'pages#create'


  # Worth making a new new controller for logins - not a part of the other controllers
  get '/login' => 'session#new'
  post '/login' => 'session#create'

  get '/dishes/:id' => 'pages#show_dish'

  # Doing resources generates all the links for us
  # Namespace is to create an area for specific things e.g. admin, api's etc
  namespace :admin do
    resources :dishes # use only/except [:edit, new] to show specific routes

    get '/dashboard' => 'dashboard#index'
    # Must have route for the index though
    # get '/' => 'dishes#index'
    root 'dashboard#index'

    # get '/users' => 'users#index'
    # get ''
    resources :users
    resources :likes
  end

  namespace :api do
    resources :dishes do
      resources :likes, only: [:create]
    end
  end

  # post '/api/dishes/:id/likes' => ''

end

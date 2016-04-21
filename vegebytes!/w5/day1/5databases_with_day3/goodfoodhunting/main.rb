require 'sinatra'   
require 'pg'
require './db_config'

# %w{dish dish_type user}.each do |file|
#   require "./models/#{file}"
# end
require './models/dish'
require './models/dish_type'
require './models/user'
require './models/like'
# The loop will load all the commented files above


configure :development do |c|
  require 'pry'
  require 'sinatra/reloader'
  c.also_reload './models/*'
end
# This shows the things that are only in use in development mode - are ignored when site goes live

binding.pry

enable :sessions
# Works like a hash, is a sinatra session. enables cookies and sessions to happen

helpers do

  def logged_in?
    # if current_user
    #   return true
    # else
    #   return false
    # end
    # Turning the object into a true or false statement by:
    !!current_user
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

end

# Method to run sql so you don't have to type it out on every page
def run_sql(sql)
  db = PG.connect(dbname: 'goodfoodhunting')
  results = db.exec(sql)
  db.close
  return results
end

get '/' do
  # db = PG.connect(dbname: 'goodfoodhunting') # This connects to the database
  # sql = 'SELECT * FROM dishes;' # This selects what to do with the db
  # @dishes = db.exec(sql) # this is opening the database
  # db.close 

  # sql = 'SELECT * FROM dish_types;'
  # @dish_types = run_sql(sql)
  @dish_types = DishType.all
  # This does the same as the comments above it using Active Record

  if params[:dish_type_id]
    # sql = "SELECT * FROM dishes WHERE dish_type_id = #{ params[:dish_type_id] }" # no longer needed because of below
    @dishes = Dish.where(dish_type_id: params[:dish_type_id]) #this line is using active record
  else
    sql = 'SELECT * FROM dishes;'
    @dishes = Dish.all #this line is using active record
  end
    
  # @dishes = run_sql(sql) # no longer needed because of below
    erb :index
end

# Show the dish types page
get '/dish/dish_types' do
  @dish_types = DishType.all
  erb :dish_types

end

# This shows the new dish form
get '/dishes/new' do
  @dish = Dish.new
  @dish_types = DishType.all
  erb :new
end

# This is to show the new dish that has been created
post '/dishes' do
  # db = PG.connect(dbname: 'goodfoodhunting')
  sql = "INSERT INTO dishes (name, image_url, venue, dish_type_id) VALUES ('#{ params[:name]}', '#{params[:image_url]}', '#{ params[:venue]}', '#{ params[:dish_type_id]}');"

  # return sql - we can use this to print stuff from sql
  # good way to use console.log

  # @dishes = db.exec(sql) 
  # db.close 
  @dish = Dish.new
  @dish.name = params[:name]
  @dish.image_url = params[:image_url]
  @dish.dish_type_id = params[:dish_type_id]
  if @dish.save # This is all using active record
    # @dish.save checks if there are error messages in the inputs from the user
    redirect to '/'
  else
    @dish_types = DishType.all
    # Above is a variable that lists a dropdown box, so it has to be taken over again
    erb :new
  end

  # run_sql(sql)

  # You should redirect straight after a form, otherwise 
  # multiple records can be created in the database
  # redirect to '/'

end

# show single dish
get '/dishes/:id' do
  # sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  @dish = Dish.find(params[:id]) #Above isn't needed now, active recrod does it
  erb :show
end

# get the update form
get '/dishes/:id/edit' do
  sql = 'SELECT * FROM dish_types;'
  @dish_types = run_sql(sql)

  # sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  # pg always returns a collection - putting the [0] pulls what your searching for out of the array
  # @dish = run_sql(sql)[0]

  # Active record can do all of the above
  @dish = Dish.new.find(params[:id])

  erb :edit
end

# update the dish
put '/dishes/:id' do 

  # sql = "UPDATE dishes SET name = '#{ params[:name] }', image_url = '#{ params[:image_url] }', venue = '#{ params[:venue] }', dish_type_id = '#{ params[:dish_type_id]}' WHERE id = #{params[:id] };"
  # redirect to another page with a get request
  # run_sql(sql)

  # Active record can do all of the above
  @dish = Dish.new.find(params[:id])

  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.dish_type_id = params[:dish_type_id]
  dish.save

  redirect to "/dishes/#{ params[:id] }"

end

# this is to delete a record in the system
delete '/dishes/:id' do
  #  delete dish at id
  # sql = "DELETE FROM dishes WHERE id = #{ params[:id] };"
  # run_sql(sql)

  # Using active record to delete - same as above
  dish = Dish.new.find(params[:id])
  dish.destroy

  # redirect to home
  redirect to '/'
end

# Adding a like
post '/likes' do

  # Check if someone is logged in on the like.rb file

  like = Like.new # This creates the new like in the db
  like.user_id = current_user.id 
  like.dish_id = params[:dish_id]
  if like.save
    redirect to '/'
  end

end

# Deleting a like
delete '/likes' do
  likes = Like.where(user_id: current_user.id, dish_id: params[:dish_id])
  likes.each do |like|
    like.destroy # Destroy deltes the database
  end
  redirect to '/'
end

# Authentication =========================

# Show the form - following three are RESTFUL conventions - creating a session
get '/session/new' do
  erb :login
end

# Do the log in
post '/session' do
  # Serach for user
  user = User.find_by(email: params[:email])
  # user = User.where(email: params[:email]).first, is the same as above

  # Authenticate the password
  if user  && user.authenticate(params[:password])
    # create a session
    session[:user_id] = user.id
    # session[:user_id] creates a new session, we can push anything into the hash to create the session
    # Just use something small that can't be changed - in case they edit their profile and because cookies are small

    # redirect somewhere else
    redirect to '/'
  else
    # stay on the login form for now
    erb :login
  end

end

# do the logout
delete '/session' do
  # delete the session
  session[:user_id] = nil

  redirect to '/session/new'

end








require 'sinatra/reloader'     
require 'sinatra'
require 'pg'

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

  sql = 'SELECT * FROM dish_types;'
  @dish_types = run_sql(sql)

  if params[:dish_type_id]
    sql = "SELECT * FROM dishes WHERE dish_type_id = #{ params[:dish_type_id] }"
  else
    sql = 'SELECT * FROM dishes;'
  end
    @dishes = run_sql(sql)
    erb :index
end

# This shows the new dish form
get '/dishes/new' do
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

  run_sql(sql)

  # You should redirect straight after a form, otherwise 
  # multiple records can be created in the database
  redirect to '/'

end

# show single dish
get '/dishes/:id' do
  sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  @dish = run_sql(sql)[0]
  erb :show
end

# get the update form
get '/dishes/:id/edit' do
  sql = 'SELECT * FROM dish_types;'
  @dish_types = run_sql(sql)

  sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  # pg always returns a collection - putting the [0] pulls what your searching for out of the array
  @dish = run_sql(sql)[0]
  erb :edit
end

# update the dish
put '/dishes/:id' do 

  sql = "UPDATE dishes SET name = '#{ params[:name] }', image_url = '#{ params[:image_url] }', venue = '#{ params[:venue] }', dish_type_id = '#{ params[:dish_type_id]}' WHERE id = #{params[:id] };"
  # redirect to another page with a get request

  run_sql(sql)
  redirect to "/dishes/#{ params[:id] }"

end

# this is to delete a record in the system
delete '/dishes/:id' do
  raise 'yay'
  #  delete dish at id
  sql = "DELETE FROM dishes WHERE id = #{ params[:id] };"
  run_sql(sql)

  # redirect to home
  redirect to '/'
end






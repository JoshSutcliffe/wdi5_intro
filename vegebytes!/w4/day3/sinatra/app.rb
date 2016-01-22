require 'sinatra'

get '/' do
  erb :index # this grabs the file names in views
end

get '/about' do
  erb :about # Other pages should always be in about
end

# dynamic route
get '/hello/:name' do
  "hello name, #{ params[:name] }"
end

get '/calc/multiply/:num1/:num2' do
  num1 = params[:num1] # always use params when 
  num1_i = num1.to_i # using the url and grabbing
  num2 = params[:num2] # info back and forth
  num2_i = num2.to_i
  "Your answer is #{num1_i * num2_i}"
end
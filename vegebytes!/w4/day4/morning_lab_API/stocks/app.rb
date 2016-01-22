require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb :index
end

# by adding the ticker after the stock, you can add in any stovk value
# the : shows that its dynamic and the thing that follows should be a variable
get '/stock/:ticker' do
  # this is user to take the information that was passed into the param and move it along pages
  result = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:ticker])
  @last_Trade = result[params[:ticker]].lastTrade
  erb(:stock)
end


# this is used to redirect to the stock.erb page with a pretty URL
# without it it won't find the page
get '/stock' do
  redirect to "/stock/#{ params[:ticker] }"
end
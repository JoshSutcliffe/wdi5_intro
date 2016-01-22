require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require 'pry'

# Add in google did you mean?
# What if someone types a special character e.g. ?!'

# Use when I need to connect to the database
def run_db(sql)
  db = PG.connect(dbname: 'moviedb') 
  results = db.exec(sql) 
  db.close
  results # have to return what the database finds here
end

get '/' do
  erb :index
end

get '/movie' do
  url = "http://www.omdbapi.com/?s=#{params[:new_movie]}"
  @movie_result = HTTParty.get(url) #this is capitalised
  @result = @movie_result['Search']

  erb(:about)
end

get '/show/:imdbID' do
  # Going to search the db here
  sql = "select * from movies_in_db where imdbid = '#{params[:imdbID]}';"  
  result = run_db(sql)
  # check the database before the if/else, create variable and check it

  # using result.count to check if there is anything in there
  if result.count > 0

    @imdbid_result = result[0]
    @poster = @imdbid_result['poster']

    erb(:show) # go to show page now
  
  else # Otherwise this part adds to the db
    url = "http://www.omdbapi.com/?i=#{params[:imdbID]}"
    to_sort = HTTParty.get(url) #this is capitalised
    
    @imdbid_result = {}

    # function here to downcase to_sort
    def for_sorting(to_sort)
      to_sort.each do |key_value_pair|
        @imdbid_result[key_value_pair.first.downcase] = key_value_pair.last
      end
    end

    for_sorting(to_sort)

    @poster = @imdbid_result['poster']
    sql = "INSERT INTO movies_in_db (title, year, director, plot, poster, actors, awards, writers, genre, imdbrating, imdbid) VALUES ('#{ @imdbid_result["title"] }', '#{ @imdbid_result["year"] }', '#{ @imdbid_result["director"] }', '#{ @imdbid_result["plot"] }', '#{ @imdbid_result["poster"] }', '#{ @imdbid_result["actors"] }', '#{ @imdbid_result["awards"] }', '#{ @imdbid_result["writer"] }', '#{ @imdbid_result["genre"] }', '#{ @imdbid_result["imdbrating"] }', '#{ @imdbid_result["imdbid"] }');"

    # above inserts the entry into the database
    run_db(sql)

    erb(:show)

  end

end




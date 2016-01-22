-- <%= @imdbid_result["Title"] %>
-- <%= @imdbid_result["Year"] %>
-- <%= @imdbid_result["Director"] %>
-- <%= @imdbid_result["Plot"] %>
-- <img src="<%= @poster %>" alt="">
-- <%= "Actors: #{@imdbid_result["Actors"]}" %>
-- <%= "Awards: #{@imdbid_result["Awards"]}" %>
-- <%= "Writers: #{@imdbid_result["Writer"]}. " %>
-- <%= "Genre: #{@imdbid_result["Genre"]}. " %>
-- <%= "IMDB Rating: #{@imdbid_result["imdbRating"]}." %>

CREATE DATABASE moviedb;

CREATE TABLE movies_in_db (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(100),
  year VARCHAR(10),
  director VARCHAR(100),
  plot VARCHAR(300),
  poster VARCHAR (500),
  actors VARCHAR(100),
  awards VARCHAR(100),
  writers VARCHAR(100),
  genre VARCHAR(100),
  imdbrating VARCHAR(100),
  imdbid varchar(100)
);







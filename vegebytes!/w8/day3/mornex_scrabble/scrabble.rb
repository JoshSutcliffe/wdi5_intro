require 'pry'

class Scrabble

  # Do i need to be able to access the word that was passed - eg. attraccessor or initialiser
  @pointage = {
    1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2 => ["D", "G"],
    3 => ["B", "C", "M", "P"],
    4 => ["F", "H", "V", "W", "Y"],
    5 => ["K"],
    8 => ["J", "X"],
    10 => ["Q", "Z"]
  }

  def self.score(word)
    # character = word.split, break it into single letters
    characters = word.upcase.split('')

    total = 0

    characters.each do |broken_word|
        value = @pointage.select {|score, letter| letter.include? broken_word }.keys.join.to_i
        total += value
    end

    # @pointage.each do |k, v|
    #   if characters.include? v
    #     total += k
    #   end
    # end

    p "#{word}'s total is #{total}"

  #       total_score = 0
  #   broken_word.each do |letter_in_word|
  #     letter_value = letter_scores.select {|scores, letter| letter.include? letter_in_word }.keys.join.to_i
  #     total_score += letter_value
  #   end
  #   puts "The score for #{ broken_word.join } is #{total_score}!"
  # end

    # pointage.each do |l, p|
    #   # loop through the letters
    #     # if l == character 
    #       # result == l + p
    #     # end
    # end
    # need to loop through scores, count each letter then times by the points
    # add up all the points together
    # p on screen
  end

end

Scrabble.score("cabbage")

# class Factory
#   def beephorn
#     # p "in ass#balls"
#   end

#   def self.turnonlights
#     # p "in ass#self.balls"
#   end
# end
#  car = Factory.new
require 'pry'
words = ["hello", "what", "is", "up", "dude"]

# def lengths(words)
#   words.each do |word| 
#     arr = []
#     numbers =  word.split('').count
#     p arr.push(numbers)
#   end
# end

# lengths(words)  # => [5, 4, 2, 2, 4]

def lengths(words)
  words.map do |word|
    word.length
  end
end

p lengths(words)

# example of testing
# def test(expected, actual)
#   if expected == actual
#     puts ‘yay’
#   else
#     puts ‘fail’
#   end
# end

# # how to call the test
# test([5, 4, 2, 2, 4], lengths(words), "test example")
# test([], length([]), "test empty array")

def transmogrifier(num1, num2, num3) 
  p (num1 * num2) ** num3
end

# transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
# transmogrifier(42, 13, 7)

def toonify(accent, sentence) 
  if accent == "daffy"
    change1 = sentence.gsub(/[s]/, 'th')
    p change1
  elsif accent == "elmer"
    change2 = sentence.gsub(/[r]/, 'w')
    p change2
  else
    p "#{sentence}"
  end
end

toonify("daffy", "so you smell like sausage")

def wordReverse(to_reverse)
  p to_reverse.split.reverse.join(' ')
end

wordReverse("Now I know what a TV dinner feels like")

def letterReverse(to_reverse)
  reverse = to_reverse.split(",")
  reverse.map do |letters|
    p letters.reverse
  end
end

letterReverse("Now I know what a TV dinner feels like")

new_words = ["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"]

def longest(toindex)
    tosort = toindex.sort_by(&:length)
    return tosort[toindex.length - 1]
    # p words.length.max
  # p max_length = to_index.max_by(&:length).length
end

p longest(new_words)

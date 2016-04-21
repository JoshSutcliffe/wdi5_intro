queens = Queens.new(:white => [2, 3], :black => [5, 6])
queens.to_s
# => "O O O O O O O O
      O O O O O O O O
      O O O W O O O O
      O O O O O O O O
      O O O O O O O O
      O O O O O O B O
      O O O O O O O O
      O O O O O O O O"

queens.attack?
# => true
require 'pry'

class Queens

  def initialize (hash = {white: [0, 3], black: [7, 3]})
    @white = hash[:white]
    @black = hash[:black]
    if @white == @black
      raise ArgumentError
    end
  end


  def white
    return @white
  end

  def black
    return @black
  end

  def to_s
    array = [['O','O','O','O','O','O','O','O'],['O','O','O','O','O','O','O','O'],['O','O','O','O','O','O','O','O'],['O','O','O','O','O','O','O','O'],['O','O','O','O','O','O','O','O'],['O','O','O','O','O','O','O','O'],['O','O','O','O','O','O','O','O'],['O','O','O','O','O','O','O','O']]
    whiteIndex1 = @white[0]
    whiteIndex2 = @white[1]
    blackIndex1 = @black[0]
    blackIndex2 = @black[1]
    array[whiteIndex1][whiteIndex2] = "W"
    array[blackIndex1][blackIndex2] = "B"

    newarray = []
    array.each do |x|
      newarray.push(x.join(' '))
      newarray.push("\n")
    end

    newarray.pop

    return newarray.join('')
  end

  def attack?
    if @white[0] == @black[0] || @white[1] == @black[1]
      return true
    elsif @black[0] - @white[0] == @black[1] - @white[1]
      return true
    else return false
    end
  end

end

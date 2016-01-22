require 'pry'

@mapping = {"A" => ["atta", "a"],
              "B" => ["bibbity", "bee"],
              "C" => ["city", "cee"],
              "D" => ["dickety","dee"],
              "E" => ["ebbity","ee"],
              "F" => ["fleventy","ef"],
              "1" => ["eleventy","one"],
              "2" => ["twenty","two"],
              "3" => ["thirty","three"],
              "4" => ["fourty","four"],
              "5" => ["fifty","five"],
              "6" => ["sixty","six"],
              "7" => ["seventy","seven"],
              "8" => ["eighty","eight"],
              "9" => ["ninety","nine"],
              "0" => ["",""]
}

def hex(x, y)
       @mapping.each do |i|
              if i = x
                     @first_answer = @mapping.[x]
                     # x[0][0, 1]
              end

              if i = y
                     @second_answer = @mapping.[y]
                     # y[0][0, 1]
              end
       end

       p "Hex is #{@first_answer} #{@second_answer}"
end

hex("C", "5")
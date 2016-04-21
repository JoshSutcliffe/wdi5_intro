def binary_convert(num)
  
  modulus = []

  while num > 0
    i = num % 2
    modulus << i
    num = num / 2
  end

  p modulus.reverse

end

binary_convert(72)

def decimal_convert(num)

  new_num = []
  new_num << num
  new_num = new_num.to_s.split('').map { |digit| digit.to_i }

  # use the index and 
  new_num = new_num.length

  new_num.times do 
    # need to loop through, adding the sum and increasing the power
    
  end

  
  
end

decimal_convert(100100)






# from pythonds.basic.stack import Stack

# def divideBy2(decNumber):
#     remstack = Stack()

#     while decNumber > 0:
#         rem = decNumber % 2
#         remstack.push(rem)
#         decNumber = decNumber // 2

#     binString = ""
#     while not remstack.isEmpty():
#         binString = binString + str(remstack.pop())

#     return binString

# print(divideBy2(42))
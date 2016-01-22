def philsMap
  [1,2,3].map do |el|
    el * 2
  end
end

def map2(arr, &block)
  block.call(arr)
end

def philsMap2
  map2([1,2,3]) {|el| el * 2}
end

p philsMap2

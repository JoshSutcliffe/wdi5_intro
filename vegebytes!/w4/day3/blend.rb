

smoothie_ingredients = {
  'flax seeds'      => '1 tbsp',
  'chia seeds'      => '1 tbsp',
  'coconut flakes'  => '1 tbsp',
  'spirulina'       => '1 tsp',
  'pumpkin seeds'   => '1 tbsp',
  'oatmeal'         => '1/4 cup',
  'coco powder'     => '1 tbsp',
  'peanut butter'   => '1 tbsp',
  'almonds'         => '1/4 cup',
  'walnuts'         => '1/4 cup',
  'spinach'         => '1/4 cup',
  'greek yogurt'    => '1/4 cup',
  'nutrional yeast' => '1 tbsp',
  'brussel sprouts' => '1/4 cup',
  'asparagus'       => '1/4 cup',
  'kale'            => '1/4 cup',
  'brocoli rabe'    => '1/4 cup',
  'blue berries'    => '1/4 cup',
  'chopped banana'  => '1/2 cup',
  'straw berries'   => '1/4 cup',
  'mango'           => '1/4 cup',
  'hemp milk'       => '1 cup'
}

# s = smoothie_ingredients.keys

def remove_space(str)
  str.gsub(/\s+/, "")
end

class Blender

  def initialize(ingredients)
    @ingredients = ingredients
    @result = ''
  end

  def blend
    @ingredients.each {|i,y| @result += remove_space(i).split('').shuffle.join}
    return @result
  end

end

drink = Blender.new(smoothie_ingredients)
p drink.blend()




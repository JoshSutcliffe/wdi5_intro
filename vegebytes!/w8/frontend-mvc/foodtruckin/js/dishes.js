// Container for many models
var Dishes = Backbone.Collection.extend({
  model: Dish,
  // Where to get data from
  url: 'http://localhost:3000/api/dishes'
});
// Using backbone t create an active record like controller
var Dish = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/api/dishes'
});
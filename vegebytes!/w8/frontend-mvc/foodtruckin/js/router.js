var Router = Backbone.Router.extend({
  routes: {
    "": "showIndex",
    "trucks/:id": "showFoodTruck"
  },

//   var dishes = new Dishes();

// dishes.fetch().done(function() {

//   var indexView = new IndexView({ collection: dishes });
//   $('.container').html(indexView.render().$el);

// });

  showIndex: function() {
    // need to grab all the data
    dishes = new Dishes();
    // go and grab the data
    dishes.fetch().done(function() {
        // tell it where to send the data
        // debugger
        console.log(dishes)
        var indexView = new IndexView({ collection: dishes });
        // debugger
        $('main').html( indexView.render().el );
    });
  },

  showFoodTruck: function(id) {

    var dish = new Dish({ id: id });
    dish.fetch();
    var view = new DetailsView({ model: dish });
    $('.container').html(view.render().el);
  }
});
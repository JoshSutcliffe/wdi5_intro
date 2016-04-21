// Copied from underscore
// Can interpolate data in JS
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

// Creating a new view 
// var SomeView = Backbone.View.extend ({

//   initialize: function() {
//     // change waits the model to finish loading, .render calls the function when its done
//     this.listenTo(this.model, 'change', this.render)
//   },

//   render: function() {
//     var template = $('#details-template').html();
//     var html = Mustache.render(template, this.model.toJSON());
//     this.$el.html(html);
//     return this;
//   }

//   // bam: function() {
//   //   console.log('bam!!!!!!!!')
//   // }

// });

// // adding bb router - combined with router call its all you need to get it going
// var Router = Backbone.Router.extend({
//   routes: {
//     // needs to be a dynamic route
//     "trucks/:id": "showFoodTruck"
//   },

//   showFoodTruck: function(id) {
//     // console.log("showing truck " + id);
//     // $('.container').empty();

//     // Showing just one result on the page without refreshing - using ajax
//     // var options = {
//     //   url: 'http://localhost:3000/api/dishes' + id,
//     // }

//     // $.ajax(options).done(function(truck) {
//     //   $('.container').html(truck.name)
//     // })

//     // now using backbone
//     // .get() is like using find in AR
//     // var dish = dishes.get(id);

//     // Creating a new view
//     // var view = new SomeView({ model: dish });
//     // $('.container').html(view.render().el);

//     // avoiding callbacks
//     var dish = new Dish({ id: id });
//     dish.fetch();
//     var view = new SomeView({ model: dish });
//     $('.container').html(view.render().el);
//   }
// });

var router = new Router();
Backbone.history.start();

// using google maps
// Add location of html to Map()
// var map = new google.maps.Map(document.querySelector('.map'), {
//   // how to enter where the map will start
//   zoom: 14,
//   center: { lat: -37.813155, lng: 144.964078 }
// });

// Backbone uses objects and classes
// It can search for areas of the page for you - dont have to call document
// Treating the like button and counter as a single thing on the page
// var LikeButtonView = Backbone.View.extend({

var options = {
  url: 'http://localhost:3000/api/dishes',
  method: 'get',
  dataType: 'json',
  data: { offset: 0 }
}

// var map = new google.maps.Map(this.$el.find('.map'), {
//   // how to enter where the map will start
//   zoom: 14,
//   center: { lat: -37.813155, lng: 144.964078 }
// });

// We can use Dishes.fetch() to do all our options ajax requests
// var dishes = new Dishes();

// // can now use backbone controller
// // $.ajax(options).done(function(trucks) {
// dishes.fetch().done(function(trucks) {
//   _.each(trucks, function(truck) {


//     var view = new TruckItemView({ model: truck });
//     // Removed because we returned this in truckitemview
//     // view.render();
//     $('.list').append(view.render().el);

//     // Also want to create the map marker per restaurant
//     // marker is the default google pin
//     // var marker = new google.maps.Marker({
//     //   position: { lat: -37.82 , lng: 144.96 },
//     //   map: map,
//     //   title: truck.name
//     // });
//   });
// });

// var offset = 0;

// // Making the load more button work
// $('.load-more').on('click', function() {
//   console.log("regeresting click")

//   offset += 4;

//   var options = {
//     // url: 'http://localhost:3000/api/dishes?offset=4',
//     // data can now do this for us
//     url: 'http://localhost:3000/api/dishes',
//     method: 'get',
//     dataType: 'json',
//     // can use jquery method to create this offset
//     data: { offset: offset }
//   }

//   $.ajax(options).done(function(trucks) {

//     var dishes = new Dishes(trucks);

//     _.each(dishes, function(truck) {
//       var view = new TruckItemView({ model: truck });
//       $('.list').append(view.render().el);
//     })
//   })
// });










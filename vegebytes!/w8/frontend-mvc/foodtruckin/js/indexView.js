var IndexView = Backbone.View.extend({

  className: 'container',

  events: {
    'click .load-more': 'loadMore'
  },

  initialize: function() {
    this.offset = 2;
  },

  loadMore: function(offset) {
    console.log('bdssd')

  // var offset = 0;

  // Making the load more button work

    // offset += 4;

    var options = {
      // url: 'http://localhost:3000/api/dishes?offset=4',
      // data can now do this for us
      url: 'http://localhost:3000/api/dishes',
      method: 'get',
      dataType: 'json',
      // can use jquery method to create this offset
      data: { offset: this.offset }
    };

    this.offset += 4;

    var viewObject = this;

    $.ajax(options).done(function(trucks) {

      var dishes = new Dishes(trucks);

      dishes.each(function(truck) {
        var view = new TruckItemView({ model: truck });
        viewObject.$el.find('.list').append(view.render().el);
      });
    });
  },


  render: function() {
    // should look after trucks item views
    var template = $('#index-template').html();

    var html = Mustache.render(template, {});

    // el is just what is rendered through mustache has gone through the data
    this.$el.html(html);

    var that = this;

    this.collection.each(function(truck) {
      var view = new TruckItemView({ model: truck });
      this.$el.find('.list').append(view.render().el);
    }, this)
    // The final this just changes where it is currently pointing

    var $map = this.$el.find('.map')[0];

    var map = new google.maps.Map($map, {
      // how to enter where the map will start
      zoom: 14,
      center: { lat: -37.813155, lng: 144.964078 }
    });

    return this;
  }
})

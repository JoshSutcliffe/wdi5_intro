// Creating a new view 
var DetailsView = Backbone.View.extend ({

  initialize: function() {
    // change waits the model to finish loading, .render calls the function when its done
    this.listenTo(this.model, 'change', this.render)
  },

  render: function() {
    var template = $('#details-template').html();
    var html = Mustache.render(template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

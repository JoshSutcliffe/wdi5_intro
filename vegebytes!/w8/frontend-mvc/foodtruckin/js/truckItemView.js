var TruckItemView = Backbone.View.extend({

  tagName: 'div',
  className: 'ui-card',
  // We can use the below to make a template of our html
  template: $('#truck-item-template').html(),

  // Below is all to do the slider on click, by changing the left property
  events: {
    'click img': 'slide'
  },

  slide: function() {
    var $wrapper = this.$el.find('.slider-wrapper');

    if ($wrapper.css('left') === '0px') {
      $wrapper.css('left', '-100%');
    } else {
      $wrapper.css('left', '0%');
    }
  },

  render: function() {
    // Getting the template from the index page - the script - to work on
    // var template = $('#truck-item-template').html();

    // creating the template
    // var templateFunction = _.template(template);

    // Need to grab what to add into it
    // var html = templateFunction({ name: this.model.name, image_url: this.model.image_url });
    // This also works
    // var html = templateFunction(this.model);

    // what is sent back as an el
    // this.$el.html(html);
    // this in this context is refers to the class
    // using a return we can remove the render function in app.js
    // return this

    // we could also use this one line with the commented out emplate above, to do this section for us
    // var html = this.template(this.model);
    // this.$el.html(html);

    var html = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }

});


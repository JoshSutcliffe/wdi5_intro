var XmenItemView = Backbone.View.extend({

  tagName: 'div',
  className: 'xmen-card',
  template: $('#xmen-item-template').html(),

  events: {
    'click img': 'slide'
  },

  slide: function() {
    var $wrapper = this.$el.find('.slider-wrapper');

    if ($wrapper.css('right') === '0px') {
      $wrapper.css('right', '100%');
    } else {
      $wrapper.css('right', '0%');
    }
  },

  render: function() {
    var html = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
  
});
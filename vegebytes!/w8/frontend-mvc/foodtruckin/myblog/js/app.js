var HomeView = Backbone.View.extend({
  render: function() {
    this.$el.html("at home")
  }
});

// adding bb router - combined with router call its all you need to get it going
var Router = Backbone.Router.extend({

  routes: {
    "": "home",
    "home": "home",
    "about": "about"
    // these match the id="#home/about" then call a function when they are pressed
  },

  home: function() {
    // console.log("your ET");
    // $('div').html("at home");

    // Calling the HomeView function to split it up into componetns
    var view = new HomeView();
    view.render();
    $('div').html(view.el);
  },

  about: function() {
    console.log("about");
    $('div').html("about");
  }

});

// Allowing back button to work - calls the Router function
var router = new Router();
Backbone.history.start();
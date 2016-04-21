// Need this call for _ to work
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

// Listens to main because it knows thats there already on HTML - event delegation
$('main').on('click', '.like', function() {
  // Inside the function() above is event, jQuery knows to call the event.target on click for us

  // Grabbing the dish id here from the attr below in displayDishes
  var dishId = $(this).closest('.ui-card').attr('data-id')

  // var $counter = $(this).closest('.ui-card').find('.counter')
  // parent goes up a level on the page. closest find the nearest element, find goes back down to the nearest child
  // var orig = parseInt($counter.html(), 10);
  // $counter.html(orig + 1);

  // calling the backend here - ajax
  var options = {
    url: 'http://localhost:3000/api/dishes/' + dishId + '/likes',
    method: 'post',
    dataType: 'json'
  }
  
  var $counter = $(this).closest('.ui-card').find('.counter');

  // Ajax call with options, when its done, we get data back
  $.ajax(options).done(function(data) { // data is just whats returned from json - you can call it whatever
    // This sends the data to dishes controller, that sends it back
    $counter.html(data.count);
  });
});


var options = {
  url: 'http://localhost:3000/api/dishes',
  method: 'get',
  dataType: 'json'
}

var displayDishes = function(dishes) {
  _.each(dishes, function(dish) {
    // Using underscore to to map the API
    // Adding the attr below we can capture the card of the one we click on for likes
    // var $newCard = $('<div>').addClass('ui-card').attr('data-id', dish.id);

    // var $header = $('<div>').addClass('content').html('<div class="right">timestamp</div><img src="https://placeholdit.imgix.net/~text?txtsize=19&txt=200%C3%97200&w=200&h=200" alt="" class="avatar">Username');
    // var $image = $('<div>').addClass('image').html('<img src="' + dish.image_url + '"><span class="like">&hearts;</span>');
    // var $info = $('<div>').addClass('content').html('<h2>' + dish.name + '<h2>');
    // var $footer = $('<div>').addClass('content').html('<span class="right counter">' + dish.counter + '</span><span>bookmark</span>');

    // $newCard.append($header);
    // $newCard.append($image);
    // $newCard.append($info);
    // $newCard.append($footer);

    // ('main').append($newCard)

    // All the above can be discarded as we have entered the markup into the script tag

    var dishTemplate = $('#dish-template').html();
    var templateFunction = _.template(dishTemplate);
    var html = templateFunction(dish);

    $('main').append(html)
  });
};

$.ajax(options).done(displayDishes);






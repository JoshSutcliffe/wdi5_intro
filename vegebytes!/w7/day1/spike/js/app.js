console.log("Skikey");

var options = {
  url: 'http://localhost:3000/api/dishes',
  method: 'get',
  dataType: 'json'
}

$('button').on('click', function() { 

// Below is how you call ajax
// $.ajax(options);

// .done brings the information forward
  $.ajax(options).done(function(data) {
    // console.log(data[0].name); // You can select from the object here
    // $('div').html(data.name); // this is how to display on the screen
    for (var i = 0; i <= data.length; i++) {
      console.log(data[i].name);
    };
  });
});

// var options = {
//   url: 'http://omdbapi.com/?s=jaws',
//   method: 'get',
//   dataType: 'json'
// }

// $('button').on('click', function() { 

// // Below is how you call ajax
// // $.ajax(options);

// // .done brings the information forward
//   $.ajax(options).done(function(result) {
//     $.each(result.Search, function(index, movie) {
//       console.log(movie.Title);
//     })
//   });
// });
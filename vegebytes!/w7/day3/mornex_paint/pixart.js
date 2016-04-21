console.log("Woah baked potato!")

var changeColour = function() {
  $(".brush-color").css({"color" : "new-color"});
  console.log("no errors")
}

$("#set-color").click(changeColour());

// $( "body" ).append( {"<div class="square"></div>"} );


_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var heroes = 
  [
          {
             name: "Wolverine",
             ability: "Sharp things",
             phrase: "I chipped a nail",
             image1: "http://weknowyourdreamz.com/images/wolverine/wolverine-01.jpg",
             image2: "http://i192.photobucket.com/albums/z104/Kulvax07/Renders/Wolverine.png"
          },
          {
             name: "Cyclops",
             ability: "Laz0r eyes",
             phrase: "I can't wink",
             image1: "http://cdn.hitfix.com/photos/5540624/cyclops_article_story_large.jpg",
             image2: "http://i.annihil.us/u/prod/marvel//universe3zx/images/4/45/Cyclops_Head.jpg"
          },
          {
             name: "Prefessor Xavier",
             ability: "Mind laz0rz",
             phrase: "I'm wearing pants",
             image1: "http://vignette1.wikia.nocookie.net/marvelmovies/images/1/17/Charles_Xavier_-_Future.png/revision/latest?cb=20140219112935",
             image2: "http://vignette2.wikia.nocookie.net/marvelcrossroads/images/d/de/Cerebro5.jpg/revision/latest?cb=20130331191413"
          },
          {
             name: "Magneto",
             ability: "Metal",
             phrase: "I hate people",
             image1: "http://static.comicvine.com/uploads/original/9/96464/1758960-mvc2_magneto.jpg",
             image2: "http://www.zbrushcentral.com/attachment.php?attachmentid=395397"
          },
          {
             name: "Mystique",
             ability: "Transformation",
             phrase: "Blue Moon",
             image1: "http://vignette1.wikia.nocookie.net/xmenmovies/images/f/fd/Mystique_18.jpg/revision/latest?cb=20120510202159",
             image2: "http://images.fandango.com/MDCsite/images/featured/201404/Mystique%202%20(585%20x%20363).jpg"
          },
          {
             name: "Jean Grey",
             ability: "Scizophrenia",
             phrase: "I'm bang tidy",
             image1: "http://vignette4.wikia.nocookie.net/x-men/images/f/ff/X-MenJeanGrey02.png/revision/latest?cb=20090121002119",
             image2: "http://i.annihil.us/u/prod/marvel/i/mg/2/b0/521d0642f1e24/landscape_xlarge.jpg"
          }
     ];

var protagonists = new Protagonists(heroes);


// var protagonist = [{name: 'wolverine'},{}]

// var protagonist1 = new Protagonists({ name: "Wolverine", ability: "Sharp things", phrase: "I chipped a nail" });
// var protagonist2 = new Protagonists({ name: "Cyclops", ability: "Laz0r eyes", phrase: "I can't wink" });
// var protagonist3 = new Protagonists({ name: "Prefessor Xavier", ability: "Mind laz0rz",phrase: "I'm wearing pants" });

// protagonists.done(function(heroes) {
  protagonists.each(function(hero) {
    console.log(hero.get('ability'));

    var view = new XmenItemView({ model: hero});
    $('.list').append(view.render().el);
  })
// })




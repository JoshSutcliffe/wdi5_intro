var express = require('express');
var app = express();
// var port = process.env.PORT || 3000;
var config = require('./config.js');

// part of express v4, is a good part of it
// var router = express.Router();
// var userRouter = express.Router();

app.set('views', './views');
app.set('view engine', 'ejs');

// Login
app.use(function(request, response, next) {
  // these are the trhee things that you need and how to interpolate with ejs
  console.log('%s request %s from %s', request.method, request.path, request.ip);
  next();
});

// using the built in login - Morgan
// app.use(morgan());

// these can be different requests - puts, post and render different templates
// router.get('/', function(req, res) {
//   res.render('index');
// });

// userRouter.get('/', function(req, res) {
//   res.send('users list');
// });

// below can route like the above
// just require the file, then select to route object
app.use('/', require('./userRouter.js').router);
// app.use('/users', userRouter);
// using an api on this route
app.use('/users', require('./userRouter.js').userRouter);

app.listen(config.port);
console.log('server started on ' + config.port);


// need to require express and create the variable

var express = require('express');
var userRouter = express.Router();
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

// using an api on this route
userRouter.get('/', function(req, res) {
    // res.send('users list');
  var users = [{name: 'a'}, {name: 'b'}];
  res.json(users).status(200);
});

// here we create an object to send back
module.exports = {
  router: router,
  userRouter: userRouter
};
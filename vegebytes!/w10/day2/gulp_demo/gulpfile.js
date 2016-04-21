var gulp = require('gulp');
// using sass npm i is install gulp-sass --save-dev
var sass = require('gulp-sass');
// Have to install gulp-connect npm install gulp-connect --save-dev
var connect = require('gulp-connect');
// autoprefixer
var autoprefixer = require('gulp-autoprefixer');
// eslint
var eslint = require('gulp-eslint');

// get browserify working
var browserify = require('browserify');
// Don't worry above about what the below do, just put them in there
var source = require('vinyl-source-stream');
var watchify = require('watchify');

// creating the default package to do things for you
var b = watchify(browserify('./app.js'));
gulp.task('bundle', function() {
  return b.bundle()
  .pipe( source('bundle.js') )
  .pipe( gulp.dest('build') )
  .pipe( connect.reload() );
});

gulp.task('lint', function() {
  return gulp.src('./*.js')
  .pipe( eslint() )
  .pipe( eslint.format() )
  .pipe( eslint.failOnError() );
});

// how to write a task - give it a name and then create a function
// gulp.task('test', function() {
//   console.log('testing');
// });

// making a server
gulp.task('server', function() {
  connect.server();
});

// for sass
gulp.task('sass', function() {
  // need to pipe the function
  gulp.src('./scss/*.scss')
  .pipe( sass() )
  // adding autoprefixer - you can add options here, browsers and versions
  .pipe( autoprefixer())
  .pipe( gulp.dest('css') )
  .pipe( connect.reload() );
});

// creating a watch file that looks for other functions
gulp.task('watch', function() {
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./*.js', ['bundle']);
});

// just type gulp to run the defaults
// create a default task - only type in gulp and it will do it - you can create multiple defaults
gulp.task('default', ['server', 'watch']);
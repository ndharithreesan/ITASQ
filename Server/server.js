var express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash')

var app = express();
app.use (cookieParser()); 

var uri = 'mongodb://heroku_app36349004:vfirgt9eko7docia6es2e6304l@ds031812.mongolab.com:31812/heroku_app36349004' 
mongoose.connect(uri);
console.log('connected to mongoose')

var db = mongoose.connection;

db.on('error', function(err){
  console.error(err)
})

app.use(session({ secret: 'donttellanyone' })); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 


require('./config/middleware.js')(app, express, passport);

module.exports = app;
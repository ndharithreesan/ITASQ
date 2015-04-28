var express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash')

var app = express();
app.use (cookieParser()); 

mongoose.connect("mongodb://localhost/itasq");
console.log('connected to mongoose')

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 


require('./config/middleware.js')(app, express, passport);

module.exports = app;
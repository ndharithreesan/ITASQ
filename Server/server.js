var express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash')

var app = express();
app.use (cookieParser()); 

var uri = 'mongodb://MongoLab-7l:aqAlUM5jgiF.KqX8JBavwjJDuvWmP9YmuOifs_O3HBg-@ds034348.mongolab.com:34348/MongoLab-7l' | "mongodb://localhost/itasq"

mongoose.connect(uri);
console.log('connected to mongoose')

app.use(session({ secret: 'donttellanyone' })); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 


require('./config/middleware.js')(app, express, passport);

module.exports = app;
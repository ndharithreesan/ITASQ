var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect("mongodb://localhost/itasq");
console.log('connected to mongoose')

require('./config/middleware.js')(app, express);

module.exports = app;
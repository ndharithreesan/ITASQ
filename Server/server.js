var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/itasq');

require('./config/middleware.js')(app, express);

module.exports = app;
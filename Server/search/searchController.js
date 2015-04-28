var Bing = require('./bingKeys.js')
var _ = require('underscore')

module.exports = {

  searchWeb: function(req, res, next){
    var query = req.body.query;
    Bing.web(query, function(error, res, body){
      console.log('answer!!!!!!!!!!!!!!!!!!', body.d.results);
    },
    {
      top: 50  // Number of results (max 50) 
    });
    next();
    }
  }
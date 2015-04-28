var Bing = require('./bingKeys.js')
var _ = require('underscore')
var validSites = require('./validSites.js')

module.exports = {

  searchWeb: function(req, res, next){
    var query = req.body.query;
    var results;
    var isValid = false;
    Bing.web(query, function(error, resp, body){
      var validCount = 0;
      results = body.d.results
      _.each(results, function(result){
        _.each(validSites, function(site){
          if(result.Url.indexOf(site) > -1){
            validCount++
          }
        })
      })
      console.log('COUNT THIS BIZNESS', validCount/30)

      if(validCount/30 > 0.3){
        isValid = true;
        results = results.splice(0,5);
        res.send({isValid: isValid, results: results})
      } else {
        res.send({isValid: isValid})
        
      }
    },
    {
      top: 30
    });
    }
  }
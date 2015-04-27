var searchController = require('./searchController.js')

module.exports = function (app){

  app.route('/')
    .post(searchController.searchWeb)
}
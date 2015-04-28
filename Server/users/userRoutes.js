var userController = require('./userController.js')

module.exports = function(app){

  app.route('/signup')
    .post(userController.signup)
}
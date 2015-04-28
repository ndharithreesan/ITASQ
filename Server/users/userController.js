
module.exports = {

  signup: function(req,res,next){

    passport.authenticate('local-signup', {
      successRedirect : '/Server/search',
      failureRedirect: '/signup',
      failureFlash: true
    })

  }

}
var passport = require('passport')

module.exports = function(app){

app.post('/signup', function(req,res,next){
  passport.authenticate('local-signup', function(err, user, info){
    if (err) { return next(err); }
    if (!user) { return res.redirect('/'); }

    // req / res held in closure
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.send(user);
    });

  })(req,res,next)
})
}

var LocalStrategy = require('passport-local').Strategy;
var User = require('./userModels.js')

module.exports = function(passport){

   passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

  passport.use('local-signup' , new LocalStrategy(
    function(req, username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { 
          return done (err); 
        } else if (user) {
          return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
        } else {
          var newUser = new User();

          newUser.local.username = username;
          newUser.local.password = newUser.generateHash(password);

          newUser.save(function(err){
            if(err){
              console.error(err);
            }
            return done(null, newUser)
          })
        }
      });
    }
  ));
}
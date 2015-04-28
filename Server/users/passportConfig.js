var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('./userModels.js')

var client = require('../thirdPartyconfig.js')
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
    function(username, password, done) {
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

  passport.use('local-login', new LocalStrategy(
    function(username, password, done){
      User.findOne({username: username},function(err, user){
        if(err){
          return done (err);
        } else if(!user){
          return done(null, false, 'That User does not exist!')
        } else if (!user.validPassword(password)){
          return done(null, false, 'That Password is not valid!')
        } else {
          return (done, user)
        }
      })
    }
  ))

  //Facebook authentication
  passport.use(new FacebookStrategy({

    clientID: client.facebookAuth.clientID,
    clientSecret: client.facebookAuth.clientSecret,
    callbackURL: client.facebookAuth.callbackURL

  }, function(token, refreshToken, profile, done){
    User.findOne({'facebook.id' : profile.id}, function (err, user){
      if(err){
        console.error (err);
        return done (err)
      } else if (user) {
        return done(null, user)
      } else {
        var newUser = new User();
        newUser.facebook.id = profile.id;
        newUser.facebook.name = profile.name.givenName + profile.name.familyName;

        newUser.save(function(err){
          if(err){
            throw (err)
          }
          return done(null, newUser)
        })
      }
    })
  }))


}
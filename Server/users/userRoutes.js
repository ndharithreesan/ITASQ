var passport = require('passport')
var jwt = require('jwt-simple')

module.exports = function(app){

  app.post('/signup', function(req,res,next){
    passport.authenticate('local-signup', function(err, user, info){
      if (err) { 
        return next(err); 
      }
      if (!user) {
       return res.redirect('/'); 
     }
      req.logIn(user, function(err) {
        if (err) {
         return next(err); 
       }
        return res.send(user);
      });

    })(req,res,next)
  })

  app.post('/login', function(req, res, next){
    passport.authenticate('local-login', function(err,user, info){
      if (err){
        return next(err)
      }
      if(!user){
        return res.send(info)
      }
      else {
        var token = jwt.encode(user, 'secret');
         res.json({token: token});
      }
    })
  })

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/#');
  });

  app.get('/facebook', passport.authenticate('facebook'));

  app.get('/facebook/callback', function(req, res, next){
    passport.authenticate('facebook', function(err, user, info){
      if(err){
        return next(err)
      } else {
        var token = jwt.encode(user, 'secret');
        res.json({token:token, user:user})
        res.redirect('/#')
      }
    })(req,res,next)

  })

}
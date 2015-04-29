var ip = var ip = process.env.IP || 'http://localhost';
var port = process.env.PORT || 8080;
module.exports= {
  facebookAuth: {
    clientID : process.env.FACEBOOK_CLIENTID, 
    clientSecret: process.env.FACEBOOK_CLIENTSECRET,
    callbackURL: ip + ':' + port + '/Server/users/facebook/callback'
  }


}
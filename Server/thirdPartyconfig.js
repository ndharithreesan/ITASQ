
module.exports= {
  facebookAuth: {
    clientID : process.env.FACEBOOK_CLIENTID, 
    clientSecret: process.env.FACEBOOK_CLIENTSECRET,
    callbackURL: '/Server/users/facebook/callback'
  }


}
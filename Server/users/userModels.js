var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require ('bcrypt-nodejs')

var userSchema = new Schema ({
  stupidQuestions: {type: Number, default: 0},

  local: {
    username : {type: String, unique: true},
    password: String
  },

  facebook: {
    id: String,
    name: String,
    email: String
  }
})

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
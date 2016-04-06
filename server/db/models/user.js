var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  name : {
    type: String,
    required : false
  },
  password: {
    type: String,
    required: true
  },
  matches: [],
  subscriptions: [],
  userRole: {
    type: String,
    enum: ['Admin', 'Editor', 'User'],
    default: 'User'
  },
  blocks: [],
});

UserSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

UserSchema.methods.validPassword = function(password) {
  console.log(this);
  var user = this;
  return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('User', UserSchema);

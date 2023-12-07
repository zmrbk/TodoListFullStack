const { Schema, model } = require('mongoose');

const User = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  hash_pass: {
    type: String,
  },
  token: {
    type: String,
  },
});

module.exports = model('User', User);

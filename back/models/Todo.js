const { Schema, model } = require('mongoose');

const Todo = new Schema({
  title: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  user_id: {
    type: String,
  },
});

module.exports = model('Todo', Todo);

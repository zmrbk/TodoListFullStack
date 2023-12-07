const Todo = require('../models/Todo');

const create_todo = async (req, res) => {
  const { title, description } = req.body;
  const { user_id } = req.user;
  const todo = {
    title,
    description,
    user_id,
  };
  await Todo.create(todo);
  res.status(201).send({
    message: 'Todo Created',
  });
};

const get_all_todos = async (req, res) => {
  const { user_id } = req.user;
  const todos = await Todo.find({ user_id });
  res.send(todos);
};

const update_todo = async (req, res) => {
  const { user_id } = req.user;
  const { id } = req.params;
  let data = req.body;
  let todo = await Todo.findById(id);

  if (todo.user_id === user_id) {
    todo.title = data.title;
    todo.description = data.description;
    todo.status = data.status;

    todo.save();

    res.status(201).send({
      message: 'Todo update',
    });
  } else {
    res.status(403).send({
      message: 'Some error',
    });
  }
};

const delete_todo = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;
  let todo = await Todo.findById(id);
  if (todo.user_id === user_id) {
    await Todo.findByIdAndDelete(id);
    res.status(201).send({
      message: 'Delete success',
    });
  } else {
    res.status(403).send({
      message: 'Some error',
    });
  }
};

module.exports = {
  create_todo,
  get_all_todos,
  update_todo,
  delete_todo,
};

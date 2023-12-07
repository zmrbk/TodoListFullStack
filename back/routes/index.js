const { Router } = require('express');
const { reg, auth } = require('../middleware/auth_reg');
const verifyToken = require('../middleware/verify');
const { create_todo, get_all_todos, update_todo, delete_todo } = require('../middleware/todos');
let router = Router();

router
  .post('/registration', async (req, res) => {
    reg(req, res);
  })

  .post('/authorization', async (req, res) => {
    auth(req, res);
  })

  .post('/create-todo', verifyToken, async (req, res) => {
    create_todo(req, res);
  })

  .get('/list-todos', verifyToken, async (req, res) => {
    get_all_todos(req, res);
  })

  .put('/todo-update/:id', verifyToken, async (req, res) => {
    update_todo(req, res);
  })

  .delete('/todo-delete/:id', verifyToken, async (req, res) => {
    delete_todo(req, res);
  });

module.exports = router;

export const API = 'http://localhost:5050';
// export const API = 'https://mytodo12345.herokuapp.com';

export const Routes = {
  get: {
    todos: '/list-todos',
  },
  post: {
    reg: '/registration',
    auth: '/authorization',
    create: '/create-todo',
  },
  put: {
    update: '/todo-update/', // + id required
  },
  delete: {
    delete: '/todo-delete/', // + id required
  },
};

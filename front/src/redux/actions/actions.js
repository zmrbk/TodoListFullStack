import { get, post, put, setHeaders, _delete } from '../../api/server';
import { getToken } from '../../configs/localstorage';
import { AUTH, CRUD_TODO, ERROR, LIST_TODO, REG, TOKEN } from './types';

export const authorization = (data) => (dispatch) => {
  post(
    'auth',
    data,
    (res) => {
      dispatch({
        type: AUTH,
        payload: res,
      });
      dispatch(checkToken());
    },
    (err) => {
      dispatch({
        type: ERROR,
        payload: err,
      });
    },
  );
};

export const registration = (data) => (dispatch) => {
  post(
    'reg',
    data,
    (res) => {
      dispatch({
        type: REG,
        payload: res,
      });
      dispatch(checkToken());
    },
    (err) => {
      dispatch({
        type: ERROR,
        payload: err,
      });
    },
  );
};

export const get_list_todos = () => (dispatch) => {
  get('todos', (res) => {
    dispatch({
      type: LIST_TODO,
      payload: res,
    });
  });
};

export const create_todo = (data) => (dispatch) => {
  post(
    'create',
    data,
    (res) => {
      dispatch({
        type: CRUD_TODO,
        payload: 'success',
      });
      dispatch(get_list_todos());
    },
    (err) => {
      dispatch({
        type: ERROR,
        payload: err,
      });
    },
  );
};

export const edit_todo = (id, data) => (dispatch) => {
  put(
    'update',
    id,
    data,
    (res) => {
      dispatch({
        type: CRUD_TODO,
        payload: 'success',
      });
      dispatch(get_list_todos());
    },
    (err) => {
      dispatch({
        type: ERROR,
        payload: err,
      });
    },
  );
};

export const delete_todo = (id) => (dispatch) => {
  _delete(
    'delete',
    id,
    (res) => {
      dispatch(get_list_todos());
    },
    (err) => {
      dispatch({
        type: ERROR,
        payload: err,
      });
    },
  );
};

export const checkToken = () => (dispatch) => {
  let token = getToken();
  setHeaders(token || '');
  dispatch({
    type: TOKEN,
    payload: token ? true : false,
  });
};

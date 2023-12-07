import { combineReducers } from 'redux';
import { crud_todo } from './crud_todo';
import { auth_reg } from './auth_reg';
import { token } from './token';
import { list_todo } from './list_todo';

export const rootReducer = combineReducers({
  auth_reg,
  crud_todo,
  list_todo,
  token,
});

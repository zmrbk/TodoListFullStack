import { LIST_TODO } from '../../actions/types';

const initialState = [];

export const list_todo = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_TODO:
      return payload;
    default:
      return state;
  }
};

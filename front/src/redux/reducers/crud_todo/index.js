import { CRUD_TODO } from '../../actions/types';

const initialState = {
  message: '',
};

export const crud_todo = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CRUD_TODO:
      return { ...state, message: payload };
    default:
      return state;
  }
};

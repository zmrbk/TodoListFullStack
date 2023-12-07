import { AUTH, REG } from '../../actions/types';

const initialState = {};

export const auth_reg = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REG:
      return payload;
    case AUTH:
      return payload;
    default:
      return state;
  }
};

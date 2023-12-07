import { TOKEN } from '../../actions/types';

const initialState = { auth: false };

export const token = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOKEN:
      return { ...state, ['auth']: payload };
    default:
      return state;
  }
};

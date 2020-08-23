import { CHECKING_SIGNUP } from '../actions/actions';

export const defaultState = {
  user: null,
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECKING_SIGNUP:
      return {
        ...state,
        isSigning: true,
      };
    default:
      return state;
  }
};

export default userReducer;

import {
  CHECKING_SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from '../actions/actions';

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
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigning: false,
        user: state.data.user,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        isSigning: false,
      };
    default:
      return state;
  }
};

export default userReducer;

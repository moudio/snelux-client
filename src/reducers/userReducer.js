import {
  CHECKING_SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  LOGGING_IN,
  LOGGIN_SUCCESS,
  LOGGIN_FAILURE,
  LOGOUT_SUCCESS,
  ALL_USERS_FETCHED,
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
        signupErrors: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigning: false,
        user: action.user,
        access: true,
        redirectTo: action.redirect,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        isSigning: false,
        signupErrors: action.errors,
      };
    case LOGGING_IN:
      return {
        ...state,
        isLogginIn: true,
      };
    case LOGGIN_SUCCESS:
      return {
        ...state,
        isLogginIn: false,
        user: action.user,
        access: true,
        redirectTo: action.redirect,
      };
    case LOGGIN_FAILURE:
      return {
        ...state,
        isLogginIn: false,
        loginErrors: action.errors,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        access: false,
        redirectTo: null,
        user: null,
      };
    case ALL_USERS_FETCHED:
      return {
        ...state,
        allUsers: action.users,
      };
    default:
      return state;
  }
};

export default userReducer;

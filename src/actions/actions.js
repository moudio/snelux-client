import axios from 'axios';
export const CHECKING_SIGNUP = 'CHECKING_SIGNUP';

export const attemptSignup = (credentials) => (dispatch) => {
  dispatch({
    type: CHECKING_SIGNUP,
  });
};

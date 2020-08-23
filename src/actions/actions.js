const CHECKING_SIGNUP = 'CHECKING_SIGNUP';

const attemptLogin = (credentials) => (dispatch) => {
  dispatch({
    type: CHECKING_SIGNUP,
  });
};

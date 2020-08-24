import axios from 'axios';

export const CHECKING_SIGNUP = 'CHECKING_SIGNUP';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const attemptSignup = (user) => (dispatch) => {
  dispatch({
    type: CHECKING_SIGNUP,
  });

  setTimeout(() => {
    axios
      .post('http://localhost:3001/api/users/', { user })
      .then((response) => {
        const { data } = response;
        if (data.status === 'created') {
          dispatch({
            type: SIGNUP_SUCCESS,
            user: data.user,
          });
        }
        if (data.status === 500) {
          dispatch({
            type: SIGNUP_ERROR,
            errors: data.errors,
          });
        }
      });
  }, 1000);
};

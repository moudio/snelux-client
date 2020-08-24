import axios from 'axios';

export const CHECKING_SIGNUP = 'CHECKING_SIGNUP';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const attemptSignup = (user) => (dispatch) => {
  dispatch({
    type: CHECKING_SIGNUP,
  });

  axios.post('http://localhost:3001/api/users/', { user }).then((response) => {
    const { data } = response;
    if (data.status === 'created') dispatch(SIGNUP_SUCCESS);
    if (data.status === 500) dispatch(SIGNUP_ERROR);
  });
};

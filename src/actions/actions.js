import axios from 'axios';

export const CHECKING_SIGNUP = 'CHECKING_SIGNUP';

export const attemptSignup = (credentials) => (dispatch) => {
  dispatch({
    type: CHECKING_SIGNUP,
  });

  console.log(credentials);
  axios
    .post('http://localhost:3001/api/users/', credentials)
    .then((response) => console.log(response));
};

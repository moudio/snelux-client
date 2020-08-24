import axios from 'axios';

export const CHECKING_SIGNUP = 'CHECKING_SIGNUP';

export const attemptSignup = (user) => (dispatch) => {
  dispatch({
    type: CHECKING_SIGNUP,
  });

  console.log(user);
  axios
    .post('http://localhost:3001/api/users/', { user })
    .then((response) => console.log(response));
};

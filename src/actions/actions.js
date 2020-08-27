import axios from 'axios';

export const CHECKING_SIGNUP = 'CHECKING_SIGNUP';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGGING_IN = 'CHECKING_LOGGIN';
export const LOGGIN_SUCCESS = 'LOGGIN_SUCCESS';
export const LOGGIN_FAILURE = 'LOGGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const FETCH_ALL_PRODUCTS_SUCCESS = 'FETCH_ALL_PRODUCTS_SUCCESS';

export const fetchProducts = () => (dispatch) => {
  axios.get('http://localhost:3001/api/products').then((response) => {
    const { data } = response.data;
    dispatch({
      type: FETCH_ALL_PRODUCTS_SUCCESS,
      products: data,
    });
  });
};

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
            redirect: '/dashboard',
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

export const attemptLogin = (user) => (dispatch) => {
  dispatch({
    type: LOGGING_IN,
  });

  setTimeout(() => {
    axios
      .post('http://localhost:3001/api/login/', { user })
      .then((response) => {
        const { data } = response;
        if (data.status === 'logged_in') {
          dispatch({
            type: LOGGIN_SUCCESS,
            user: data.user,
            redirect: '/dashboard',
          });
        } else {
          dispatch({
            type: LOGGIN_FAILURE,
            errors: data.errors,
          });
        }
      });
  }, 1000);
};

export const logout = () => (dispatch) => {
  axios.delete('http://localhost:3001/api/logout/').then((response) => {
    const { data } = response;
    if (data.status === 'logged_out') {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    }
  });
};

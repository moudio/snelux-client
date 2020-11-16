import axios from 'axios';

export const CHECKING_SIGNUP = 'CHECKING_SIGNUP';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGGING_IN = 'CHECKING_LOGGIN';
export const LOGGIN_SUCCESS = 'LOGGIN_SUCCESS';
export const LOGGIN_FAILURE = 'LOGGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const FETCH_ALL_PRODUCTS_SUCCESS = 'FETCH_ALL_PRODUCTS_SUCCESS';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const ALL_USERS_FETCHED = 'ALL_USERS_FETCHED';
export const FINISH_PRODUCT_CREATED = 'FINISH_PRODUCT_CREATED';

export const fetchProducts = () => (dispatch) => {
  axios.get('http://localhost:3001/api/products').then((response) => {
    const { data } = response;
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

export const handleCategoryShow = (category) => (dispatch) => {
  console.log('categeroy is ', category);
  axios
    .get(`http://localhost:3001/api/categories/${category}`)
    .then((response) => console.log(response));
};

export const createProduct = (formData) => (dispatch) => {
  fetch('http://localhost:3001/api/products/', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        newProduct: res.product,
      });
      dispatch({
        type: FINISH_PRODUCT_CREATED,
      });
    })

    .catch((error) => console.log(error));
};

export const fetchUserProducts = (id = 1) => (dispatch) => {
  axios
    .get(`http://localhost:3001/api/users/${id}/products`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export const fetchUsers = () => (dispatch) => {
  axios.get('http://localhost:3001/api/users').then((res) => {
    dispatch({
      type: ALL_USERS_FETCHED,
      users: res.data,
    });
  });
};

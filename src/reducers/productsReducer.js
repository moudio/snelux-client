import {
  CREATE_PRODUCT_SUCCESS,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FINISH_ALL_USERS_FETCHED,
} from '../actions/actions';

const initialState = {
  products: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        productCreated: true,
      };

    case FINISH_ALL_USERS_FETCHED:
      return {
        ...state,
        productCreated: false,
      };

    default:
      return state;
  }
};

export default productsReducer;

import { FETCH_ALL_PRODUCTS_SUCCESS } from '../actions/actions';

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
    default:
      return state;
  }
};

export default productsReducer;

const { combineReducers } = require('redux');

import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productsReducer';

export default combineReducers({
  userReducer,
  productReducer,
});

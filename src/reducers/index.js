import { combineReducers } from 'redux';

import userReducer from './userReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  userReducer,
  productsReducer,
});

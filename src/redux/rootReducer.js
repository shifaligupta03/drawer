/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import products from '../components/Products/reducer';

const rootReducer = combineReducers({
  products,

});

export default rootReducer;

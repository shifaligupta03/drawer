import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

const initialState = {};
const middleware = [thunk];

const composedEnhancer = compose(applyMiddleware(...middleware));
// const store = createStore(rootReducer, initialState, composedEnhancer);

const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;

import { FETCH_IMAGE_DATA } from './types';

const initialState = {
  productsData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGE_DATA:
      return {
        ...state,
        productsData: action.payload,
      };
    default:
      return state;
  }
}

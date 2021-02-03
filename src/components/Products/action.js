/* eslint-disable import/prefer-default-export */
import { FETCH_IMAGE_DATA } from './types';
import { API_URL } from '../../config/config';
import callWebService, { callTypes } from '../../Utility/NetworkOps';

export const getProductData = () => (dispatch) => {
  const Url = API_URL;
  return new Promise((resolve) => {
    callWebService(callTypes.get, '', Url, Url).then((response) => {
      const data = response.data.slice(0, 10);
      resolve(data);
      dispatch({
        type: FETCH_IMAGE_DATA,
        payload: data,
      });
    })
      .catch(() => {
        dispatch({
          type: FETCH_IMAGE_DATA,
          payload: [],
        });
      });
  });
};

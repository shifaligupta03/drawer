/* eslint-disable default-case */
import axios from 'axios';

export const callTypes = {
  get: 'GET', post: 'POST', upload: 'UPLOAD', put: 'PUT', delete: 'DELETE', patch: 'PATCH',
};

export default async function callWebService(requestType, data, url) {
  switch (requestType) {
    case callTypes.get: {
      const getApiResult = await axios.get(url).catch((error) => {
        alert(error.response.data);
      });
      return getApiResult;
    }
  }
}

import axios from 'axios';

const baseURL = "http://www.omdbapi.com/";

const loading = () => ({ type: 'LOADING' });
const loading_complete = () => ({ type: 'LOADING_COMPLETE' });

const api = {
  get: (options) => async dispatch => {

    const [success, failure] = options.types;
    const promise = (resolve, reject) => {

      return axios({
        method: 'GET',
        url: `${baseURL}${options.url}`
      })
        .then(res => {
          resolve(dispatch({
            type: success,
            payload: res.data
          }))
        })
        .catch(err => {
          reject(dispatch({
            type: failure,
            payload: err
          }))
        })
    }

    return new Promise(promise);
  },
  post: (options, params = null) => async dispatch => {
    dispatch(loading());
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      axios({
        method: 'POST',
        url: `${baseURL}${options.url}`,
        data: params,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          dispatch(loading_complete());
          resolve(dispatch({
            type: success,
            payload: res.data
          }))
        })
        .catch(err => {
          dispatch(loading_complete());
          reject(dispatch({
            type: failure,
            payload: err
          }))
        })
    }

    return new Promise(promise);
  },
  put: (options, params = null, noLoading = false) => async dispatch => {
    if (!noLoading) {
      dispatch(loading());
    }
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      axios({
        method: 'PUT',
        url: `${baseURL}${options.url}`,
        data: params,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (!noLoading) {
            dispatch(loading_complete());
          }
          resolve(dispatch({
            type: success,
            payload: res.data
          }))
        })
        .catch(err => {
          if (!noLoading) {
            dispatch(loading_complete());
          }
          reject(dispatch({
            type: failure,
            payload: err
          }))
        })
    }

    return new Promise(promise);
  }
}

export { api };

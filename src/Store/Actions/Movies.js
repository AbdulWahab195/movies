import { api } from '../../service/api';
import * as types from '../Constants';

export const getMoviesList = (value, page) => {
  const options = {
    url: `?apikey=${process.env.REACT_APP_KEY}&s=${value}s&page=${page}`
  };

  options.types = [
    types.GET_MOVIES_LIST_SUCCESS,
    types.GET_MOVIES_LIST_FAILURE
  ];

  return api.get(options);
}

export const getMoviesDetail = (id) => {
  const options = {
    url: `?apikey=${process.env.REACT_APP_KEY}&i=${id}`
  };

  options.types = [
    types.GET_MOVIE_DETAIL_SUCCESS,
    types.GET_MOVIE_DETAIL_FAILURE
  ];

  return api.get(options);
}
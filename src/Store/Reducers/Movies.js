import * as types from '../Constants';

export const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_MOVIES_LIST_SUCCESS:
      return { ...state, moviesListResponse: action.payload }
    case types.GET_MOVIES_LIST_FAILURE:
      return { ...state, moviesListResponse: action.payload }

    case types.GET_MOVIE_DETAIL_SUCCESS:
      return { ...state, movieDetailResponse: action.payload }
    case types.GET_MOVIE_DETAIL_FAILURE:
      return { ...state, movieDetailResponse: action.payload }


    default:
      return state
  }
}
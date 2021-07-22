import * as types from '../types'

const initialState = {
  movieList: [],
  isLoading: false,
  hasMore: false
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.FETCH_MOVIE_LIST_SUCCESS:
      const newMovieList = [
        ...state.movieList,
        ...action.payload.rows
      ]
      return {
        ...state,
        movieList: newMovieList ,
        isLoading: false,
        hasMore: newMovieList.length < action.payload.count
      }
    case types.FETCH_MOVIE_LIST_FAILED:
      return {
        ...state,
        isLoading: false
      }
    case types.CLEAR_MOVIE_LIST:
      return initialState
    default:
      return state
  }
}

export default movieReducer

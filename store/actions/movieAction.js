import * as types from '../types'
import axios from 'axios'

const getMovieListRequest = () => {
  return {
    type: types.FETCH_MOVIE_LIST_REQUEST
  }
}

const getMovieListFailed = () => {
  return {
    type: types.FETCH_MOVIE_LIST_FAILED
  }
}

const getMovieListSuccess = ({ count, rows }) => {
  return {
    type: types.FETCH_MOVIE_LIST_SUCCESS,
    payload: {
      count,
      rows
    }
  }
}

export const fetchMovieList = ({page, search}) => async dispatch => {
  dispatch(getMovieListRequest())
  try {
    const { data } = await axios.get(`http://localhost:3000/api/movie?s=${search}&page=${page}`)
    dispatch(getMovieListSuccess({
      count: data.data.count,
      rows: data.data.rows
    }))
  } catch {
    dispatch(getMovieListFailed())
  }
}

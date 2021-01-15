import initialState from '../initialState'
import { IMoviesReducer } from '../../types'
import { MoviesAction } from '../../types'
import { MoviesActionTypes } from '../../types'

const moviesReducer = (state = initialState.movies, action: MoviesAction): IMoviesReducer => {
  switch (action.type) {
    case MoviesActionTypes.SET_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case MoviesActionTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    case MoviesActionTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      }
    default:
      return state
  }
}

export default moviesReducer

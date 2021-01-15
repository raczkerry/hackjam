import initialState from '../initialState'
import { filterMoviesByCategoryAndName } from '../../utils/arrays'
import { IMoviesReducer } from '../../types'
import { MoviesAction } from '../../types'
import { MoviesActionTypes } from '../../types'

const moviesReducer = (state = initialState.movies, action: MoviesAction): IMoviesReducer => {
  switch (action.type) {
    case MoviesActionTypes.SET_MOVIES:
      return {
        ...state,
        filteredMovies: filterMoviesByCategoryAndName(action.payload, state.selectedCategory, state.searchValue),
        movies: action.payload
      }
    case MoviesActionTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        filteredMovies: filterMoviesByCategoryAndName(state.movies, state.selectedCategory, action.payload),
        searchValue: action.payload
      }
    case MoviesActionTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        filteredMovies: filterMoviesByCategoryAndName(state.movies, action.payload, state.searchValue),
        selectedCategory: action.payload
      }
    default:
      return state
  }
}

export default moviesReducer

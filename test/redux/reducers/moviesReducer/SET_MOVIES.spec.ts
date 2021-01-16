import initialState from '../../../../src/redux/initialState'
import moviesReducer from '../../../../src/redux/reducers/moviesReducer'
import { movies } from '../../../../src/mocks'
import { filterMoviesByCategoryAndName } from '../../../../src/utils/arrays'
import { MoviesActionTypes } from '../../../../src/types'

describe(`${MoviesActionTypes.SET_MOVIES} tests`, () => {
  it('should set movies and filteredMovies', () => {
    // Given
    const state = initialState.movies

    // When
    const returnValue = moviesReducer(state, {
      type: MoviesActionTypes.SET_MOVIES,
      payload: movies
    })

    // Then
    expect(returnValue).toEqual({
      ...state,
      filteredMovies: movies,
      movies
    })
  })

  it('should filter the movies when searchValue is not empty', () => {
    // Given
    const state = { ...initialState.movies, searchValue: 'e' }

    // When
    const returnValue = moviesReducer(state, {
      type: MoviesActionTypes.SET_MOVIES,
      payload: movies
    })

    // Then
    expect(returnValue).toEqual({
      ...state,
      filteredMovies: filterMoviesByCategoryAndName(movies, state.selectedCategory, state.searchValue),
      movies
    })
  })

  it('should filter the movies when selectedCategory is not empty', () => {
    // Given
    const state = { ...initialState.movies, selectedCategory: 12 }

    // When
    const returnValue = moviesReducer(state, {
      type: MoviesActionTypes.SET_MOVIES,
      payload: movies
    })

    // Then
    expect(returnValue).toEqual({
      ...state,
      filteredMovies: filterMoviesByCategoryAndName(movies, state.selectedCategory, state.searchValue),
      movies
    })
  })

  it('should filter the movies when searchValue and selectedCategory are not empty', () => {
    // Given
    const state = { ...initialState.movies, searchValue: 'e', selectedCategory: 12 }

    // When
    const returnValue = moviesReducer(state, {
      type: MoviesActionTypes.SET_MOVIES,
      payload: movies
    })

    // Then
    expect(returnValue).toEqual({
      ...state,
      filteredMovies: filterMoviesByCategoryAndName(movies, state.selectedCategory, state.searchValue),
      movies
    })
  })
})

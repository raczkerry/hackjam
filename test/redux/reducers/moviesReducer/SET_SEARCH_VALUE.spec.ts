import initialState from '../../../../src/redux/initialState'
import moviesReducer from '../../../../src/redux/reducers/moviesReducer'
import { movies } from '../../../../src/mocks'
import { filterMoviesByCategoryAndName } from '../../../../src/utils/arrays'
import { MoviesActionTypes } from '../../../../src/types'

describe(`${MoviesActionTypes.SET_SEARCH_VALUE} tests`, () => {
  it('should set searchValue', () => {
    // Given
    const state = initialState.movies

    // When
    const returnValue = moviesReducer(state, {
      type: MoviesActionTypes.SET_SEARCH_VALUE,
      payload: 'e'
    })

    // Then
    expect(returnValue).toHaveProperty('searchValue', 'e')
  })

  it('should filter the movies', () => {
    // Given
    const state = { ...initialState.movies, movies }
    const searchValue = 'e'

    // When
    const returnValue = moviesReducer(state, {
      type: MoviesActionTypes.SET_SEARCH_VALUE,
      payload: searchValue
    })

    // Then
    expect(returnValue).toEqual({
      ...state,
      filteredMovies: filterMoviesByCategoryAndName(movies, state.selectedCategory, searchValue),
      movies,
      searchValue
    })
  })

  it('should filter the movies when selectedCategory is not empty', () => {
    // Given
    const state = { ...initialState.movies, movies, selectedCategory: 12 }
    const searchValue = 'e'

    // When
    const returnValue = moviesReducer(state, {
      type: MoviesActionTypes.SET_SEARCH_VALUE,
      payload: searchValue
    })

    // Then
    expect(returnValue).toEqual({
      ...state,
      filteredMovies: filterMoviesByCategoryAndName(movies, state.selectedCategory, searchValue),
      movies,
      searchValue
    })
  })
})

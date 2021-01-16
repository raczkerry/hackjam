import initialState from '../../../../src/redux/initialState'
import moviesReducer from '../../../../src/redux/reducers/moviesReducer'
import { movies } from '../../../../src/mocks'
import { filterMoviesByCategoryAndName } from '../../../../src/utils/arrays'
import { MoviesActionTypes } from '../../../../src/types'

describe(`${MoviesActionTypes.SET_SELECTED_CATEGORY} tests`, () => {
  it('should set selectedCategory', () => {
    // Given
    const state = initialState.movies
    const selectedCategory = 12
    // When
    const returnValue = moviesReducer(state, {
      type: MoviesActionTypes.SET_SELECTED_CATEGORY,
      payload: selectedCategory
    })

    // Then
    expect(returnValue).toHaveProperty('selectedCategory', selectedCategory)
  })

  it('should filter the movies', () => {
    // Given
    const state = { ...initialState.movies, movies }
    const selectedCategory = 12

    // When
    const returnValue = moviesReducer(state, {
      type: MoviesActionTypes.SET_SELECTED_CATEGORY,
      payload: selectedCategory
    })

    // Then
    expect(returnValue).toEqual({
      ...state,
      filteredMovies: filterMoviesByCategoryAndName(movies, selectedCategory, state.searchValue),
      movies,
      selectedCategory
    })
  })

  it('should filter the movies when searchValue is not empty', () => {
    // Given
    const state = { ...initialState.movies, movies, searchValue: 'e' }
    const selectedCategory = 12

    // When
    const returnValue = moviesReducer(state, {
      type: MoviesActionTypes.SET_SELECTED_CATEGORY,
      payload: selectedCategory
    })

    // Then
    expect(returnValue).toEqual({
      ...state,
      filteredMovies: filterMoviesByCategoryAndName(movies, selectedCategory, state.searchValue),
      movies,
      selectedCategory
    })
  })
})

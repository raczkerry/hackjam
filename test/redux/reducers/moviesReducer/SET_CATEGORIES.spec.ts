import initialState from '../../../../src/redux/initialState'
import moviesReducer from '../../../../src/redux/reducers/moviesReducer'
import { categories } from '../../../../src/mocks'
import { MoviesActionTypes } from '../../../../src/types'

describe(`${MoviesActionTypes.SET_CATEGORIES} tests`, () => {
  it('should set categories', () => {
    // Given
    const state = initialState.movies

    // When
    const returnValue = moviesReducer(state, {
      type: MoviesActionTypes.SET_CATEGORIES,
      payload: categories
    })

    // Then
    expect(returnValue).toEqual({
      ...state,
      categories
    })
  })
})

import initialState from '../../../../src/redux/initialState'
import moviesReducer from '../../../../src/redux/reducers/moviesReducer'
import { MoviesAction } from '../../../../src/types'

describe('Movies reducer tests', () => {
  it('should return the initial state', () => {
    // Given
    const state = undefined

    // When
    const returnValue = moviesReducer(state, {} as MoviesAction)

    // Then
    expect(returnValue).toEqual(initialState.movies)
  })
})

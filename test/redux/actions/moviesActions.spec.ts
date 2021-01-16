import * as moviesActions from '../../../src/redux/actions/moviesActions'
import { categories, genres, movies } from '../../../src/mocks'
import { MoviesAction, MoviesActionTypes } from '../../../src/types'

describe('Movies actions tests', () => {
  describe('Set categories action test', () => {
    it('should return the correct action', () => {
      const expectedAction: MoviesAction = {
        type: MoviesActionTypes.SET_CATEGORIES,
        payload: categories
      }

      expect(moviesActions.setCategories(categories)).toEqual(expectedAction)
    })
  })

  describe('Set movies action test', () => {
    it('should return the correct action', () => {
      const expectedAction: MoviesAction = {
        type: MoviesActionTypes.SET_MOVIES,
        payload: movies
      }

      expect(moviesActions.setMovies(movies)).toEqual(expectedAction)
    })
  })

  describe('Set search value action test', () => {
    it('should return the correct action', () => {
      const searchValue = 'Alice in Wonderland'

      const expectedAction: MoviesAction = {
        type: MoviesActionTypes.SET_SEARCH_VALUE,
        payload: searchValue
      }

      expect(moviesActions.setSearchValue(searchValue)).toEqual(expectedAction)
    })
  })

  describe('Set selected category action test', () => {
    it('should return the correct action', () => {
      const selectedCategory = genres[0]

      const expectedAction: MoviesAction = {
        type: MoviesActionTypes.SET_SELECTED_CATEGORY,
        payload: selectedCategory.id
      }

      expect(moviesActions.setSelectedCategory(selectedCategory.name)).toEqual(expectedAction)
    })
  })
})

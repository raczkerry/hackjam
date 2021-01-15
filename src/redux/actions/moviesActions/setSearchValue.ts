import { MoviesActionTypes, MoviesAction } from '../../../types'

export const setSearchValue = (searchValue: string): MoviesAction => ({
  type: MoviesActionTypes.SET_SEARCH_VALUE,
  payload: searchValue
})

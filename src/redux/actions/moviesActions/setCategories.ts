import { ICategory } from '../../../types'
import { MoviesActionTypes, MoviesAction } from '../../../types'

export const setCategories = (categories: ICategory[]): MoviesAction => ({
  type: MoviesActionTypes.SET_CATEGORIES,
  payload: categories
})

import initialState from '../../initialState'
import { genres } from '../../../mocks'
import { MoviesActionTypes, MoviesAction } from '../../../types'

export const setSelectedCategory = (categoryName: string): MoviesAction => {
  const genre = genres.find(genre => genre.name === categoryName)

  return {
    type: MoviesActionTypes.SET_SELECTED_CATEGORY,
    payload: genre ? genre.id : initialState.movies.selectedCategory
  }
}

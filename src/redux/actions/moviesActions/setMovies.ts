import { IMovie } from '../../../types'
import { MoviesActionTypes, MoviesAction } from '../../../types'

export const setMovies = (movies: IMovie[]): MoviesAction => ({
  type: MoviesActionTypes.SET_MOVIES,
  payload: movies
})

import { IMovie } from '..'

export enum MoviesActionTypes {
  SET_MOVIES = 'SET_MOVIES',
  SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
  SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'
}

interface SetMovieAction {
  type: MoviesActionTypes.SET_MOVIES
  payload: IMovie[]
}

interface SetSearchValueAction {
  type: MoviesActionTypes.SET_SEARCH_VALUE
  payload: string
}

interface SetSelectedCategoryAction {
  type: MoviesActionTypes.SET_SELECTED_CATEGORY
  payload: number
}

export type MoviesAction = SetMovieAction | SetSearchValueAction | SetSelectedCategoryAction

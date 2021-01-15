import { IMovie } from '..'

export interface IGlobalState {
  movies: IMoviesReducer
}

export interface IMoviesReducer {
  movies: IMovie[]
  searchValue: string
  selectedCategory: number
}

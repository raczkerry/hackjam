import { IMovie } from '..'

export interface IGlobalState {
  movies: IMoviesReducer
}

export interface IMoviesReducer {
  filteredMovies: IMovie[]
  movies: IMovie[]
  searchValue: string
  selectedCategory: number
}

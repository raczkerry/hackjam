import { ICategory, IMovie } from '..'

export interface IGlobalState {
  movies: IMoviesReducer
}

export interface IMoviesReducer {
  categories: ICategory[]
  filteredMovies: IMovie[]
  movies: IMovie[]
  searchValue: string
  selectedCategory: number
}

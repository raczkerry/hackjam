import { IGlobalState } from '../types'

const initialState: IGlobalState = {
  movies: {
    categories: [],
    filteredMovies: [],
    movies: [],
    searchValue: '',
    selectedCategory: 0
  }
}

export default initialState

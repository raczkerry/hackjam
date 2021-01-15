import { IGlobalState } from '../types'

const initialState: IGlobalState = {
  movies: {
    movies: [],
    searchValue: '',
    selectedCategory: 0
  }
}

export default initialState

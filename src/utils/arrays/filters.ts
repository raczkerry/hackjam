import initialState from '../../redux/initialState'
import { IMovie } from '../../types'

export const filterMoviesByCategoryAndName = (movies: IMovie[], category: number, searchValue: string) =>
  movies.filter(
    movie =>
      (category === initialState.movies.selectedCategory || movie.genre_ids.includes(category)) &&
      movie.title.match(new RegExp(searchValue, 'gi'))
  )

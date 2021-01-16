import { filterMoviesByCategoryAndName } from '../../../src/utils/arrays'
import { movies } from '../../../src/mocks'

describe('Filter movies by category and name tests', () => {
  it('should correctly filter the movies without category or searchValue', () => {
    // Given
    const category = 0
    const searchValue = ''

    // When
    const filteredMovies = filterMoviesByCategoryAndName(movies, category, searchValue)

    // Then
    expect(movies.length).toEqual(filteredMovies.length)
  })

  it('should correctly filter the movies by category', () => {
    // Given
    const category = 12
    const searchValue = ''

    // When
    const filteredMovies = filterMoviesByCategoryAndName(movies, category, searchValue)

    // Then
    filteredMovies.forEach(movie => expect(movie.genre_ids.includes(category)).toBeTruthy())
  })

  it('should correctly filter the movies by searchValue', () => {
    // Given
    const category = 0
    const searchValue = 'e'

    // When
    const filteredMovies = filterMoviesByCategoryAndName(movies, category, searchValue)

    // Then
    filteredMovies.forEach(movie => expect(movie.title.match(new RegExp(searchValue, 'gi'))).toBeTruthy())
  })

  it('should correctly filter the movies by category and searchValue', () => {
    // Given
    const category = 12
    const searchValue = 'e'

    // When
    const filteredMovies = filterMoviesByCategoryAndName(movies, category, searchValue)

    // Then
    filteredMovies.forEach(movie => {
      expect(movie.genre_ids.includes(category)).toBeTruthy()
      expect(movie.title.match(new RegExp(searchValue, 'gi'))).toBeTruthy()
    })
  })
})

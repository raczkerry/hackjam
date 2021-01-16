import initialState from '../src/redux/initialState'
import MovieCard from '../src/components/movieCard'
import React from 'react'
import { App } from '../src/App'
import { IMovie } from '../src/types'
import { Provider } from './testingUtils'
import { movies as moviesMock } from '../src/mocks'
import { mount, shallow } from 'enzyme'
import 'jest-enzyme'

test('App should render the movie title', () => {
  // Given
  const movies: IMovie[] = [moviesMock[0]]
  const state = {
    ...initialState,
    movies: { ...initialState.movies, filteredMovies: movies, movies }
  }

  // When
  const component = mount(
    <Provider state={state}>
      <App />
    </Provider>
  )

  // Then
  expect(component).toContainReact(<MovieCard movie={movies[0]} />)
})

test('should render one movie title and poster', () => {
  // Given
  const movies: IMovie[] = [moviesMock[1]]
  const state = {
    ...initialState,
    movies: { ...initialState.movies, filteredMovies: movies, movies }
  }

  // When
  const component = mount(
    <Provider state={state}>
      <App />
    </Provider>
  )
  const movieCardComponent = shallow(<MovieCard movie={movies[0]} />)

  // Then
  expect(component).toContainReact(<MovieCard movie={movies[0]} />)
  expect(movieCardComponent).toContainReact(<img src={movies[0].poster_path} alt={movies[0].title} />)
})

test('should render multiples movies title and poster', () => {
  // Given
  const movies: IMovie[] = [moviesMock[0], moviesMock[1]]
  const state = {
    ...initialState,
    movies: { ...initialState.movies, filteredMovies: movies, movies }
  }

  // When
  const component = mount(
    <Provider state={state}>
      <App />
    </Provider>
  )

  // Then
  movies.forEach(movie => {
    expect(component).toContainReact(<MovieCard movie={movie} />)

    const movieCardComponent = shallow(<MovieCard movie={movie} />)

    expect(movieCardComponent).toContainReact(<img src={movie.poster_path} alt={movie.title} />)
  })
})

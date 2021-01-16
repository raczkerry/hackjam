import initialState from '../src/redux/initialState'
import MovieCard from '../src/components/movieCard'
import React from 'react'
import rootReducer from '../src/redux/reducers'
import { App } from '../src/App'
import { createStore } from 'redux'
import { IMovie } from '../src/types'
import { Provider } from './testingUtils'
import { categories as categoriesMock, genres as genresMock, movies as moviesMock } from '../src/mocks'
import { mount } from 'enzyme'
import 'jest-enzyme'

describe('App tests', () => {
  it('should render a movie card', () => {
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

  it('should render one movie title and poster', () => {
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

    // Then
    expect(component).toContainReact(<MovieCard movie={movies[0]} />)
  })

  it('should render multiples movies title and poster', () => {
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
    movies.forEach(movie => expect(component).toContainReact(<MovieCard movie={movie} />))
  })

  describe('Categories test', () => {
    it('should render the categories', () => {
      // Given
      const state = initialState

      // When
      const component = mount(
        <Provider state={state}>
          <App />
        </Provider>
      )

      // Then
      categoriesMock.forEach(category => {
        expect(component).toContainReact(<button className={'px-3 md:px-6 py-3 block'}>{category.name}</button>)
      })
    })

    it('should update the state when selected', () => {
      // Given
      const categoryName = categoriesMock[4].name
      const { id: categoryId } = genresMock.find(genre => genre.name === categoryName) ?? { id: null }
      const store = createStore(rootReducer, initialState)

      // When
      const component = mount(
        <Provider store={store}>
          <App />
        </Provider>
      )

      component.find('button').forEach(button => {
        if (button.text() === categoryName) {
          button.simulate('click')
        }
      })

      // Then
      expect(store.getState().movies.selectedCategory).toEqual(categoryId)
    })
  })

  describe('Search input test', () => {
    it('should render the search input', () => {
      // Given
      const state = initialState

      // When
      const component = mount(
        <Provider state={state}>
          <App />
        </Provider>
      )

      // Then
      expect(component.exists('input[name="Search"]')).toBeTruthy()
    })

    it('should render the search input with the value present in state ', () => {
      // Given
      const searchValue = 'film'
      const store = createStore(rootReducer, { ...initialState, movies: { ...initialState.movies, searchValue } })

      // When
      const component = mount(
        <Provider store={store}>
          <App />
        </Provider>
      )

      // Then
      expect(component.find('input[name="Search"]').props().value).toEqual(searchValue)
    })

    it('should update the state when changed', () => {
      // Given
      const searchValue = 'film'
      const store = createStore(rootReducer, initialState)

      // When
      const component = mount(
        <Provider store={store}>
          <App />
        </Provider>
      )

      component.find('input[name="Search"]').simulate('change', { target: { name: 'Search', value: searchValue } })

      // Then
      expect(store.getState().movies.searchValue).toEqual(searchValue)
      expect(component.find('input[name="Search"]').props().value).toEqual(searchValue)
    })
  })

  it('should render the app logo', () => {
    // Given
    const state = initialState

    // When
    const component = mount(
      <Provider state={state}>
        <App />
      </Provider>
    )

    // Then
    expect(component.exists('img[alt="hackflix"]')).toBeTruthy()
  })

  it('should render a link to bookmarks', () => {
    // Given
    const state = initialState

    // When
    const component = mount(
      <Provider state={state}>
        <App />
      </Provider>
    )

    // Then
    expect(component.exists('a[href="/bookmarks"]')).toBeTruthy()
  })

  it('should render the footer', () => {
    // Given
    const state = initialState

    // When
    const component = mount(
      <Provider state={state}>
        <App />
      </Provider>
    )

    // Then
    expect(component.exists('footer')).toBeTruthy()
    expect(component).toContainReact(<p>Hackflix © 2020 Powered by Hackages</p>)
  })
})

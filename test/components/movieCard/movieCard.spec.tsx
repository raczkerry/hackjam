import MovieCard from '../../../src/components/movieCard'
import React from 'react'
import { movies as moviesMock } from '../../../src/mocks'
import { shallow } from 'enzyme'
import 'jest-enzyme'

describe('MovieCard tests', () => {
  it('should not have changed', () => {
    // Given
    const movie = moviesMock[0]

    // When
    const component = shallow(<MovieCard movie={movie} />)

    // Then
    expect(component).toMatchSnapshot()
  })

  it('should render the movie image', () => {
    // Given
    const movie = moviesMock[0]

    // When
    const component = shallow(<MovieCard movie={movie} />)

    // Then
    expect(component).toContainReact(<img src={movie.poster_path} alt={movie.title} />)
  })

  it('should render the movie title', () => {
    // Given
    const movie = moviesMock[0]

    // When
    const component = shallow(<MovieCard movie={movie} />)

    // Then
    expect(component).toContainReact(<h3 className='mb-5'>{movie.title}</h3>)
  })
})

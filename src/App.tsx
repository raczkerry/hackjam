import MovieCard from './components/movieCard'
import React, { useEffect } from 'react'
import { categories } from './mocks'
import { movies as moviesMock } from './mocks'
import { setMovies, setSearchValue, setSelectedCategory } from './redux/actions/moviesActions'
import { useDispatch } from 'react-redux'
import { useSelector } from './hooks'

export function App() {
  const dispatch = useDispatch()
  const { filteredMovies, searchValue } = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(setMovies(moviesMock))
  }, [dispatch])

  return (
    <>
      {/* Start: Header Component */}
      <header className='py-10'>
        <div className='container mx-auto'>
          <div className='sm:flex items-center justify-between'>
            <a href='/' className='logo lg:w-1/2 sm:w-1/4 w-full block mb-5 sm:mb-0'>
              <img className='mx-auto sm:mx-0' src='./image/logo.svg' alt='hackflix' />
            </a>
            <div className='flex justify-center sm:justify-end items-center text-right lg:w-1/2 sm:w-3/4 w-full'>
              {/* Start: Search Component */}
              <form className='flex mr-5 lg:mr-10'>
                <input
                  role={'search'}
                  type='text'
                  name='Search'
                  placeholder='Search'
                  className='search'
                  onChange={event => dispatch(setSearchValue(event.target.value))}
                  value={searchValue}
                />
                <button type='submit' className='search-btn'>
                  <img src='./image/search.svg' alt='search' />
                </button>
              </form>
              {/* End: Search Component */}

              <div className='nav'>
                <a href='/bookmarks' className='bookmark-nav py-3 mr-5'>
                  Bookmarks
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End: Header Component */}

      <section className='wrapper'>
        {/* Start: Categories Component */}
        <div className='categories'>
          <div className='container mx-auto text-center'>
            <ul className='flex flex-row justify-center categories-list'>
              {categories.map(({ name }) => (
                <li key={name} onClick={() => dispatch(setSelectedCategory(name))}>
                  <button className={'px-3 md:px-6 py-3 block'}>{name}</button>
                </li>
              ))}
              {/* End: Category */}
            </ul>
          </div>
        </div>
        {/* End: Categories Component */}

        {/* Start: MovieList Component */}
        <div className='movie-list py-20'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10'>
              {/* Start: Movie Component */}
              {filteredMovies.map(movie => (
                <MovieCard movie={movie} />
              ))}
              {/* End: Movie Component */}
            </div>
          </div>
        </div>
        {/* End: MovieList Component */}
      </section>

      {/* Start: Footer Component */}
      <footer className='py-6 bg-gray-900'>
        <div className='container mx-auto text-center'>
          <p>Hackflix © 2020 Powered by Hackages</p>
        </div>
      </footer>
      {/* End: Footer Component */}
    </>
  )
}

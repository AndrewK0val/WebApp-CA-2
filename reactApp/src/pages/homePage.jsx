import React from "react"
import { getMovies } from "../api/movies-api"
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useContext } from "react"
import Pagination from '@mui/material/Pagination'


const HomePage = (props) => {

  const [page, setPage] = React.useState(1)
  const {  data, error, isLoading, isError }  = useQuery(['discover', page], ()=> getMovies(page), { keepPreviousData : true })   
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        page={page}
        setPage={setPage}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />
        }}
      />
        {/* <Pagination count={10} variant="outlined" color="secondary" page={page} onChange={(event, value) => setPage(value)} /> */}
    </>
  )
}
export default HomePage
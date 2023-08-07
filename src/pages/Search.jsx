import React from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'


const SearchUrl = import.meta.env.VITE_SEARCH
const apikey = import.meta.env.VITE_API_KEY
import "./MoviesGrid.css"
const Search = () => {

   const [searchParams]= useSearchParams()
   const [movies,setMovies] = React.useState([])
   const query = searchParams.get("q")

   const GetSearchedMovies = async (url)=>{
    const res = await fetch(url)
    const json = await res.json()
       setMovies(json.results)

  }
  React.useEffect(()=>{
    const SearchWithQuery = `${SearchUrl}?${apikey}&query=${query}`;
    GetSearchedMovies(SearchWithQuery)
  },[query])

  return (
    <div className='container'>
    <h2 className='title'>Resultados para: <span className='query-text'>{query}</span></h2>
 <div className="movie-container">
    {movies.length === 0 && <p>Carregando...</p>}
    {movies.length > 0 && movies.map((movie)=>(
       <MovieCard movie={movie} key={movie.id}/>
    ))}
 </div>
</div>
  )
}

export default Search
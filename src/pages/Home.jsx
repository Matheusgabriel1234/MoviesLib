import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import "./MoviesGrid.css"

const MoviesUrl = import.meta.env.VITE_API
const ApiKey = import.meta.env.VITE_API_KEY




const Home = () => {
 
    const [topMovies,SetTopMovies] = React.useState([])

  const GetTopRatedMovies = async (url)=>{
    const res = await fetch(url)
    const json = await res.json()
 SetTopMovies(json.results)

  }
  useEffect(()=>{
    const TopRatedUrl = `${MoviesUrl}top_rated?${ApiKey}`;
    GetTopRatedMovies(TopRatedUrl)
  })


  return (
    <div className='container'>
        <h2 className='title'>Melhores filmes:</h2>
     <div className="movie-container">
        {topMovies.length > 0 && topMovies.map((movie)=>(
           <MovieCard movie={movie} key={movie.id}/>
        ))}
     </div>
</div>
  )
}

export default Home
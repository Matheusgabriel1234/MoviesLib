import React from "react"
import { useParams } from "react-router-dom"
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
  } from "react-icons/bs";

  
  import MovieCard from "../components/MovieCard";

  const MoviesUrl = import.meta.env.VITE_API
const ApiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
    const {id} = useParams()
    const [movie,setMovie] = React.useState(null)
    
  const GetMovies = async (url)=>{
    const res = await fetch(url)
    const json = await res.json()
 setMovie(json)

  }
  React.useEffect(()=>{
    const MovieUrl = `${MoviesUrl}${id}?${ApiKey}`;
    GetMovies(MovieUrl)
  })

  return (
    <div className="movie-page">
        {movie && <><MovieCard movie={movie} ShowLink={false}/>
          <p className="TagLine">{movie.tagline}</p>
        </>}
        <h3>
            <BsWallet2/> Orçamento

           
        </h3>
        {movie && <p> $ {movie.budget}</p>}
        <h3>
            <BsGraphUp/> Faturamento

           
        </h3>
        {movie && <p> $ {movie.revenue}</p>}
        <h3>
            <BsHourglassSplit/> Duração

           
        </h3>
        {movie && <p> $ {movie.runtime} Minutos </p>}
    </div>
  )
}

export default Movie
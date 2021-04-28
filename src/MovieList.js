import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'

const MovieList = () =>{
    const [movies, setMovies] = useContext(MovieContext)
    console.log(movies)
    return(
        <>
            {movies.map((movie, index) =>{
                return(
                    <div key={index}>
                        <h1>{movie.name}</h1>
                        <p>{movie.price}</p>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList
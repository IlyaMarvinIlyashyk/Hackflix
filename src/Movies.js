import { useState, useEffect, Children } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import useContentPage from "./useContentPage";


const Movies = () => {
    
    
    const [moviePage, setMoviePage] = useState(1)
    const [category, setCategory] = useState('discover/movie')
    const {
        movies,
        hasMore,
        loading,
        error
    } = useContentPage(moviePage, category);
    
    return(
        <ul className="catalogue">
            {movies.map((movie) => {
                console.log(movie)
                return (
                    <li key={movie.id} className="movie">
                        {
                        movie.poster_path
                        ?
                        <Link to={`/movie/${movie.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={`Poster for ${movie.original_title}`} />
                        </Link>
                        :
                        <h2>Something went wrong 😢</h2>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default Movies;

// global updater that would pass it to the Children, blur, preventing API from firing on every type, restructuring 
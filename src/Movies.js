import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';


const Movies = () => {
    
    const [movies, setMovies] = useState([])

    useEffect(() => {

        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '50f5c76a90810a4a56f5198029f99d06',
                sort_by: 'popularity.desc',
                include_adult: 'false',
                include_video: 'false',
                // page: 1,
                // primary_release_year: 2007,
            },
        }).then((response) => {
            const movieDBResponse = response.data.results;

            setMovies(movieDBResponse);
        })

    }, []);
    
    
    return(
        <ul className="catalogue">
            {movies.map((movie) => {
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
                        <h2>Failed to Load Image</h2>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default Movies;
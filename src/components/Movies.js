import { useState } from "react";
import { Link } from 'react-router-dom'
import useContent from "../customHooks/useContent"

const Movies = () => {

    const [page] = useState(1)
    const [category] = useState('discover/movie')
    
    const { movies, hasMore, loading, error } = useContent(page, category);
    
    return(
        <ul className="catalogue">
            {movies.map((movie) => {

            const { id, poster_path, original_title, } = movie
               
                return (
                    <li key={id}>
                        {
                        poster_path
                        ?
                        <Link to={`/movie/${id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                            alt={`Poster for ${original_title}`}
                        />
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
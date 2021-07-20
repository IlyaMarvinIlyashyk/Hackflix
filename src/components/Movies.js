import { useState } from "react";
import { Link } from 'react-router-dom'
import useContent from "../customHooks/useContent"
import useInfiniteScroll from "../customHooks/useInfiniteScroll";

const Movies = () => {

    const [category] = useState('discover/movie')
    const {page, lastElementRef} = useInfiniteScroll()
    const { movies } = useContent(page, category);
    
    return(
        <ul className="catalogue">
            {movies.map((movie, index) => {

            const { id, poster_path, original_title, } = movie
                
                if (movies.length === index + 1) {
                    return (
                        <li ref={lastElementRef} key={id}>
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
                } else {
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
                }
            })}
        </ul>
    )
}

export default Movies;

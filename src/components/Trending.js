import { useState } from "react";
import { Link } from "react-router-dom";
import useContent from "../customHooks/useContent";

const Trending = () => {

    const [page] = useState(1)
    const [category] = useState('trending/all/day')
    
    const { trending, hasMore, loading, error } = useContent(page, category);

    return (
        <ul className="catalogue">
            {trending.map((t) => {

                const {id, media_type, poster_path, original_title } = t

                return (
                    <li key={id} className="movie">
                        {
                            t.media_type === "movie"
                                ?
                                <Link to={`/movie/${id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                                        alt={`Poster for ${original_title}`} />
                                </Link>
                                :
                                <Link to={`/tv/${t.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                                        alt={`Poster for ${original_title}`} 
                                    />
                                </Link>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default Trending
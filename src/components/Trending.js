import { useState } from "react";
import { Link } from "react-router-dom";
import useContent from "../customHooks/useContent";
import useInfiniteScroll from "../customHooks/useInfiniteScroll";

const Trending = () => {

    const [category] = useState('trending/all/day')
    const { page, lastElementRef } = useInfiniteScroll()
    const { trending} = useContent(page, category);

    return (
        <ul className="catalogue">
            {trending.map((t, index) => {

                const {id, media_type, poster_path, original_title } = t
                if (trending.length === index + 1) {
                    return (
                        <li ref={lastElementRef} key={index} className="movie">
                            {
                                media_type === "movie"
                                    ?
                                    <Link to={`/movie/${id}`}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                                            alt={`Poster for ${original_title}`} />
                                    </Link>
                                    :
                                    <Link to={`/tv/${id}`}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                                            alt={`Poster for ${original_title}`} 
                                        />
                                    </Link>
                            }
                        </li>
                    )
                } else {
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

                }

            })}
        </ul>
    )
}

export default Trending
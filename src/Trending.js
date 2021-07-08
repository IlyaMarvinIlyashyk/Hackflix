import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useContentPage from "./useContentPage";

const Trending = () => {

        const [page, setPage] = useState(1)
        const [category, setCategory] = useState('trending/all/day')
        const {
            trending,
            hasMore,
            loading,
            error
        } = useContentPage(page, category);


        return (
            <ul className="catalogue">
                {trending.map((t) => {
                    console.log(t)
                    return (
                        <li key={t.id} className="movie">
                            {
                                t.media_type === "movie"
                                    ?
                                    <Link to={`/movie/${t.id}`}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${t.poster_path}`}
                                            alt={`Poster for ${t.original_title}`} />
                                    </Link>
                                    :
                                    <Link to={`/tv/${t.id}`}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${t.poster_path}`}
                                            alt={`Poster for ${t.original_title}`} />
                                    </Link>
                            }
                        </li>
                    )
                })}
            </ul>
        )
}

export default Trending
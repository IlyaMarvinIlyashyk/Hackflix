import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Trending = () => {

        const [trending, setTrending] = useState([])

        useEffect(() => {

            axios({
                url: 'https://api.themoviedb.org/3/trending/all/day',
                params: {
                    api_key: '50f5c76a90810a4a56f5198029f99d06',
                    page: 1,
                },
            }).then((response) => {
                const movieDBResponse = response.data.results;

                setTrending(movieDBResponse);
            })

        }, []);


        return (
            <ul className="catalogue">
                {trending.map((trending) => {
                    console.log(trending)
                    return (
                        <li key={trending.id} className="movie">
                            {
                                trending.media_type === "movie"
                                    ?
                                    <Link to={`/movie/${trending.id}`}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${trending.poster_path}`}
                                            alt={`Poster for ${trending.original_title}`} />
                                    </Link>
                                    :
                                    <Link to={`/tv/${trending.id}`}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${trending.poster_path}`}
                                            alt={`Poster for ${trending.original_title}`} />
                                    </Link>
                            }
                        </li>
                    )
                })}
            </ul>
        )
}

export default Trending
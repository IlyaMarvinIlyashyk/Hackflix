// import { BrowserRouter as Router, Route } from "react-router-dom"

import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const TVs = () => {

    const [tvShows, setTvShows] = useState([])

    useEffect(() => {
        axios({
            url: 'https://api.themoviedb.org/3/discover/tv',
            params: {
                api_key: '50f5c76a90810a4a56f5198029f99d06',
            },
        }).then((response) => {
            setTvShows(response.data.results)
        })

    }, []);

    console.log(tvShows)
    
    return (
        <ul className="catalogue">
            {tvShows.map((tvShow) => {
                return (
                    <li key={tvShow.id} className="movie">
                        {
                        tvShow.poster_path
                        ?
                        <Link to={`/tv/${tvShow.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                                alt={`Poster for ${tvShow.original_title}`} />
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

export default TVs
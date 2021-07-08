import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useContent from "./useContent"

const TVs = () => {

    const [page, setPage] = useState(1)
    const [category, setCategory] = useState('discover/tv')
    const {
        tv,
        hasMore,
        loading,
        error
    } = useContent(page, category);
    
    return (
        <ul className="catalogue">
            {tv.map((tvShow) => {
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
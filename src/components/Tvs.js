import { useState } from "react"
import { Link } from "react-router-dom"
import useContent from "../customHooks/useContent"

const TVs = () => {

    const [page, setPage] = useState(1)
    const [category, setCategory] = useState('discover/tv')
    const { tv, hasMore, loading, error } = useContent(page, category);
    
    return (
        <ul className="catalogue">
            {tv.map((tvShow) => {

                const {id, poster_path, original_title } = tvShow

                return (
                    <li key={id} className="movie">
                        {
                        poster_path
                        ?
                        <Link to={`/tv/${id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                                alt={`Poster for ${original_title}`} />
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
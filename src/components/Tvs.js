import { useState } from "react"
import { Link } from "react-router-dom"
import useContent from "../customHooks/useContent"
import useInfiniteScroll from "../customHooks/useInfiniteScroll"

const TVs = () => {
    
    const [category] = useState('discover/tv')
    const { page, lastElementRef } = useInfiniteScroll()
    const { tv } = useContent(page, category);
    
    return (
        <ul className="catalogue">
            {tv.map((tvShow, index) => {

                const {id, poster_path, original_title } = tvShow

                if (tv.length === index + 1) {

                    return (
                        <li ref={lastElementRef }key={id}>
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
                } else {
                    return (
                        <li key={id}>
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
                    
                }
            })}
        </ul>
    )

}

export default TVs
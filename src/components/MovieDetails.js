import { useState } from "react"
import useContentDetails from "../customHooks/useContentDetails";

const MovieDetails = (props) =>{

    const [type, setType] = useState(`/movie/${props.match.params.movieID}`)

    const { details } = useContentDetails(type);
    const { original_title, tagline, overview, poster_path } = details;

    return(
        <div className="poster">
            <div className="description">
                <h2>{original_title}</h2>
                <h3>{tagline}</h3>
                <p>{overview}</p>
            </div>
            <div className="poster-image">
                <img 
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={`Movie poster for ${original_title}`}
                />
            </div>
        </div>
    )

}

export default MovieDetails
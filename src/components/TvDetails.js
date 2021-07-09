import { useState } from "react"
import useContentDetails from "../customHooks/useContentDetails";

const TvDetails = (props) => {

    const [type] = useState(`tv/${props.match.params.tvID}`)
    
    const {details} = useContentDetails(type)
    const { original_name, tagline, overview, poster_path } = details;
    
    return (
        <div className="poster">
            <div className="description">
                <h2>{original_name}</h2>
                <h3>{tagline}</h3>
                <p>{overview}</p>
            </div>
            <div className="poster-image">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={`TV poster for ${original_name}`}
                />
            </div>
        </div>
    )

}

export default TvDetails
import axios from "axios";
import { useEffect, useState } from "react"

const TvDetails = (props) => {

    const [tvDetails, setTvDetails] = useState({});

    useEffect(() => {

        axios({
            url: `https://api.themoviedb.org/3/tv/${props.match.params.tvID}`,
            params: {
                api_key: '50f5c76a90810a4a56f5198029f99d06'
            }
        }).then((response) => {
            setTvDetails(response.data)
        })

    }, [props.match.params.movieID])

    const { original_title, tagline, overview, poster_path } = tvDetails;

    return (
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

export default TvDetails
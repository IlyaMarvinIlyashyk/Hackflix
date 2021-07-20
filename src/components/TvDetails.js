import { useState } from "react"
import useContentDetails from "../customHooks/useContentDetails";
import firebase from "../firebase";

const TvDetails = ({ match, tvList }) => {

    const [type] = useState(`tv/${match.params.tvID}`)
    
    const {details} = useContentDetails(type)
    const { original_name, tagline, overview, poster_path,id } = details;

    const dbRef = firebase.database().ref();

    const handleAdd = (tv) => {
        dbRef.push(tv)
    }

    const handleRemove = (key) => {
        dbRef.child(key).remove()
    }

    const savedMovie = tvList.find((tv) => {
        return (
            tv.id === id
        )
    })

    const isSaved = tvList.map((tv) => {
        return (
            tv.id
        )
    }).includes(id);
    
    return (
        <div className="poster">
            <div className="description">
                <h2>{original_name}</h2>
                <h3>{tagline}</h3>
                <p>{overview}</p>

                {
                isSaved
                ?
                <button onClick={()=>{handleRemove(savedMovie.key)}}>Remove</button>
                :
                <button onClick={()=>{handleAdd(details)}}>Add</button>
                }
                
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
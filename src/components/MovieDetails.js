import { useState } from "react"
import useContentDetails from "../customHooks/useContentDetails";
import firebase from '../firebase';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieDetails = ({match, movieList}) =>{

    const [type] = useState(`/movie/${match.params.movieID}`)

    const { details } = useContentDetails(type);
    const { original_title, tagline, overview, poster_path, id } = details;
    
    const dbRef = firebase.database().ref();
    
    const handleAdd = (movie) => {
        dbRef.push(movie)
    }

    const handleRemove = (key) => {
        dbRef.child(key).remove()
    }
    
    const savedMovie = movieList.find((movie)=>{
        return (
            movie.id === id
            )
        })
        
    const isSaved = movieList.map((movie) => {
        return (
            movie.id
            )
        }).includes(id);
                
    return(
        <div className="poster">
            <div className="description">
                <div className="titleContainer">
                    <h2>{original_title}</h2>
                    {
                        isSaved
                        ?
                        <button className="like" onClick={()=>{handleRemove(savedMovie.key)}}><FaHeart/></button>
                        :
                        <button className="like" onClick={()=>{handleAdd(details)}}><FaRegHeart/></button>
                    }
                </div>
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


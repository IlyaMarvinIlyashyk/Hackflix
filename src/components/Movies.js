import { useState, useRef, useCallback } from "react";
import { Link } from 'react-router-dom'
import useContent from "../customHooks/useContent"

const Movies = () => {

    const [page, setPage] = useState(1)
    const [category] = useState('discover/movie')
    
    const { movies } = useContent(page, category);

    const observer = useRef()
    const lastElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(previous => previous + 1)
            }
        })
        
        if (node) observer.current.observe(node)
    }, [])
    
    return(
        <>
        <ul className="catalogue">
            {movies.map((movie, index) => {

            const { id, poster_path, original_title, } = movie
                
                if (movies.length === index + 1) {
                    return (
                        <li ref={lastElementRef} key={id}>
                            {
                            poster_path
                            ?
                            <Link to={`/movie/${id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                                alt={`Poster for ${original_title}`}
                            />
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
                            <Link to={`/movie/${id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                                alt={`Poster for ${original_title}`}
                            />
                            </Link>
                            :
                            <h2>Something went wrong 😢</h2>
                            }
                        </li>
                    )
                }
            })}
        </ul>
        </>
    )
}

export default Movies;

// global updater that would pass it to the Children, blur, preventing API from firing on every type, restructuring 

// import { useState, useRef, useCallback } from "react";
// import { Link } from 'react-router-dom'
// import useContent from "../customHooks/useContent"

// const Movies = () => {

//     const [page, setPage] = useState(1)
//     const [category] = useState('discover/movie')

//     const { movies } = useContent(page, category);


//     return (
//         <>
//             <ul className="catalogue">
//                 {movies.map((movie, index) => {

//                     const { id, poster_path, original_title, } = movie

                     
//                         return (
//                             <li key={id}>
//                                 {
//                                     poster_path
//                                         ?
//                                         <Link to={`/movie/${id}`}>
//                                             <img
//                                                 src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
//                                                 alt={`Poster for ${original_title}`}
//                                             />
//                                         </Link>
//                                         :
//                                         <h2>Something went wrong 😢</h2>
//                                 }
//                             </li>
//                         )
                    
//                 })}
//             </ul>
//         </>
//     )
// }

// export default Movies;
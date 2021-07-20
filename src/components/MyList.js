import { Link } from 'react-router-dom'

const MyList = ({userList}) => {

    return (
        <>
            <ul className="catalogue">
            {
            userList.map((user)=>{
                return (
                    <li key={user.key}>
                        {
                            user.tv === undefined
                            ?
                            <Link to={`/movie/${user.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${user.poster}`}
                                    alt={`Poster for ${user.title}`}
                                />
                            </Link>
                            :
                            <Link to={`/tv/${user.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${user.poster}`}
                                    alt={`Poster for ${user.title}`} />
                            </Link>
                        }
                    </li>
                )
            })
            }
        </ul>
        </>
    )
}

export default MyList
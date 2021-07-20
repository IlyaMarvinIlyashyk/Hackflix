import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useContent(page, category) {

    // const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)
    const [movies, setMovies] = useState([])
    const [tv, setTv] = useState([])
    const [trending, setTrending] = useState([])

    useEffect(() => {

        // setLoading(true)
        setError(false)

        let cancel
        axios({
            url: `https://api.themoviedb.org/3/${category}`,
            params: {
                api_key: '50f5c76a90810a4a56f5198029f99d06',
                sort_by: 'popularity.desc',
                page: page,
            },
            cancelToken: new axios.CancelToken(c => cancel = c)

        }).then((response) => {
            setMovies(previous => {
                return [...new Set ([...previous, ...response.data.results])]
            })                
            setTv(previous => {
                return [...new Set ([...previous, ...response.data.results])]
            })
            setTrending(previous => {
                return [...new Set ([...previous, ...response.data.results])]
            })

        }).catch(e => {
            if (axios.isCancel(e))
                return
            setError(true)
        })
        return () => cancel()
    }, [page]);

    return { error, hasMore, movies, tv, trending }
}

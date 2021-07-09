import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useContent(page, category) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)
    const [movies, setMovies] = useState([])
    const [tv, setTv] = useState([])
    const [trending, setTrending] = useState([])

    useEffect(() => {

        axios({
            url: `https://api.themoviedb.org/3/${category}`,
            params: {
                api_key: '50f5c76a90810a4a56f5198029f99d06',
                sort_by: 'popularity.desc',
                page: page,
            },
        }).then((response) => {
            setMovies(response.data.results)
            setTv(response.data.results)
            setTrending(response.data.results)
        })

    }, [page]);

    return { loading, error, hasMore, movies, tv, trending }
}

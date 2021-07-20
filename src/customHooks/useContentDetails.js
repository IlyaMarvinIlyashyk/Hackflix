import axios from 'axios'
import { useState, useEffect } from 'react'

export default function useContentDetails (type) {
    
    const [details, setDetails] = useState([])

    useEffect(() => {

        axios({
            url: `https://api.themoviedb.org/3/${type}`,
            params: {
                api_key: '50f5c76a90810a4a56f5198029f99d06'
            }
        }).then((response) => {
            setDetails(response.data)
        })

        

    }, [])    
    
    return  { details }
    
}

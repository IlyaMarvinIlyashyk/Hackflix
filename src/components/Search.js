import axios from "axios"
import { useEffect, useState } from "react"

const Search = () => {

    const [search, setSearch] = useState('')

    // useEffect(()=>{
    //     // use this to reset the results, rather than append
    // },[search])

    useEffect(() => {
        
        let cancel
        
        axios({
            url:`https://api.themoviedb.org/3/search/keyword`,
            params: {
                api_key:'50f5c76a90810a4a56f5198029f99d06',
                query: search,
                page: 1
            },
            cancelToken: new axios.CancelToken(c => cancel = c) 
        })
        .then((response)=> {
            console.log(response.data.results)
        })
        .catch(event => {
            if (axios.isCancel(event))
            return
        })
        return () => cancel() 
    }, [search])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    
    return (
        <input type="text" placeholder="Search Movies/ TV" onChange={handleSearch} />
    )
}

export default Search
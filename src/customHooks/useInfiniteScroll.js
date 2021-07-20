import { useRef, useState, useCallback } from "react"

export default function useInfiniteScroll () {
    
    const [page, setPage] = useState(1)
    
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

    return { page, lastElementRef }
}

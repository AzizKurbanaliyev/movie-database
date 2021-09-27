import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Movie from './Movie'



const handleSearch = () => {

}
function Search() {

    const api_key = "9e2bd5d6b93ebd2241db038481a845ed"

    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${searchTerm}`
    
    const fetchData = async (url) => {
        const res = await fetch(url);
        const data = await res.json(); 
        return data
    }
    const handleSearch = async (e) => {
        e.preventDefault()
        const data = await fetchData(searchUrl)
        setResults(data.results)
    }

    


    return(
        <>
            <h2 className="details-header">Search for movies or TV Shows: </h2>
            <form onSubmit={handleSearch} className="search">
                <input
                className="search-bar"
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            
            <div className="container">
                <div className="movies">
                    {results.map((movie, idx) => (<Movie key={idx} item={movie}/>))}
                </div>
            </div>
        </>
    )
    
}

export default Search
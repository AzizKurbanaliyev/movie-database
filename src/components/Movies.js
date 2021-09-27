import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Movie from './Movie'

function Movies({movies}) {
    return (
        <div className="movies">
            { movies.map((movie, idx) => {
                if (idx < 6) return (<Movie key={idx} item={movie}/>)
                })
            }
        </div>
    )
}

export default Movies
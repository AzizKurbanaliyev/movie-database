import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Movie from './Movie'

function Tv({movies}) {
    return (
        <div className="movies">
            { movies.map((item, idx) => {
                if (idx < 6) return (
                    <div key={idx} className="movies-item">
                        <Link to={{ pathname: "/details", state: { item, isTv: true }}} className="movies__link">
                            <h3 className="movies__title">{item.name}</h3>
                            <img className="movies__poster" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
                            <span>Rating: {item.vote_average}</span>
                        </Link>
                    </div>
                )
                })
            }
        </div>
    )
}

export default Tv
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Movie({item}) {
    const customPath = `/details/${item.id}`
    return (

        <div className="movies-item">
            <Link to={{ pathname: customPath, state: { item } }} className="movies__link">
              <h3 className="movies__title">{item.title}</h3>
              <img className="movies__poster" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
              <span>Rating: {item.vote_average}</span>
            </Link>
       </div>
    )
}

export default Movie 
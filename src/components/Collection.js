import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Collection({location: {collection, isTv}}) {
    return (
        <div className="container">
            <div className="movies">
                {collection.map((item, idx) => (
                      <div key={idx} className="movies-item">
                        <Link to={{ pathname: "/details/:id", state: { item, isTv: isTv} }} className="movies__link">
                          <h3 className="movies__title">{isTv ? item.name : item.title}</h3>
                          <img className="movies__poster" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
                          <span>Rating: {item.vote_average}</span>
                        </Link>
                      </div>
                  ))
                }
            </div>
        </div>
    )
}

export default Collection
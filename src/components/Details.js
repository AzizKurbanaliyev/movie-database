import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

import Movies from './Movies'

function Details({location: {state: {item, isTv}}}) {

    const { id } = useParams();

    const api_key = "9e2bd5d6b93ebd2241db038481a845ed"
    const creditsUrl = isTv ? `https://api.themoviedb.org/3/tv/${item.id}/credits?api_key=${api_key}` :`https://api.themoviedb.org/3/movie/${item.id}/credits?api_key=${api_key}`
    const similarUrl = isTv ? `https://api.themoviedb.org/3/tv/${item.id}/similar?api_key=${api_key}` :`https://api.themoviedb.org/3/movie/${item.id}/similar?api_key=${api_key}`
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
    const posterPath = `url(https://image.tmdb.org/t/p/original${item.poster_path})`

    const[credits, setCredits] = useState([])
    const[similar, setSimilar] = useState([])
    const[movie, setMovie] = useState({})

    const date = new Date(Date.parse(movie.release_date))
    const release_date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    const runtime = `${Math.floor(movie.runtime/60)}h ${movie.runtime%60}m`

    const fetchData = async (url) => {
        const res = await fetch(url);
        const data = await res.json(); 
        return data
    }

    useEffect(async () => {
        const data = await fetchData(creditsUrl)
        const similar_list = await fetchData(similarUrl)
        const movie_data  = await fetchData(movieUrl)

        setCredits(data.cast)
        setSimilar(similar_list.results)
        setMovie(movie_data)
    })
    
    return (
        <>
            <div className="container">
                <div className="details" style={{backgroundImage: posterPath}}>
                        <div className="details-item">
                            <h1 className="details__title">{isTv ? item.name : item.title}</h1>
                            <div className="details__info">
                                <span className="banner-info__year">Release date: {release_date}</span>
                                <span className="banner-info__runtime">Duration: {runtime}</span>
                                
                            </div>
                            <p className="details__text">{item.overview}</p>
                        </div>
                </div>
            </div>
            <section id="cast">
                <div className="container">
                    <h2 className="details-header">Cast: </h2>
                    <div className="cast">
                        {credits.map(actor => {
                            if (actor.known_for_department === "Acting") {
                                return (
                                    <div className="cast-item">
                                        <h3 className="cast__title">{actor.name}</h3>
                                        <a href="" className="cast__link">
                                            {(actor.profile_path !== null) ? <img className="cast__img" src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt="actor-photo" /> : <h4>No profile pic </h4>}
                                        </a>
                                    </div>
                                )
                            }
                            
                        })}
                    </div>
                </div>
            </section>
            <div className="similar">
                <div className="container">
                    <h2 className="details-header">Similar movies: </h2>
                    <Movies movies={similar}/>
                </div>
            </div>
        </>
    )
}

export default Details
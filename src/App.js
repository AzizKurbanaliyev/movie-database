import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Header from './components/Header'
import Details from './components/Details'
import Search from './components/Search'
import Movies from './components/Movies'
import Tv from './components/Tv'
import Collection from './components/Collection'
import Footer from './components/Footer'

const api_key = "9e2bd5d6b93ebd2241db038481a845ed"
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`
const topUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=2`
const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&page=1`

const popularTvUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&page=1`
const topTvUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&page=14`

function App() {

  const[top, setTop] = useState([])
  const[popular, setPopular] = useState([])
  const[upcoming,setUpcoming] = useState([])

  const[tvPopular, setTvPopular] = useState([])
  const[tvTop, setTvTop] = useState([])

  const fetchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json(); 
    return data
  }

  useEffect(async () => {

    const popular_list = await fetchMovies(popularUrl)
    const top_list = await fetchMovies(topUrl)
    const upcoming_list = await fetchMovies(upcomingUrl)

    const tv_popular_list = await fetchMovies(popularTvUrl)
    const tv_top_list = await fetchMovies(topTvUrl)

    setPopular(popular_list.results)
    setTop(top_list.results)
    setUpcoming(upcoming_list.results)

    setTvPopular(tv_popular_list.results)
    setTvTop(tv_top_list.results)
  },[])

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/details/:id' component={Details} />
        <Route path='/collection' component={Collection} />
        <Route path='/search' component={Search} />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
            <section id="movies">
              <div className="container">
                <h2 className="category"> 
                  <Link to={{ pathname: "/collection", collection: popular}} className="movies__link" >Popular movies</Link> 
                </h2>
                <Movies movies={popular}/>

                <h2 className="category"> 
                  <Link to={{ pathname: "/collection", collection: top}} className="movies__link" >Top Rated movies</Link> 
                </h2>
                <Movies movies={top}/>

                <h2 className="category"> 
                  <Link to={{ pathname: "/collection", collection: upcoming}} className="movies__link" >Upcoming movies</Link> 
                </h2>
                <Movies movies={upcoming}/>
              </div>
            </section>
            <section id="tv">

              <div className="container">
                <h2 className="category"> 
                  <Link to={{ pathname: "/collection", collection: tvPopular, isTv: true}} className="movies__link" >Popular TV Shows</Link> 
                </h2>
                <Tv movies={tvPopular} />
              </div>

              <div className="container">
                <h2 className="category"> 
                  <Link to={{ pathname: "/collection", collection: tvTop, isTv: true}} className="movies__link" >Top Rated TV Shows</Link> 
                </h2>
                <Tv movies={tvTop} />
              </div>
            </section>
            </>
            
          )}
        />
        <Footer />
        
      </div>
    </Router>
    
  );
}

export default App;

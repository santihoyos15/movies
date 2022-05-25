import React from 'react'
import './App.css';
import SearchBox from './components/SearchBox'
import MovieGallery from './components/MovieGallery'
import CategoryList from './components/CategoryList'
import MovieDetail from './components/MovieDetail'
import {API_KEY} from './secrets.js'

export default function App() {
    const [trends, setTrends] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [movieClicked, setMovieClicked] = React.useState(false)
    const [currentMovieId, setCurrentMovieId] = React.useState('')
    const [currentMovie, setCurrentMovie] = React.useState(null)
    
    React.useEffect(() => {
        getTrends()
    }, [])

    React.useEffect(() => {
        currentMovieId && getMovie(currentMovieId)
    }, [currentMovieId])

    async function getTrends () {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        const data = await res.json()
        const movies = data.results
        setTrends(movies)
    }

    async function getMovie (movieId) {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
        const data = await res.json()
        setCurrentMovie(data)
    }

    function toggleMovie(id) {
        setCurrentMovieId(id)
        setMovieClicked(prevMovieClicked => !prevMovieClicked)
    }

    function handleChange (evt) {
        setSearch(evt.target.value)
    }
    
    function goBackFromMovieDetail () {
        toggleMovie()
    }

	return (
        <div className="App">
            {!movieClicked ?
                <main className="landing-page-container">
                    <h1>Movies</h1>
                    <SearchBox handleChange={handleChange} value={search}/>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h2>Trends</h2>
                        <h3>See more</h3>
                    </div>
                    <MovieGallery toggleMovie={toggleMovie} movies={trends}/>
                    <h2>Categories</h2>
                    <CategoryList />
                </main>
                : 
                <MovieDetail 
                    handleClick={goBackFromMovieDetail}
                    movie={currentMovie}
                />
            }
        </div>
    )
}
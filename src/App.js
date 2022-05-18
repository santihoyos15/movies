import React from 'react'
import './App.css';
import SearchBox from './components/SearchBox'
import Movie from './components/Movie'
import CategoryList from './components/CategoryList'
import {API_KEY} from './secrets.js'

export default function App() {
    const [search, setSearch] = React.useState('')
    const [movieClicked, setMovieClicked] = React.useState(false)

    const moviesElements = [
        <Movie handleClick={toggleMovie}></Movie>,
        <Movie handleClick={toggleMovie}></Movie>,
        <Movie handleClick={toggleMovie}></Movie>,
        <Movie handleClick={toggleMovie}></Movie>,
        <Movie handleClick={toggleMovie}></Movie>
    ]

    function toggleMovie() {
        setMovieClicked(prevMovieClicked => !prevMovieClicked)
    }

    function handleChange (evt) {
        setSearch(evt.target.value);
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
                    <div className="movie-gallery">
                        {moviesElements}
                    </div>
                    <h2>Categories</h2>
                    <CategoryList />
                </main>
                : 
                <p>Test</p>
            }
        </div>
    )
}
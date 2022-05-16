import React from 'react'
import './App.css';
import SearchBox from './components/SearchBox'
import Movie from './components/Movie'
import {API_KEY} from './secrets.js'

export default function App() {
    const [inputValue, setInputValue] = React.useState('')

    const moviesElements = [
        <Movie></Movie>,
        <Movie></Movie>,
        <Movie></Movie>
    ]

    function handleChange (evt) {
        setInputValue(evt.target.value);
    }

	return (
        <div className="App">
            <main className="landing-page-container">
                <h1>Movies</h1>
                <SearchBox handleChange={handleChange} value={inputValue}/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2>Trends</h2>
                    <h3>See more</h3>
                </div>
                <div className="movie-gallery">
                    {moviesElements}
                </div>
            </main>
        </div>
    );
}
import React from 'react'
import Movie from './Movie'

export default function MovieGallery (props) {
    const moviesElements = props.movies.map(movie => <Movie key={movie.id} handleClick={props.toggleMovie} movie={movie}/>)
    return (
        <div className="movie-gallery">
            {moviesElements}
        </div>
    )
}
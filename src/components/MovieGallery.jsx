import React from 'react'
import Movie from './Movie'

export default function MovieGallery (props) {
    const moviesElements = [
        <Movie handleClick={props.toggleMovie}></Movie>,
        <Movie handleClick={props.toggleMovie}></Movie>,
        <Movie handleClick={props.toggleMovie}></Movie>,
        <Movie handleClick={props.toggleMovie}></Movie>,
        <Movie handleClick={props.toggleMovie}></Movie>
    ]

    return (
        <div className="movie-gallery">
            {moviesElements}
        </div>
    )
}
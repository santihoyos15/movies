import React from 'react'
import CategoryList from './CategoryList'
import MovieGallery from './MovieGallery'

export default function MovieDetail (props) {
    console.log(props.movie)
    return (
        <>
            <div className='movie-detail-image'>
            <div className="material-symbols-outlined go-back-button" onClick={props.handleClick}>arrow_back</div>
            </div>
            <div className="movie-detail">
                <h1>Some Movie</h1>
                <p>A little comment about this movie</p>
                <CategoryList />
            </div>
        </>
    )
}
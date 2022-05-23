import React from 'react'

export default function Movie (props) {
    return (
        <div className="movie" onClick={() => props.handleClick(props.movie.id)}>
            
        </div>
    )
}
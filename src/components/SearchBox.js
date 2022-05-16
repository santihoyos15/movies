import React from "react";

export default function SearchBox (props) {
    return (
        <div className="search-box-container">
            <input 
                className='search-box'
                placeholder='The Avengers'
                value={props.value}
                onChange={props.handleChange}
            />
            <input className='search-box-button' type='button' value='🔍'/>
        </div>
    )
}
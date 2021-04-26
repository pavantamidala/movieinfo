import React, { useState } from 'react'
import './searchBar.css'

function SearchBar(props){
    
    function clickHandle(e){
        props.setSearchValue(e.target.value)
    }
    return (
        <div>
            <h1>Movie Info</h1>
            <strong>
            <label htmlFor="search-bar">Movie Name:</label>
            </strong>
            <input label="search-bar" type="text" value={props.searchValue}  onChange={clickHandle} />
        </div>
    )
}

export default SearchBar;
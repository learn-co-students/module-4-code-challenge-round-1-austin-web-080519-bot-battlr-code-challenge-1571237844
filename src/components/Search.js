import React from 'react';

const Search = (props) => {
    return (
        <div className="search">
            <label>Filter Bots:</label>
            <input type="text" onChange={event => props.onSearch(event.target.value)}>
            </input>
        </div>
    )
}

export default Search;
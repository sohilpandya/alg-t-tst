import React from 'react';

const Search = ({ inputValue, handleSearchInput }) => {
    return (
        <input 
        type="name" 
        value={inputValue}
        placeholder="Search for Restaurants by Name, Cuisine, Location" 
        onChange={(e) => { handleSearchInput(e.target.value); }}
        />
    )
}

export default Search
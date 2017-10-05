import React from "react";

const Search = ({ inputValue, handleSearchInput }) => {
  return (
    <div className="bg-custom-dark-blue pv4">
      <input
        type="name"
        className="search__input"
        value={inputValue}
        placeholder="Search for Restaurants by Name, Cuisine, Location"
        onChange={e => {
          handleSearchInput(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;

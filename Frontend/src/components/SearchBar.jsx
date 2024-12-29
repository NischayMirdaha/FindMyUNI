import React from 'react';
import './SearchBar.jsx';
import { FaSearch, FaFilter } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <h2>Explore more than 350 colleges on FindMyUni</h2>
      <div className="search-input">
        <FaSearch />
        <input type="text" placeholder="Enter College name" />
        <FaFilter />
      </div>
    </div>
  );
};

export default SearchBar;

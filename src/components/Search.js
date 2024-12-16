import React from "react";
import "./styles/SearchBar.css";

const SearchBar = ({ query, onSearch }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search notes..."
                value={query}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
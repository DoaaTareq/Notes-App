import React from "react";
import { app_icons } from "../const";
import "../styles/Filter.css";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Filter = ({filterBy, onFilterChange}) => {
    console.log(filterBy);
    return (
        <>
            <span className={"filter-text"}>Filter by:</span>
            <select className={"filter-dropdown"} value="" onChange={(e) => {
                onFilterChange(e.target.value);
            }}>
                    <option value="">Category</option>
                    <option value="work">Work {app_icons["work"]}</option>
                    <option value="home">home {app_icons["home"]}</option>
                    <option value="toDo">To Do {app_icons["toDo"]}</option>
            </select>
            <div className={"filter-items-container"}>
                {filterBy.map((filter, index) => (
                    <span key={index} className="filter-item">
                        {filter}{app_icons[filter]}
                    </span>
                ))}
                {
                    filterBy.length > 0 ? <button className="filter-btn" onClick={() => onFilterChange("")}>❌</button>: null
                }
            </div>
            
        </>
    );
};

export default Filter;
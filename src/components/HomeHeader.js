import { useNavigate } from "react-router-dom";
import "../styles/HomeHeader.css";
import "../styles/SearchBar.css";

const HomeHeader = ({ query, onSearch }) => {

    const navigate = useNavigate();

    return (
        <div className="home-header">
            <button className="add-btn" onClick={ () => navigate("/add")}>Add Note</button>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={query}
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
            {/* <button className="filter-btn" onClick={() => setFilterBy("")}>❌</button> */}
        </div>
    );
};

export default HomeHeader;
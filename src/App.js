import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import "./styles/App.css";
import "./styles/Notes.css";


const App = () => {
    return (
        <Router>
            <div className="app">
                <header className="app-header">
                    <h1>My Notes</h1>
                </header>
                <AppRoutes />
            </div>
        </Router>
    );
};

export default App;
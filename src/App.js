import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import AppRoutes from "./routes";
import "./styles/App.css";
import "./styles/Notes.css";
import "./styles/NoteForm.css";

const App = () => {
    const [notes, setNotes] = useLocalStorage("notes", []);

    const addNote = (newNote) => {
        if (!newNote.title) return;
        setNotes((prevNotes) => [...prevNotes, newNote]);
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    const updateNote = (id, updatedContent) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === id ? { ...note, content: updatedContent } : note
            )
        );
    };

    return (
        <Router>
            <div className="app">
                <header className="app-header">
                    <h1>My Notes</h1>
                </header>
                <AppRoutes notes={notes} addNote={addNote} deleteNote={deleteNote}/>
                {/* <NotesList notes={notes} onDelete={deleteNote} /> */}
            </div>
        </Router>
    );
};

export default App;
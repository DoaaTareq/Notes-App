import React, { useCallback } from "react";
import NotesList from "../components/NotesList";
import NoteForm from "../components/NoteForm";
import { useLocalStorage } from "../hooks/useLocalStorage";


const Home = () => {
    const [notes, setNotes] = useLocalStorage("notes", []);

    const addNote = useCallback((newNote) => {
        if (!newNote.title) return;
        setNotes((prevNotes) => [...prevNotes, newNote]);
    }, [setNotes]);

    const deleteNote = useCallback((id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }, [setNotes]);
    
    return (
        <>
            <NoteForm onAddNote={addNote} editingNote={false}/>
            <NotesList notes={notes} onDelete={deleteNote} /> 
        </>
    );
};
export default Home;
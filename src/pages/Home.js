import React, { useCallback, useMemo, useState } from "react";
import NotesList from "../components/NotesList";
import NoteForm from "../components/NoteForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import SearchBar from "../components/SearchBar";

const Home = () => {
    const [notes, setNotes] = useLocalStorage("notes", []);
    const [searchQuery, setSearchQuery] = useState("");

    const addNote = useCallback((newNote) => {
        if (!newNote.title) return;
        setNotes((prevNotes) => [...prevNotes, newNote]);
    }, [setNotes]);

    const deleteNote = useCallback((id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }, [setNotes]);

    const filteredNotes = useMemo(() => {
        return notes.filter((note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [notes, searchQuery]);
    
    
    return (
        <>
            <NoteForm onAddNote={addNote} editingNote={false}/>
            <SearchBar query={searchQuery} onSearch={setSearchQuery} />
            <NotesList notes={filteredNotes} onDelete={deleteNote} /> 
        </>
    );
};
export default Home;
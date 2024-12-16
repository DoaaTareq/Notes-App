import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../styles/EditNote.css";
import NoteForm from "../components/NoteForm";

const AddNote = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useLocalStorage("notes", []);


    const addNote = useCallback((newNote) => {
        if (!newNote.title) return;
        console.log(newNote);
        setNotes((prevNotes) => [...prevNotes, newNote]);
        navigate("/")
    }, [setNotes]);

    return (
        <>
            <NoteForm onAddNote={addNote} editingNote={false}/>
            <button className="cancel-btn" onClick={ () => navigate("/")}>Cancel</button>
        </>
    );
};

export default AddNote;
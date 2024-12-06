import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../styles/EditNote.css";
import NoteForm from "./NoteForm";

const EditNote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [notes, setNotes] = useLocalStorage("notes", []);
    console.log(notes, id);
    const note = notes.find((note) => note.id == id);

    useEffect(() => {
        if (!note) {
            console.log("Note not found");
            navigate("/");
        }
    }, [note, navigate]);

    const handleUpdate = (oldNote, newTitle, newContent) => {
        console.log(oldNote, newTitle, newContent);
        const updatedNotes = notes.map((note) => {
            
            if (note.id == oldNote.id) {
                return { ...note, title: newTitle, content: newContent };
            }
            return note;
        });
        
        console.log("after update",notes);
        setNotes(updatedNotes);
        navigate("/");
    };

    return (
        <>
            <NoteForm editingNote={note} onUpdateNote={handleUpdate}/>
            <button className="cancel-btn" onClick={ () => navigate("/")}>Cancel</button>
        </>
    );
};

export default EditNote;
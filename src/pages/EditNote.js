import React, { useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../styles/EditNote.css";
import NoteForm from "../components/NoteForm";

const EditNote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [notes, setNotes] = useLocalStorage("notes", []);
    const note = notes.find((note) => note.id.toString() === id);

    useEffect(() => {
        if (!note) {
            navigate("/");
        }
    }, [note, navigate]);

    const handleUpdate = useCallback((oldNote, newTitle, newContent) => {
        const updatedNotes = notes.map((note) => {
            if (note.id === oldNote.id) {
                return { ...note, title: newTitle, content: newContent };
            }
            return note;
        });

        setNotes(updatedNotes);
        navigate("/");
    }, [notes, navigate, setNotes]);

    return (
        <>
            <NoteForm editingNote={note} onUpdateNote={handleUpdate}/>
            <button className="cancel-btn" onClick={ () => navigate("/")}>Cancel</button>
        </>
    );
};

export default EditNote;
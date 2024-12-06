import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../styles/EditNote.css";
import NoteForm from "../components/NoteForm";

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


    return (
        <>
            <NoteForm editingNote={note} onUpdateNote={handleUpdate}/>
            <button className="cancel-btn" onClick={ () => navigate("/")}>Cancel</button>
        </>
    );
};

export default EditNote;
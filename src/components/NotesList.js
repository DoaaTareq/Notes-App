import React from "react";
import Note from "./Note";
import { useLocalStorage } from "../hooks/useLocalStorage";

const NotesList = ({ onDelete, notes }) => {
    // const [notes, setNotes] = useLocalStorage("notes", []);
    // const sortedNotes = [...notes].sort((a, b) => a.title.localeCompare(b.title));


    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    onDelete={() => onDelete(note.id)}
                />
            ))}
        </div>
    );
};

export default NotesList;
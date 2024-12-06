import React from "react";
import Note from "./Note";

const NotesList = ({ onDelete, notes }) => {

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
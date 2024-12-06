import React, { useEffect, useState } from "react";

    const NoteForm = ({ onAddNote, editingNote, onUpdateNote }) => {
        const [noteContent, setNoteContent] = useState(editingNote ? editingNote.content : "");
        const [noteTitle, setNoteTitle] = useState(editingNote ? editingNote.title : "");

        // If editing, populate the form with the note's current content and title
        useEffect(() => {
            if (editingNote) {
                setNoteContent(editingNote.content);
                setNoteTitle(editingNote.title);
            } else {
                setNoteContent(""); // Reset if not editing
                setNoteTitle(""); // Reset if not editing
            }
        }, [editingNote]);

        const handleSubmit = (e) => {
            e.preventDefault();
            if (editingNote) {
                // Update the existing note
                onUpdateNote(editingNote, noteTitle, noteContent);
            } else {
                // Add a new note
                onAddNote({ id: Date.now(), title: noteTitle, content: noteContent });
            }
            setNoteContent("");
            setNoteTitle("");
        };

        return (
            <form className="note-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                />
                <textarea
                    placeholder="Write a note..."
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    rows="4"
                />
                <button type="submit">{editingNote ? "Update Note" : "Add Note"}</button>
            </form>
        );
    };


export default NoteForm;

import React, { useEffect, useState, useCallback } from "react";
import "../styles/NoteForm.css";

    const NoteForm = ({ onAddNote, editingNote, onUpdateNote }) => {
        const [noteContent, setNoteContent] = useState(editingNote ? editingNote.content : "");
        const [noteTitle, setNoteTitle] = useState(editingNote ? editingNote.title : "");

        useEffect(() => {
            if (editingNote) {
                setNoteContent(editingNote.content);
                setNoteTitle(editingNote.title);
            } else {
                setNoteContent("");
                setNoteTitle("");
            }
        }, [editingNote]);

        const handleSubmit = useCallback((e) => {
            e.preventDefault();
            if (editingNote) {
            onUpdateNote(editingNote, noteTitle, noteContent);
            } else {
            onAddNote({ id: Date.now(), title: noteTitle, content: noteContent });
            }
            setNoteContent("");
            setNoteTitle("");
        }, [editingNote, noteTitle, noteContent, onAddNote, onUpdateNote]);

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

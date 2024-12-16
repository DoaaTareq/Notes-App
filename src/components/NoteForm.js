import React, { useEffect, useState, useCallback } from "react";
import "../styles/NoteForm.css";
import { app_icons } from "../const";

const NoteForm = ({ onAddNote, editingNote, onUpdateNote }) => {
    const [noteContent, setNoteContent] = useState(editingNote ? editingNote.content : "");
    const [noteTitle, setNoteTitle] = useState(editingNote ? editingNote.title : "");
    const [noteCategory, setNoteCategory] = useState(editingNote ? editingNote.category : "");

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
        onUpdateNote(editingNote, noteTitle, noteContent, noteCategory);
        } else {
        onAddNote({ id: Date.now(), title: noteTitle, content: noteContent, category: noteCategory });
        }
        setNoteContent("");
        setNoteTitle("");
    }, [editingNote, noteTitle, noteContent, noteCategory, onAddNote, onUpdateNote]);
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
            <select value={noteCategory} onChange={(e) => setNoteCategory(e.target.value)}>
                <option value="">Select a category</option>
                <option value="work">Work {app_icons["work"]}</option>
                <option value="home">home {app_icons["home"]}</option>
                <option value="toDo">To Do {app_icons["toDo"]}</option>
            </select>
            <button className="add-btn" type="submit">{editingNote ? "Update Note" : "Add Note"}</button>
        </form>
    );
};


export default NoteForm;

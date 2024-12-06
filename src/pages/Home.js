import NotesList from "../components/NotesList";
import NoteForm from "../components/NoteForm";
import { useLocalStorage } from "../hooks/useLocalStorage";


const Home = () => {
    const [notes, setNotes] = useLocalStorage("notes", []);

    const addNote = (newNote) => {
        if (!newNote.title) return;
        setNotes((prevNotes) => [...prevNotes, newNote]);
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    const updateNote = (id, updatedContent) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === id ? { ...note, content: updatedContent } : note
            )
        );
    };
    
    return (
        <>
            <NoteForm onAddNote={addNote} editingNote={false}/>
            <NotesList notes={notes} onDelete={deleteNote} /> 
        </>
    );
};
export default Home;
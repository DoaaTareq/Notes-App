import { useRoutes } from 'react-router-dom';
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import EditNote from "./components/EditNote";

const AppRoutes = ({ notes, addNote, deleteNote, updateNote }) => {
    return useRoutes([
        {
            path: "/",
            element: (
                <>
                    <NoteForm onAddNote={addNote} editingNote={false} />
                    <NotesList notes={notes} onDelete={deleteNote} />
                </>
            ),
        },
        {
            path: "/edit/:id",
            element: <EditNote/>,
        },
    ]);
};

export default AppRoutes;
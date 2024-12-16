import { useCallback } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { app_icons, categoryColors } from '../const';

const Note = ({ note, onDelete }) => {
    const navigate = useNavigate();

    const handleEdit = useCallback(() => {
        navigate(`/edit/${note.id}`);
    }, [navigate, note.id]);

    return (
        <div className="note" onClick={handleEdit}>
            {note.category? <div
                className="category-icon"
                style={{ backgroundColor: categoryColors[note.category] }}
                title={note.category}
            >
                {app_icons[note.category]}
            </div>: null}
            <p>{note.title.length > 29 ? `${note.title.substring(0, 17)} ...` : note.title}</p>
            <div className="button-container">
                <button className='btn-delete' onClick={() => onDelete(note.id)}>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default Note;
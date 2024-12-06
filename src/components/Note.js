import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Note = ({ note, onDelete, onEdit }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        console.log(note);
        navigate(`/edit/${note.id}`);
    };

    return (
        <div className="note" onClick={handleEdit}>
            <p>{note.title.length > 29 ? `${note.title.substring(0, 29)} ...` : note.title}</p>
            <div className="button-container">
                <button className='btn-delete' onClick={() => onDelete(note.id)}>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default Note;
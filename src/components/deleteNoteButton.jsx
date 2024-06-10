
import { deleteNote, getAllNote } from "../services/notes/notesServices";

export const DeleteNoteButton = ({ noteId, noteName, setNote }) => {
  const handleAlertDelete = () => {
    if (window.confirm(`Are you sure about deleting ${noteName}?`)) {
      deleteNote(noteId)
        .then(() => getAllNote())
        .then((notes) => {
          setNote(notes.notes);
        })
        .catch((error) => {
          console.error("Error deleting note:", error);
        });
    }
  };

  return (
    <div className="delete-button-container">
      <button onClick={handleAlertDelete} className="delete-button">
        <strong>Remove</strong>
      </button>
    </div>
  );
};

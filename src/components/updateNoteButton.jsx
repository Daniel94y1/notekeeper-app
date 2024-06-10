import { UpdateNoteForm } from "./updateNoteForm";
import { useVisibilityUpdateForm } from "../hooks";
import "./updateNoteButton.css";

export const UpdateNoteButton = ({
  setNote,
  noteId,
  noteName,
  noteDescription,
  noteImportant,
  noteStatus,
  noteDue_Date,
}) => {
  const { isVisible, toggleVisibility } = useVisibilityUpdateForm();

  const handleUpdateClick = () => {
    toggleVisibility(true);
  };

  return (
    <span className="update-button-container">
      <button onClick={handleUpdateClick} className="update-button">
        <b>Update</b>
      </button>
      {isVisible && (
        <UpdateNoteForm
          id={noteId}
          setNote={setNote}
          noteName={noteName}
          noteDescription={noteDescription}
          noteImportant={noteImportant}
          noteStatus={noteStatus}
          noteDue_Date={noteDue_Date}
          toggleVisibility={toggleVisibility}
        />
      )}
    </span>
  );
};

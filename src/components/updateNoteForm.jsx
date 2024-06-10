import validateEnum from "../helpers/validation/validateEnum";
import validateNonEmpty from "../helpers/validation/validateNonEmpty";
import validateType from "../helpers/validation/validateType";
import notesService from "../services/notes/notesService";
import { useUpdateForm } from "../hooks";
import "./updateNoteForm.css";

export const UpdateNoteForm = ({
  id,
  setNote,
  noteName,
  noteDescription,
  noteImportant,
  noteStatus,
  noteDue_Date,
  visibilityUpdateForm,
}) => {
  const {
    name,
    description,
    important,
    status,
    due_Date,
    handleNameValue,
    handleDescriptionValue,
    handleImportantValue,
    handleStatusValue,
    handleDue_DataValue,
  } = useUpdateForm({
    name: noteName,
    description: noteDescription,
    important: noteImportant,
    status: noteStatus,
    due_Date: noteDue_Date,
  });

  const editNote = (event) => {
    event.preventDefault();
    const updatedNote = {
      name,
      description,
      important: Boolean(important),
      status,
      due_date: due_Date,
    };

    if (
      validateType(updatedNote) &&
      validateNonEmpty(updatedNote) &&
      validateEnum(updatedNote.status)
    ) {
      notesService
        .updateNote(
          id,
          updatedNote.name,
          updatedNote.description,
          updatedNote.important,
          updatedNote.status,
          updatedNote.due_date
        )
        .then(() => {
          notesService.getAllNote().then((data) => {
            setNote(data.notes);
          });
        })
        .finally(() => {
          visibilityUpdateForm(false);
        });
    }
  };

  return (
    <div className="update-container">
      <h2>Edit Note:</h2>
      <form onSubmit={editNote}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameValue}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={handleDescriptionValue}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="important">Important:</label>
          <input
            id="important"
            type="checkbox"
            checked={important}
            onChange={handleImportantValue}
            className="form-check-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input
            id="status"
            type="text"
            value={status}
            onChange={handleStatusValue}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="due_date">Due Date:</label>
          <input
            id="due_date"
            type="date"
            value={due_Date}
            onChange={handleDue_DataValue}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

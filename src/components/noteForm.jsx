import  { useState } from 'react';
import notesService from '../services/notes/notesServices';
import validateEnum from '../helpers/validators/validateEnum';
import validateNonEmpty from '../helpers/validators/validateNonEmpty';
import validateType from '../helpers/validators/validateType';
import './noteForm.css';

export const CreateNoteForm = ({ setNote }) => {
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImportant, setNewImportant] = useState(false);
  const [newStatus, setNewStatus] = useState('');
  const [newDue_Date, setNewDue_Date] = useState('');

  const addNewNote = (event) => {
    event.preventDefault();
    const newNote = {
      name: newName,
      description: newDescription,
      important: newImportant,
      status: newStatus,
      due_date: newDue_Date,
    };

    if (
      validateType(newNote) &&
      validateNonEmpty(newNote) &&
      validateEnum(newNote.status)
    ) {
      notesService
        .createNote(newNote)
        .then((data) => {
         
          setNote(data); 
        
          setNewName('');
          setNewDescription('');
          setNewImportant(false);
          setNewStatus('');
          setNewDue_Date('');
        })
        .catch((error) => {
          console.error('Error creating note:', error);
        });
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2>Add a New Note:</h2>
        <form onSubmit={addNewNote}>
          <div className="form-group">
            <label htmlFor="new-Name">Name:</label>
            <input
              id="new-Name"
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-Description">Description:</label>
            <input
              id="new-Description"
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-Important">Important:</label>
            <input
              type="checkbox"
              id="new-Important"
              checked={newImportant}
              onChange={(e) => setNewImportant(e.target.checked)}
              className="form-check-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-Status">Status (In Progress/Pending/Done):</label>
            <input
              id="new-Status"
              type="text"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-Due_Date">Due Date (MM/DD/YYYY):</label>
            <input
              id="new-Due_Date"
              type="date"
              value={newDue_Date}
              onChange={(e) => setNewDue_Date(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

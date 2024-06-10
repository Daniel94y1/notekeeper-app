import  { useState } from 'react';
import { CreateNoteForm } from './CreateNoteForm';

const ParentComponent = () => {
  const [ setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div>
      <CreateNoteForm setNote={addNote} />
      {/* Otro contenido */}
    </div>
  );
};

export default ParentComponent;

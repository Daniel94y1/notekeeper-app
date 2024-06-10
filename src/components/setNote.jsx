import React, { useState } from 'react';
import { CreateNoteForm } from './CreateNoteForm';

const ParentComponent = () => {
  // Define el estado para las notas
  const [notes, setNotes] = useState([]);

  return (
    <div>
      {/* Renderiza CreateNoteForm y pasa setNotes como prop */}
      <CreateNoteForm setNote={setNotes} />
      {/* Aquí podrías renderizar otros componentes o mostrar el estado de las notas */}
    </div>
  );
};

export default ParentComponent;

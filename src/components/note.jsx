

export const Note = ({ note,  }) => {
  const handleDelete = () => {
    // Implementa la lógica para eliminar una nota aquí
  };

  const handleUpdate = () => {
    console.log(note);
    // Implementa la lógica para actualizar una nota aquí
  };

  const noteArray = Array.isArray(note) ? note : [];

  return (
    <div className="note-container">
      {noteArray.length > 0 ? (
        noteArray.map((noteItem) => (
          <div key={noteItem.id} className="note-item">
            <h3>{noteItem.name}</h3>
            <p>{noteItem.description}</p>
            <button onClick={() => handleUpdate(noteItem.id)}>Update</button>
            <button onClick={() => handleDelete(noteItem.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No notes available</p>
      )}
    </div>
  );
};

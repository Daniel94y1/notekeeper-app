// src/components/note.jsx
export const Note = ({ note, setNote }) => {
  const handleDelete = (id) => {
    // Lógica para manejar la eliminación de una nota
  };

  const handleUpdate = (id) => {
    // Lógica para manejar la actualización de una nota
  };

  return (
    <div className="note-container">
      {note.map((noteItem) => (
        <div key={noteItem.id} className="note-item">
          <h3>{noteItem.name}</h3>
          <p>{noteItem.description}</p>
          <button onClick={() => handleUpdate(noteItem.id)}>Update</button>
          <button onClick={() => handleDelete(noteItem.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

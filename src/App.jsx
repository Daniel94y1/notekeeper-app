// src/App.jsx
import { useState } from "react";
import { useNote } from "./hooks/note";
import { CreateNoteForm } from "./components/noteForm";
import { NoteList } from "./components/noteList"; // Importa NoteList aquí
import "./App.css";

const App = () => {
  const [updateFlag, setUpdateFlag] = useState(false);
  const { notes, updateNotes } = useNote();

  const handleUpdate = () => {
    setUpdateFlag((prevFlag) => !prevFlag);
  };

  return (
    <div>
      <h1>NOTAS</h1>
      <CreateNoteForm setNote={updateNotes} />
      <NoteList note={notes} setNote={updateNotes} />
    </div>
  );
};

export default App;

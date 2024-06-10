
import { useNote } from "./hooks/note";
import { CreateNoteForm } from "./components/noteForm";
import { NoteList } from "./components/noteList";
import "./App.css";

const App = () => {

  const { note: notes, handleNote: updateNotes } = useNote();

 

  console.log("App notes:", notes); // Debugging

  return (
    <div>
      <h1>NOTAS</h1>
      <CreateNoteForm setNote={updateNotes} />
      <NoteList note={notes} setNote={updateNotes} />
    </div>
  );
};

export default App;

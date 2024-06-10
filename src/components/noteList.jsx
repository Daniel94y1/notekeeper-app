import { Note } from "./note";

export const NoteList = ({ note, setNote }) => {
  console.log("NoteList props:", note); // Debugging

  return (
    <div>
      <h2>Note List</h2>
      <Note note={note} setNote={setNote} />
    </div>
  );
};

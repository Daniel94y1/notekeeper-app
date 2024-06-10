import React from "react";
import { Note } from "./note";

export const NoteList = ({ note, setNote }) => {
  if (!note || note.length === 0) {
    return <p>Empty List</p>;
  }

  return (
    <div>
      <Note note={note} setNote={setNote} />
    </div>
  );
};

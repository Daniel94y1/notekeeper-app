import { useState, useEffect } from "react";
import notesService from "../services/notes/notesServices.js";

export const useNote = () => {
  const [note, setNote] = useState([]);

  const handleNote = (newValue) => {
    console.log("handleNote called with:", newValue); // Debugging
    if (Array.isArray(newValue)) {
      setNote(newValue);
    } else {
      setNote((prevNotes) => [...prevNotes, newValue]);
    }
  };

  const getNote = () => {
    notesService.getAllNote().then((data) => {
      console.log("getNote data:", data); // Debugging
      if (Array.isArray(data.notes)) {
        setNote(data.notes);
      } else {
        setNote([]);
      }
    });
  };

  useEffect(() => {
    getNote();
  }, []);

  return {
    note,
    handleNote,
  };
};

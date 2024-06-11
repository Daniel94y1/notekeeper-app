const validateNonEmpty = (note) => {
  const { title, content, important, status, dueDate } = note;

  // Validar que ninguno de los campos relevantes esté vacío
  const isTitleNonEmpty = title !== "";
  const isContentNonEmpty = content !== "";
  const isImportantValid = important !== undefined; // Validar que existe y no es undefined
  const isStatusNonEmpty = status !== "";
  const isDueDateNonEmpty = dueDate !== ""; // Supone que dueDate no es una cadena vacía

  return isTitleNonEmpty && isContentNonEmpty && isImportantValid && isStatusNonEmpty && isDueDateNonEmpty;
};

export default validateNonEmpty;

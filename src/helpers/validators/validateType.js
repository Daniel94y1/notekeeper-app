const validateType = (note) => {
  const { name, description, important, status, dueDate } = note;

  // Validar que el tipo de cada propiedad es correcto
  const isValidName = typeof name === "string";
  const isValidDescription = typeof description === "string";
  const isValidImportant = typeof important === "boolean";
  const isValidStatus = typeof status === "string";
  const isValidDueDate = typeof dueDate === "string"; // Supone que dueDate es una cadena

  return isValidName && isValidDescription && isValidImportant && isValidStatus && isValidDueDate;
};

export default validateType;

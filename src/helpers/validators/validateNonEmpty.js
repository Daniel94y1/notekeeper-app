// src/helpers/validators/validateNonEmpty.js
function validateNonEmpty(note) {
  const { name, description, status, due_date } = note;
  return (
    isNonEmptyString(name) &&
    isNonEmptyString(description) &&
    isNonEmptyString(status) &&
    isNonEmptyString(due_date)
  );
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export default validateNonEmpty;


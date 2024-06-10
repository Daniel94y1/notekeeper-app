function validateType(note) {
  const { name, description, important, status, due_date } = note;

  return (
    isString(name) &&
    isString(description) &&
    isBoolean(important) &&
    isString(status) &&
    isString(due_date)
  );
}

function isString(value) {
  return typeof value === "string";
}

function isBoolean(value) {
  return typeof value === "boolean";
}

export default validateType;

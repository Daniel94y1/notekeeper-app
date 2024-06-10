// validateEnum.test.js

import { expect, test } from "vitest";
import validateEnum from "../validateEnum.js"; // Asegúrate de que la ruta sea correcta

test("Validating note status enum", () => {
  // Nota válida con un estado que está en la lista de estados válidos
  const validNote = {
    name: "Valid Note",
    description: "This is a valid note",
    important: true,
    status: "pending",
    dueDate: "2024-05-15",
  };

  // Nota inválida con un estado que no está en la lista de estados válidos
  const invalidNote = {
    name: "Invalid Note",
    description: "This is an invalid note",
    important: true,
    status: "invalidStatus",
    dueDate: "2024-05-15",
  };

  // Verificamos que la validación de una nota válida es true
  expect(validateEnum(validNote.status)).toBe(true);

  // Verificamos que la validación de una nota inválida es false
  expect(validateEnum(invalidNote.status)).toBe(false);
});


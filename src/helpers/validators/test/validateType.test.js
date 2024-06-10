import { describe, it, expect } from "vitest";
import validateType from "../validateType.js";

describe("Validation for types in a note object", () => {
  it("should validate a note object with correct types", () => {
    const validNote = {
      name: "Valid Note",
      description: "This is a valid note",
      important: true,
      status: "pending",
      dueDate: "2024-05-15",
    };

    expect(validateType(validNote)).toBe(true);
  });

  it("should invalidate a note object with incorrect types", () => {
    const invalidNote = {
      name: "Invalid Note",
      description: "This is an invalid note",
      important: "true", // incorrecto: debería ser booleano
      status: "pending",
      dueDate: "2024-05-15",
    };

    expect(validateType(invalidNote)).toBe(false);
  });
});

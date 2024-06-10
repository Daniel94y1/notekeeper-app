import { describe, it, expect } from "vitest";
import validateNonEmpty from "../validateNonEmpty.js";

describe("Validation for non-empty fields in a note", () => {
  it("should validate a note with all non-empty fields", () => {
    const noteWithAllFields = {
      title: "Sample Note",
      content: "This is a sample note with all fields non-empty",
      important: true,
      status: "pending",
      dueDate: "2024-05-15",
    };

    expect(validateNonEmpty(noteWithAllFields)).toBe(true);
  });

  it("should invalidate a note with some empty fields", () => {
    const noteWithEmptyField = {
      title: "",
      content: "This is a sample note with an empty title",
      important: true,
      status: "pending",
      dueDate: "2024-05-15",
    };

    expect(validateNonEmpty(noteWithEmptyField)).toBe(false);
  });
});

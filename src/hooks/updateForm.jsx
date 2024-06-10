// src/hooks/useUpdateForm.js
import { useState } from "react";

export const useUpdateForm = (initialValues) => {
  const [formData, setFormData] = useState({
    name: initialValues.name,
    description: initialValues.description,
    important: initialValues.important,
    status: initialValues.status,
    due_date: initialValues.due_date,
  });

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return {
    formData,
    handleFormChange,
  };
};


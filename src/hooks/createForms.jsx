// src/hooks/useCreateForm.js
import { useState } from "react";

export const useCreateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    important: false,
    status: "",
    due_date: "",
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


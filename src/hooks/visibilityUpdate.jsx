// src/hooks/useVisibilityUpdateForm.js
import { useState } from "react";

export const useVisibilityUpdateForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return {
    isVisible,
    toggleVisibility,
  };
};


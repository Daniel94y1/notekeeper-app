// validateEnum.js

// Definimos el conjunto válido de estados para las notas
const validStatuses = ["pending", "in progress", "done"];

// Función de validación que asegura que el estado es uno de los válidos
function validateEnum(status) {
  return validStatuses.includes(status);
}

export default validateEnum;

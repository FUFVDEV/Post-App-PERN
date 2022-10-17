import { Type } from "@sinclair/typebox";

export const idDTOSchema = Type.Integer({
  errorMessage: {
    type: "El tipo de id no es válido. Debe ser un entero",
    format: "El formato de id no es válido, debe ser un id",
  },
});

export const nameDTOSchema = Type.String({
  minLength: 2,
  maxLength: 50,
  errorMessage: {
    required: "Nombre es un campo requerido",
    minLength: "Nombre debe tener al menos 2 caracteres de longitud",
    maxLength: "Nombre debe tener como máximo 50 caracteres de longitud",
  },
});

export const descriptionDTOSchema = Type.String({
  minLength: 2,
  maxLength: 200,
  errorMessage: {
    required: "Descripción es un campo requerido",
    minLength: "Descripción debe tener al menos 2 caracteres de longitud",
    maxLength: "Descripción debe tener como máximo 200 caracteres de longitud",
  },
});

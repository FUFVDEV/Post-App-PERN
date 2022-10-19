import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors";

import { dtoMiddleware } from "#middlewares/dto.middleware.js";
import { descriptionDTOSchema, nameDTOSchema } from "#dto/dto-types.js";

const PostUpdateDTOSchema = Type.Object(
  {
    name: nameDTOSchema,
    description: descriptionDTOSchema,
  },
  {
    additionalProperties: false,
    errorMessage: {
      required: "Id, Nombre y descripción son requeridos",
      additionalProperties: "El formato del objeto no es válido",
    },
  }
);

const ajv = new Ajv({ allErrors: true }).addKeyword("kind").addKeyword("modifier");
addErrors(ajv);

const validateSchema = ajv.compile(PostUpdateDTOSchema);
const postUpdateDataDTO = dtoMiddleware(validateSchema);

export default postUpdateDataDTO;

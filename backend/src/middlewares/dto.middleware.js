export const dtoMiddleware = schemaValidator => {
  return (req, res, next) => {
    const isDTOValid = schemaValidator(req.body);

    if (!isDTOValid)
      return res.status(400).send({
        errors: schemaValidator.errors.map(error => error.message),
      });

    next();
  };
};

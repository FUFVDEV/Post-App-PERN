const handleErrors = (error, request, response, next) => {
  response.status(error.status || 500).json({
    status: error.status,
    name: error.name,
    message: error.errorMessage || "Ocurrió un error inesperado.",
    error: error.message,
  });
  next(error);
};

export default handleErrors;

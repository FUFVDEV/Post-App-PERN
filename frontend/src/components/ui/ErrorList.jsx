const ErrorList = ({ errors }) => {
  return (
    <ul>
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  );
};

export default ErrorList;

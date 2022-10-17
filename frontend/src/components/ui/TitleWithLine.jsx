const lineStyles = {
  width: "60px",
  height: "5px",
  margin: "0 0 0 10px",
  backgroundColor: "#0176de",
};

const TitleWithLine = ({ text }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
      <h2 style={{ margin: 0, textTransform: "uppercase", letterSpacing: ".4rem" }}>{text}</h2>
      <div style={lineStyles} />
    </div>
  );
};

export default TitleWithLine;

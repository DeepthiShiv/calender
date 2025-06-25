import React from "react";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ color: "#AC1754", textAlign: "center" }}>Calendar 🌸</h1>
      <Calendar />
    </div>
  );
};

export default App;

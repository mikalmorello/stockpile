// Dependencies
import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function App() {
  const msg = useContext(UserContext);
  return (
    <div>
      <h1>App</h1>
      {msg}
    </div>
  );
}

export default App;

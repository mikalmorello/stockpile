import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function Home() {
  // UserContext example
  const { context, setContext } = useContext(UserContext);
  setContext("homepage");

  return (
    <main>
      <h1>Home</h1>
      <div>{context}</div>
    </main>
  );
}

export default Home;

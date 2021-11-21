// Dependencies
import React from "react";
import { useParams } from "react-router-dom";

function Stockpile({ match }) {
  let params = useParams();

  return (
    <main>
      <h1>Stockpile Id is {params.stockpileId}</h1>
    </main>
  );
}

export default Stockpile;

// Dependencies
import React from "react";
import { useParams } from "react-router-dom";
import stockPileApi from "../../hooks/stockpileApi";

function Stockpile({ match }) {
  let params = useParams(),
    stockpileId = params.stockpileId;

  return (
    <main>
      <h1>Stockpile Id is {stockpileId}</h1>
      <button onClick={() => stockPileApi.getStockpile(stockpileId)}>get stockpile</button>
    </main>
  );
}

export default Stockpile;

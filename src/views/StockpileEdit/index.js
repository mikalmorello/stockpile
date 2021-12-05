import React from "react";
import { useParams } from "react-router-dom";
import stockpileApi from "../../hooks/stockpileApi";
import { useNavigate } from "react-router-dom";

function StockpileEdit() {
  // Get URL params
  let params = useParams(),
    stockpileId = params.stockpile;

  // Define redirect function
  const navigate = useNavigate();

  const deleteStockpile = function () {
    console.log("delete stockpile");
    stockpileApi
      .deleteStockpile(stockpileId)
      .then(() => {
        console.log("redirect running");
        // Redirect to the stockpiles page
        navigate("/stockpiles");
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  return (
    <main>
      <h1>Edit stockpile</h1>
      <button onClick={deleteStockpile}>Delete Stockpile</button>
    </main>
  );
}

export default StockpileEdit;

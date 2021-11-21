// Dependencies
import React from "react";
import { useParams } from "react-router-dom";
import stockpileApi from "../../hooks/stockpileApi";

function Stockpile() {
  let params = useParams(),
    stockpileId = params.stockpileId;

  // Set state
  const [stockpile, setStockpile] = React.useState();

  // Get stockpile
  React.useEffect(() => {
    stockpileApi.getStockpile(stockpileId, setStockpile);
  }, [stockpileId]);

  // If stockpile data is loaded display view
  if (stockpile) {
    return (
      <main id={stockpile.id}>
        <h1>{stockpile.title}</h1>
        <ul>
          <li>{stockpile.creator}</li>
        </ul>
      </main>
    );
  }

  // Else display loading screen
  return (
    <main>
      <h1>Waiting</h1>
    </main>
  );
}

export default Stockpile;
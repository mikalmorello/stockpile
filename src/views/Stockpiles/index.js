import React from "react";
import { Outlet, Link } from "react-router-dom";
import StockpileApi from "../../hooks/stockpileApi";

function Stockpiles() {
  // State
  const [stockpiles, setStockpiles] = React.useState();

  // Get all stockpiles
  React.useEffect(() => {
    StockpileApi.getStockpiles(setStockpiles);
  }, []);

  // If the stockpiles data is available
  if (stockpiles) {
    return (
      <main>
        <h1>Stockpiles</h1>
        <ul>
          {stockpiles.map((stockpile, index) => (
            <li key={stockpile.id}>
              <Link to={`/stockpiles/${stockpile.id}`}>{stockpile.title}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </main>
    );
  }

  // Else return waiting view
  return (
    <main>
      <h1>Waiting</h1>
    </main>
  );
}

export default Stockpiles;

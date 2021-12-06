import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import StockpileApi from "../../hooks/stockpileApi";
import AuthContext from "../../context/AuthContext";

function Stockpiles() {
  // State
  const [stockpiles, setStockpiles] = React.useState(),
    { authTokens } = React.useContext(AuthContext);

  // Get location to refresh page (hack)
  const location = useLocation();

  // Get all stockpiles
  React.useEffect(() => {
    StockpileApi.getStockpiles(setStockpiles);
  }, [location.key]);

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

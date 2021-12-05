// Dependencies
import React from "react";
import { useParams } from "react-router-dom";
import stockpileApi from "../../hooks/stockpileApi";
import { Outlet, Link } from "react-router-dom";

function Stockpile() {
  // Get URL params
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
        <Link to={`/stockpiles/${stockpileId}/edit`}>Edit</Link>
        <p>{stockpile.creator.username}</p>
        {stockpile.stocks.map((stock) => (
          <ul key={stock.id}>
            <li>{stock.symbol}</li>
            <li>${stock.daily[0].price}</li>
            <li>{stock.day_change.percent}%</li>
            <li>${stock.day_change.price}</li>
            <li>{stock.week_change.percent}%</li>
            <li>${stock.week_change.price}</li>
            <li>{stock.last_refreshed}</li>
          </ul>
        ))}
        <Outlet />
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

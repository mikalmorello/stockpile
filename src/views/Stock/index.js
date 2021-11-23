// Dependencies
import React from "react";
import { useParams } from "react-router-dom";
import stockApi from "../../hooks/stockApi";

// Stock
function Stock() {
  // Get URL params
  let params = useParams(),
    stockSymbol = params.stockSymbol;

  // Set State
  const [stock, setStock] = React.useState();

  React.useEffect(() => {
    stockApi.getStock(stockSymbol, setStock);
  }, [stockSymbol]);

  // If stock data is loaded display view
  if (stock) {
    console.log(stock.daily);
    return (
      <main id={stock.symbol}>
        <h1>Stock {stock.symbol}</h1>
        <ul>
          {stock.daily.map((day, index) => (
            <li key={index}>
              {day.date}: {day.price}
            </li>
          ))}
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

export default Stock;

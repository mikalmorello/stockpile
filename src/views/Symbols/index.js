// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import symbolApi from "../../hooks/symbolApi";

function Symbols() {
  const [symbols, setSymbols] = React.useState();

  // Get stock symbols
  React.useEffect(() => {
    symbolApi.getSymbols(setSymbols);
  }, []);

  if (symbols) {
    return (
      <main>
        <h1>Symbols</h1>
        <ul>
          {symbols.map((symbol, index) => (
            <li key={symbol.id}>
              <Link to={`/stocks/${symbol.symbol}`}>
                {symbol.symbol}: {symbol.name}
              </Link>
            </li>
          ))}
        </ul>
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

export default Symbols;

// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import symbolApi from "../../hooks/symbolApi";

// Styles
import styles from "./Symbols.module.scss";

function Symbols() {
  const [symbols, setSymbols] = React.useState();

  // Get stock symbols
  React.useEffect(() => {
    symbolApi.getSymbols(setSymbols);
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="Welcome">
        <div className={styles.header_container}>
          <h1 className={styles.header}>Stock Options</h1>
        </div>
        <div>
          <p className={styles.intro_text}>A list of all available stock symbols</p>
        </div>
      </section>
      <section className={styles.stockpiles} aria-label="stockpiles">
        <ul className={styles.symbols}>
          {symbols ? (
            symbols.map((symbol, index) => (
              <li key={symbol.id}>
                <Link className={styles.symbol} to={`/symbols/${symbol.symbol}`}>
                  {symbol.symbol}
                </Link>
                :<span className={styles.stock_name}>{symbol.name}</span>
              </li>
            ))
          ) : (
            <li>Symbols loading</li>
          )}
        </ul>
      </section>
    </main>
  );
}

export default Symbols;

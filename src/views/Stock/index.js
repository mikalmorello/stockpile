// Dependencies
import React from "react";
import { useParams } from "react-router-dom";
import stockApi from "../../hooks/stockApi";

// Styles
import styles from "./Stock.module.scss";

// Stock
function Stock() {
  // Get URL params
  let params = useParams(),
    stockSymbol = params.stockSymbol;

  // Set State
  const [stock, setStock] = React.useState();

  // Get stock
  React.useEffect(() => {
    stockApi.getStock(stockSymbol, setStock);
  }, [stockSymbol]);

  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="stock">
        <div className={styles.header_container}>
          <h1 className={styles.header}>Stock</h1>
        </div>
        <div>
          <div className={styles.intro_text}>{stock ? stock.symbol : ""}</div>
        </div>
      </section>
      <section className={styles.stock} aria-label="stock data">
        <div className={styles.subheader_container}>
          <h2 className={styles.subheader}>Last 5 Days</h2>
        </div>
        <ul className={styles.daily}>
          {stock ? (
            stock.daily.map((day, index) => (
              <li className={styles.day} key={index}>
                <div className={styles.date}>{day.date}</div>
                <div className={styles.price}>{day.price}</div>
              </li>
            ))
          ) : (
            <li>No stock data</li>
          )}
        </ul>
      </section>
    </main>
  );
}

export default Stock;

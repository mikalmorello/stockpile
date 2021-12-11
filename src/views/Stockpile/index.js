// Dependencies
import React from "react";
import { useParams } from "react-router-dom";
import stockpileApi from "../../hooks/stockpileApi";
import { Link } from "react-router-dom";

// SVG
import Svg from "../../svg/Svg.js";

// Styles
import styles from "./Stockpile.module.scss";

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

  // Format date
  function formatDate(newDate) {
    let date = new Date(newDate);
    let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    console.log(dateMDY);
    return dateMDY;
  }

  // If stockpile data is loaded display view
  if (stockpile) {
    return (
      <main className={styles.main} id={stockpile.id}>
        <section className={styles.intro} aria-label="Intro">
          <div className={styles.header_container}>
            <h1 className={styles.header}>Stockpile</h1>
          </div>
          <div className={styles.details}>
            <div className={styles.name}>
              <div className={styles.intro_text}>
                {stockpile.title}
                <span className={styles.owner}>
                  (by <Link to={`/users/${stockpile.creator.id}`}>{stockpile.creator.username}</Link>)
                </span>
              </div>
            </div>
            <div className={styles.edit}>
              <Link to={`/stockpiles/${stockpileId}/edit`}>
                Edit <Svg.Edit />
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.stockpile} aria-label="stockpile">
          <div className={styles.subheader_container}>
            <h2 className={styles.subheader}>Stocks</h2>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Current Price</th>
                <th>Day Change %</th>
                <th>Day Change Price</th>
                <th>Week Change %</th>
                <th>Week Change Price</th>
                <th>Last Refreshed</th>
              </tr>
            </thead>
            <tbody>
              {stockpile
                ? stockpile.stocks.map((stock) => (
                    <tr key={stock.id}>
                      <td className={styles.symbol}>{stock.symbol}</td>
                      <td>${stock.daily[0].price}</td>
                      <td>{stock.day_change.percent}%</td>
                      <td>${stock.day_change.price}</td>
                      <td>{stock.week_change.percent}%</td>
                      <td>${stock.week_change.price}</td>
                      <td>{formatDate(stock.last_refreshed)}</td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </section>
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

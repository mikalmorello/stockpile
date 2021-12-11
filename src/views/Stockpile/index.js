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
            <ul>
              {stockpile
                ? stockpile.stocks.map((stock) => (
                    <li key={stock.id}>
                      <li>{stock.symbol}</li>
                      {/* <li>${stock.daily[0].price}</li>
                    <li>{stock.day_change.percent}%</li>
                    <li>${stock.day_change.price}</li>
                    <li>{stock.week_change.percent}%</li>
                    <li>${stock.week_change.price}</li>
                    <li>{stock.last_refreshed}</li> */}
                    </li>
                  ))
                : ""}
            </ul>
          </div>
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

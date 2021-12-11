import React from "react";
import { Link, useLocation } from "react-router-dom";
import StockpileApi from "../../hooks/stockpileApi";
import AuthContext from "../../context/AuthContext";

// SVG
import Svg from "../../svg/Svg.js";

// Styles
import styles from "./Stockpiles.module.scss";

function Stockpiles() {
  // State
  const [stockpiles, setStockpiles] = React.useState(),
    { authTokens } = React.useContext(AuthContext);

  console.log("get auth");
  console.log(authTokens);

  // Get location to refresh page (hack)
  const location = useLocation();

  // Get all stockpiles
  React.useEffect(() => {
    StockpileApi.getStockpiles(setStockpiles, authTokens);
  }, [location.key, authTokens]);

  // If the stockpiles data is available

  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="Welcome">
        <div className={styles.header_container}>
          <h1 className={styles.header}>Stockpiles</h1>
        </div>
        <div>
          <p className={styles.intro_text}>All user stockpiles:</p>
        </div>
      </section>
      <section className={styles.stockpiles} aria-label="stockpiles">
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Creator</th>
              <th>Daily %</th>
              <th>Weekly %</th>
            </tr>
          </thead>
          <tbody>
            {stockpiles && stockpiles.length ? (
              stockpiles.map((stockpile, index) => (
                <tr key={stockpile.id}>
                  <td>
                    <Svg.Stack /> <Link to={`/stockpiles/${stockpile.id}`}>{stockpile.title}</Link>
                  </td>
                  <td>
                    <Link to={`/users/${stockpile.creator.id}`}>{stockpile.creator.username}</Link>
                  </td>
                  <td>xx</td>
                  <td>xx</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Stockpiles</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Stockpiles;

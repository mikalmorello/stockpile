// Dependencies
import React from "react";
import { Link, useLocation } from "react-router-dom";
import StockpileApi from "../../hooks/stockpileApi";
import AuthContext from "../../context/AuthContext";

// SVG
import Svg from "../../svg/Svg.js";

// Styles
import styles from "./Home.module.scss";

function Home() {
  // State
  const [stockpiles, setStockpiles] = React.useState(),
    { authTokens, user } = React.useContext(AuthContext);

  // Get location to refresh page (hack)
  const location = useLocation();

  // Get all stockpiles
  React.useEffect(() => {
    StockpileApi.getStockpiles(setStockpiles, authTokens);
  }, [location.key, authTokens]);

  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="Welcome">
        <div className={styles.header_container}>
          <h1 className={styles.header}>Start</h1>
        </div>
        <div>
          <p className={styles.intro_text}>
            Welcome,
            <Link className={styles.user} to={`/users/${user.id}`}>
              {user.username}
            </Link>
            .
          </p>
          <p className={styles.intro_body}>Let’s build a new stockpile</p>
          <Link className={styles.link} to="/stockpiles/add">
            Add Stockpile
          </Link>
        </div>
      </section>
      <section className={styles.stockpiles} aria-label="stockpiles">
        <div className={styles.subheader_container}>
          <h2 className={styles.subheader}>Your Stockpiles</h2>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Daily %</th>
              <th>Weekly %</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {stockpiles ? (
              stockpiles.map((stockpile, index) => (
                <tr key={stockpile.id}>
                  <td>
                    <Svg.Stack /> <Link to={`/stockpiles/${stockpile.id}`}>{stockpile.title}</Link>
                  </td>
                  <td>xx</td>
                  <td>xx</td>
                  <td>
                    <Link to={`/stockpiles/${stockpile.id}/edit`}>
                      Edit <span className={styles.visually_hidden}>{stockpile.title}</span>
                    </Link>
                  </td>
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

export default Home;

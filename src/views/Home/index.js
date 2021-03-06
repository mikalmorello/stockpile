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
  // Set State
  const [stockpiles, setStockpiles] = React.useState(),
    { authTokens, user } = React.useContext(AuthContext);

  // Get location to refresh page (hack)
  const location = useLocation();

  // Get all stockpiles
  React.useEffect(() => {
    StockpileApi.getUserStockpiles(setStockpiles, authTokens);
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
            <Link className={styles.user} to={`/profile`}>
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
        <div className={styles.table_container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Day %</th>
                <th>Weekly %</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {stockpiles && stockpiles.length ? (
                stockpiles.map((stockpile, index) => (
                  <tr key={stockpile.id}>
                    <td>
                      <Svg.Stack /> <Link to={`/stockpiles/${stockpile.id}`}>{stockpile.title}</Link>
                    </td>
                    <td>{stockpile.day_change}</td>
                    <td>{stockpile.week_change}</td>
                    <td>
                      <Link to={`/stockpiles/${stockpile.id}/edit`}>
                        Edit <span className={styles.visually_hidden}>{stockpile.title}</span>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No stockpiles created yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Home;

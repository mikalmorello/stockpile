import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import stockpileApi from "../../hooks/stockpileApi";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

// Styles
import styles from "./StockpileEdit.module.scss";

function StockpileEdit() {
  // Get URL params
  let params = useParams(),
    stockpileId = params.stockpile;

  // Get active user
  let { user } = useContext(AuthContext);

  // Set state
  const [stockpile, setStockpile] = React.useState(),
    [userOwned, setUserOwned] = React.useState(false);

  // Get stockpile
  React.useEffect(() => {
    stockpileApi.getStockpile(stockpileId, setStockpile);
  }, [stockpileId]);

  // Define redirect function
  const navigate = useNavigate();

  const deleteStockpile = function () {
    console.log("delete stockpile");
    stockpileApi
      .deleteStockpile(stockpileId)
      .then(() => {
        console.log("redirect running");
        // Redirect to the stockpiles page
        navigate("/stockpiles");
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  // Check if the stockpile is user owned
  React.useEffect(() => {
    if (user && stockpile && user.username === stockpile.creator.username) {
      // console.log("user");
      // console.log(user.username);
      // console.log("creator");
      // console.log(stockpile.creator.username);
      console.log("users are the same");
      setUserOwned(true);
    }
  }, [user, stockpile]);

  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="Welcome">
        <div className={styles.header_container}>
          <h1 className={styles.header}>Edit</h1>
        </div>
        <div>
          <p className={styles.intro_text}>Modify the {stockpile ? <Link to={`/stockpiles/${stockpile.id}`}>{stockpile.title}</Link> : "Loading..."} stockpile</p>
          <p>Stockpile created by {stockpile ? <Link to={`/users/${stockpile.creator.id}`}>{stockpile.creator.username}</Link> : "Loading..."}</p>
        </div>
      </section>
      {userOwned ? (
        <section className={styles.form} aria-label="form">
          <span>Permanently remove the stockpile:</span>
          <div className={styles.button_group}>
            <button className={styles.button} onClick={deleteStockpile}>
              Delete Stockpile
            </button>
          </div>
        </section>
      ) : (
        <section className={styles.form} aria-label="form">
          <p>You do not own this stockpile, so no edits are available</p>
        </section>
      )}
    </main>
  );
}

export default StockpileEdit;

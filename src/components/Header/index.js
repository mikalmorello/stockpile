import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import styles from "./Header.module.scss";

function Header() {
  let { user, logoutUser } = useContext(AuthContext);

  if (user) {
    return (
      <header className={styles.header}>
        <div className={styles.branding}>
          <img className={styles.branding__image} src="/media/branding.svg" alt="" />
          Stockpile
        </div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.nav_link}>
            Home
          </Link>
          <Link to="/" className={styles.nav_link}>
            Stockpiles
          </Link>
          <Link to="/" className={styles.nav_link}>
            Symbols
          </Link>
          <button onClick={logoutUser} className={styles.nav_link}>
            Logout
          </button>
        </nav>
        {/* {user && <p>Hello {user.username}</p>} */}
      </header>
    );
  } else {
    return (
      <header className={styles.header}>
        <h1 className={styles.branding}>
          <img className={styles.branding__image} src="/media/branding.svg" alt="" />
          Stockpile
        </h1>
      </header>
    );
  }
}

export default Header;

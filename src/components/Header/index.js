import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import styles from "./Header.module.scss";

function Header() {
  let { user, logoutUser } = useContext(AuthContext);

  if (user) {
    return (
      <header className={styles.header}>
        <div className={styles.branding}>Stockpile</div>
        <nav>
          <Link to="/">Home</Link>
          {user ? <button onClick={logoutUser}>Logout</button> : <Link to="/login">Login</Link>}
        </nav>
        {user && <p>Hello {user.username}</p>}
      </header>
    );
  } else {
    return (
      <header className={styles.header}>
        <h1 className={styles.branding}>Stockpile</h1>
      </header>
    );
  }
}

export default Header;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import styles from "./Login.module.scss";

const Login = () => {
  let { user, loginUser, logoutUser } = useContext(AuthContext);
  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="Intro">
        <div className={styles.header_container}>
          <h2 className={styles.header}>Start</h2>
        </div>
        <div>
          <p className={styles.intro_text}>A social stock sharing and analysis platform</p>
          <Link className={styles.link} to="/register">
            Register
          </Link>
        </div>
      </section>
      <section className={styles.login} aria-label="login form">
        <div className={styles.subheader_container}>
          <h2 className={styles.subheader}>Login</h2>
        </div>
        {!user ? (
          <form className={styles.form} onSubmit={loginUser}>
            <div className={styles.input_group}>
              <label className={styles.label} htmlFor="username">
                Username
              </label>
              <input className={styles.input} type="text" id="username" name="username" required />
            </div>
            <div className={styles.input_group}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input className={styles.input} type="password" id="password" name="password" required />
            </div>
            <div className={styles.button_group}>
              <button className={styles.button} type="submit">
                Login
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.logout}>
            <span>
              You are logged in already. View the <Link to={"/"}>homepage</Link> or:
            </span>
            <div className={styles.logout_button}>
              <button onClick={logoutUser} className={styles.button}>
                Logout
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Login;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import userApi from "../../hooks/userApi";

function Register() {
  // State
  const [username, setUsername] = React.useState(""),
    [email, setEmail] = React.useState(""),
    [password, setPassword] = React.useState(""),
    [confirmation, setConfirmation] = React.useState(""),
    navigate = useNavigate();

  // Handle submission
  const handleRegistration = function (e) {
    e.preventDefault();
    userApi.registerUser({
      username,
      email,
      password,
      confirmation,
    });
    navigate("/login");
  };

  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="Intro">
        <div className={styles.header_container}>
          <h2 className={styles.header}>Register</h2>
        </div>
        <div>
          <p className={styles.intro_text}>Create a user account</p>
          Already have an account?
          <Link className={styles.link} to="/login">
            Login
          </Link>
        </div>
      </section>
      <section className={styles.login} aria-label="register form">
        <div className={styles.subheader_container}>
          <h2 className={styles.subheader}>Register</h2>
        </div>
        <form onSubmit={handleRegistration}>
          <div className={styles.input_group}>
            <label className={styles.label}>Username</label>
            <input className={styles.input} type="username" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="on" required />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="on" required />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>Password</label>
            <input className={styles.input} type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="on" required />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>Confirm Password</label>
            <input className={styles.input} type="password" id="confirmation" name="confirmation" value={confirmation} onChange={(e) => setConfirmation(e.target.value)} autoComplete="on" required />
          </div>
          <div className={styles.button_group}>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Register;

import { Link } from "react-router-dom";
import styles from "./Register.module.scss";

const Register = () => {
  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="Intro">
        <div className={styles.header_container}>
          <h2 className={styles.header}>Register</h2>
        </div>
        <div>
          <p className={styles.intro_text}>Create a user account</p>
          <Link className={styles.link} to="/login">
            Login
          </Link>
        </div>
      </section>
      <section className={styles.login} aria-label="register form">
        <div className={styles.subheader_container}>
          <h2 className={styles.subheader}>Register</h2>
        </div>
      </section>
    </main>
  );
};

export default Register;

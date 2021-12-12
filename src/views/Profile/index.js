// Dependencies
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

// Styles
import styles from "./Profile.module.scss";

function Profile() {
  // Set State
  let { user } = useContext(AuthContext);

  return (
    <main className={styles.main} id={user ? user.id : ""}>
      <section className={styles.intro} aria-label="Intro">
        <div className={styles.header_container}>
          <h1 className={styles.header}>Profile</h1>
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            <div className={styles.intro_text}>{user ? user.username : "Loading..."}</div>
          </div>
          <div className={styles.other_users}>
            <span>View all:</span>
            <Link className={styles.users_link} to={"/users"}>
              Users
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.user_details} aria-label="user details">
        <div className={styles.subheader_container}>
          <h2 className={styles.subheader}>Your Details</h2>
        </div>
        {user ? (
          <dl className={styles.dl}>
            <dt>Email:</dt>
            <dd>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </dd>
          </dl>
        ) : (
          "Loading..."
        )}
      </section>
    </main>
  );
}

export default Profile;

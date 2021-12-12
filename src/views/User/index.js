// Dependencies
import React from "react";
import { useParams } from "react-router-dom";
import userApi from "../../hooks/userApi";
import { Link } from "react-router-dom";

// Styles
import styles from "./User.module.scss";

function User() {
  // URL params
  let params = useParams(),
    userId = params.userId;

  // State
  const [user, setUser] = React.useState();

  // Get User data
  React.useEffect(() => {
    userApi.getUser(userId, setUser);
  }, [userId]);

  return (
    <main className={styles.main} id={user ? user.id : ""}>
      <section className={styles.intro} aria-label="Intro">
        <div className={styles.header_container}>
          <h1 className={styles.header}>Stockpile</h1>
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
          <h2 className={styles.subheader}>Details</h2>
        </div>
        {user ? (
          <dl className={styles.dl}>
            <dt>Email:</dt>
            <dd>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </dd>
          </dl>
        ) : (
          <div>No user details</div>
        )}
      </section>
    </main>
  );
}

export default User;

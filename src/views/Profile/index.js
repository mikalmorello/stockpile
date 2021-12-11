import React from "react";
import userApi from "../../hooks/userApi";

// Styles
import styles from "./Profile.module.scss";

function Profile() {
  // Set State
  const [activeUser, setActiveUser] = React.useState();

  // Get Active user
  React.useEffect(() => {
    // Get the active user
    userApi.getActiveUser(setActiveUser);
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="Intro">
        <div className={styles.header_container}>
          <h1 className={styles.header}>Stockpile</h1>
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            <div className={styles.intro_text}>{activeUser ? activeUser.username : "Loading..."}</div>
          </div>
        </div>
      </section>
      <section className={styles.user_details} aria-label="user details">
        <div className={styles.subheader_container}>
          <h2 className={styles.subheader}>Details</h2>
        </div>
        {/* <dl className={styles.dl}>
            <dt>Email:</dt>
            <dd>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </dd>
          </dl> */}
      </section>
    </main>
  );
}

export default Profile;

import React from "react";
import { Link } from "react-router-dom";
import userApi from "../../hooks/userApi";

// Styles
import styles from "./Users.module.scss";

function Users() {
  // State
  const [users, setUsers] = React.useState();

  // Get Users
  React.useEffect(() => {
    userApi.getUsers(setUsers);
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="Welcome">
        <div className={styles.header_container}>
          <h1 className={styles.header}>Users</h1>
        </div>
        <div>
          <p className={styles.intro_text}>All Stockpile users:</p>
        </div>
      </section>
      <section className={styles.users} aria-label="users">
        <ul className={styles.user_list}>
          {users ? (
            users.map((user) => (
              <li key={user.id} className={styles.user}>
                <Link className={styles.user_link} to={`/users/${user.id}`}>
                  {user.username}
                </Link>
              </li>
            ))
          ) : (
            <li> Loading users </li>
          )}
        </ul>
      </section>
    </main>
  );
}

export default Users;

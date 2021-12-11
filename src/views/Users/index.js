import React from "react";
import { Link } from "react-router-dom";
import userApi from "../../hooks/userApi";

function Users() {
  // State
  const [users, setUsers] = React.useState();

  // Get Users
  React.useEffect(() => {
    userApi.getUsers(setUsers);
  }, []);

  // If the users data is available

  return (
    <main>
      <h1>Users</h1>
      <ul>
        {users ? (
          users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.username}</Link>
            </li>
          ))
        ) : (
          <li> Loading users </li>
        )}
      </ul>
    </main>
  );
}

export default Users;

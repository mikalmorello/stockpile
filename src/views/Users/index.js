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
  if (users) {
    return (
      <main>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.username}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  // Else return waiting view
  return (
    <main>
      <h1>Waiting</h1>
    </main>
  );
}

export default Users;

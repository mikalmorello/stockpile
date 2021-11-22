import React from "react";
import { useParams } from "react-router-dom";
import userApi from "../../hooks/userApi";

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

  // If user data is available
  if (user) {
    return (
      <main id={user.id}>
        <h1>{user.username}</h1>
        <p>{user.email}</p>
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

export default User;

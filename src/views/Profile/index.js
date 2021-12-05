import React from "react";
import userApi from "../../hooks/userApi";

function Profile() {
  // Set State
  const [activeUser, setActiveUser] = React.useState();

  // Get Active user
  React.useEffect(() => {
    // Get the active user
    userApi.getActiveUser(setActiveUser);
  }, []);

  if (activeUser) {
    return (
      <main>
        <h1>User Profile</h1>
        <ul>
          <li>{activeUser.username}</li>
        </ul>
      </main>
    );
  }

  // Else display loading screen
  return (
    <main>
      <h1>Waiting</h1>
    </main>
  );
}

export default Profile;

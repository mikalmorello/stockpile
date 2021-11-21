import React from "react";
import { Outlet, Link } from "react-router-dom";

function Users() {
  return (
    <main>
      <h1>Users</h1>
      <Outlet />
    </main>
  );
}

export default Users;

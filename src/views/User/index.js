import React from "react";
import { useParams } from "react-router-dom";

function User() {
  let params = useParams(),
    userId = params.userId;

  return (
    <main>
      <h1>User id is {userId}</h1>
    </main>
  );
}

export default User;

import React, { useContext } from "react";
import userApi from "../../hooks/userApi";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;

import React from "react";
import userApi from "../../hooks/userApi";

function Login() {
  // State
  const [username, setUsername] = React.useState(""),
    [password, setPassword] = React.useState("");

  // Handle submission
  const handleLogin = function (e) {
    e.preventDefault();
    console.log("login");
    userApi.getToken({
      username,
      password,
    });
  };

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;

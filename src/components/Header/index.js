import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Header() {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        {user ? <button onClick={logoutUser}>Logout</button> : <Link to="/login">Login</Link>}
      </nav>
      {user && <p>Hello {user.username}</p>}
    </header>
  );
}

export default Header;

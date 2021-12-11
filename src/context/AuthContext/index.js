import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  // Define redirect function
  const navigate = useNavigate();

  // Check if tokens are in local storage

  let [authTokens, setAuthTokens] = useState(() => (localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null)),
    [user, setUser] = useState(() => (localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens")) : null)),
    [loading, setLoading] = useState(true);

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://127.0.0.1:8000/api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: e.target.username.value, password: e.target.password.value }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      // Decode user data from JWT token
      setUser(jwt_decode(data.access));
      // Set authorization token in local storage
      localStorage.setItem("authTokens", JSON.stringify(data));
      // Redirect user to the homepage
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };

  // REFRESH TOKEN
  let updateToken = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });
    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      // Decode user data from JWT token
      setUser(jwt_decode(data.access));
      // Set authorization token in local storage
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  // LOGOUT
  let logoutUser = () => {
    // Set user and auth to null
    setAuthTokens(null);
    setUser(null);
    // Clear local storage auth tokens
    localStorage.removeItem("authTokens");
    // Redirect to the login page
    navigate("/login");
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  // Call refresh tokens on regular interval
  useEffect(() => {
    if (loading) {
      updateToken();
    }
    let refreshInterval = 1000 * 60 * 25;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, refreshInterval);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};

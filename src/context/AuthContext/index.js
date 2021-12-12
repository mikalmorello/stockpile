// Dependencies
import React from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

// Create auth context
const AuthContext = React.createContext();

// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

// Setup auth provider
export const AuthProvider = ({ children }) => {
  // Set local state
  const [authTokens, setAuthTokens] = React.useState(() => (localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null)),
    [user, setUser] = React.useState(() => (localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens")) : null)),
    [loading, setLoading] = React.useState(true),
    navigate = useNavigate();

  // Login User
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

  // Refresh token
  let updateToken = async () => {
    // API token endpoint
    let ApiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/token/refresh/`;

    // Get API token
    fetch(ApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Set auth token
        setAuthTokens(data);
        // Decode user data from JWT token
        setUser(jwt_decode(data.access));
        // Set authorization token in local storage
        localStorage.setItem("authTokens", JSON.stringify(data));
      })
      .catch((error) => {
        console.log(error);
        logoutUser();
      });

    // Set loading status to false
    if (loading) {
      setLoading(false);
    }
  };

  // Logout
  let logoutUser = () => {
    // Remove auth token
    setAuthTokens(null);
    // Remove user
    setUser(null);
    // Clear local storage auth tokens
    localStorage.removeItem("authTokens");
    // Redirect to the login page
    navigate("/login");
  };

  // Set context data
  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  // Call refresh tokens on regular interval
  React.useEffect(() => {
    // If page is loading update token
    if (loading) {
      updateToken();
    }

    // Set refresh interval
    let refreshInterval = 1000 * 60 * 25;

    // Update tokens on regular interval
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, refreshInterval);

    // Clear interval
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  // Return auth provider
  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};

export default AuthContext;

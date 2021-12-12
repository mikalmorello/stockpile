// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

// User API functions
const userApi = {
  getUsers: function (setUsers, authTokens) {
    // API url
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/users`;

    // Get all users
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
      },
    })
      .then((response) => response.json())
      .then(function (data) {
        // Set the users data
        setUsers(data);
      })
      .catch((error) => {
        // Log out the error
        console.log(error);
      });
  },
  getUser: function (userId, setUser, authTokens) {
    // API url
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/users/${userId}`;

    // Get user
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
      },
    })
      .then((response) => response.json())
      .then(function (data) {
        // Set the user data
        setUser(data);
      })
      .catch((error) => {
        // Log out the error
        console.log(error);
      });
  },
  getToken: function (submission) {
    // API url
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/token`;

    // Create FormData object
    let formData = new FormData();

    // Add username and password to FormData
    formData.append("username", submission.username);
    formData.append("password", submission.password);

    // Get Auth Token
    fetch(apiUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .catch((error) => {
        // Log out the error
        console.log(error);
      });
  },
};

export default userApi;

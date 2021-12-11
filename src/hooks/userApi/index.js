// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

const userApi = {
  getUsers: function (setUsers) {
    // Get all users
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/users`;

    fetch(apiUrl)
      .then(function (promise) {
        return promise.json();
      })
      .then(function (data) {
        console.log(data);
        setUsers(data);
      });
  },
  getUser: function (userId, setUser) {
    // Get user
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/users/${userId}`;

    fetch(apiUrl)
      .then(function (promise) {
        return promise.json();
      })
      .then(function (data) {
        console.log(data);
        setUser(data);
      });
  },
  getToken: function (submission) {
    console.log("get token");
    console.log(submission);

    // Create FormData object
    let formData = new FormData();
    formData.append("username", submission.username);

    console.log(submission.username);
    formData.append("password", submission.password);

    // Get Auth Token
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/token`;

    fetch(apiUrl, {
      method: "POST",
      body: formData,
    })
      .then(function (promise) {
        return promise.json();
      })
      .then((data) => {
        // Log out the token
        console.log(data);
      });
  },
};

export default userApi;

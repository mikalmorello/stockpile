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
};

export default userApi;

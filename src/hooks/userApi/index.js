const userApi = {
  getUsers: function (setUsers) {
    // Get all users
    let apiUrl = `http://127.0.0.1:8000/api/users`;

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
    let apiUrl = `http://127.0.0.1:8000/api/users/${userId}`;

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

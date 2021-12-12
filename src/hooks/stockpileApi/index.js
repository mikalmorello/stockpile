// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

// Stockpile API functions
const stockpileAPI = {
  getStockpiles: function (setStockpiles, authTokens) {
    // API url
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/stockpiles`;

    // Get all the stockpiles
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
      },
    })
      .then((response) => response.json())
      .then(function (data) {
        // Set the stockpiles data
        setStockpiles(data);
      })
      .catch((error) => {
        // Log out the error
        console.log(error);
      });
  },
  getUserStockpiles: function (setStockpiles, authTokens) {
    // API url
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/stockpiles/user`;

    // Get all the users stockpiles
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
      },
    })
      .then((response) => response.json())
      .then(function (data) {
        // Set the stockpiles data
        setStockpiles(data);
      })
      .catch((error) => {
        // Log out the error
        console.log(error);
      });
  },
  getStockpile: function (stockpileId, setStockpile) {
    // API url
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/stockpiles/${stockpileId}`;

    // Get a stockpile
    fetch(apiUrl)
      .then((response) => response.json())
      .then(function (data) {
        // Set the stockpile data
        setStockpile(data);
      })
      .catch((error) => {
        // Log out the error
        console.log(error);
      });
  },
  deleteStockpile: function (stockpileId) {
    // API url
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/stockpiles/${stockpileId}`;

    // Delete a stockpile
    return fetch(apiUrl, {
      method: "DELETE",
    }).catch((error) => {
      // Log out the error
      console.log(error);
    });
  },
};

export default stockpileAPI;

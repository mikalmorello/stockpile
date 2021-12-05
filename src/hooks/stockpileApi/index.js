// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

const stockpileAPI = {
  getStockpiles: function (setStockpiles) {
    // Get all the stockpiles
    console.log("test stockpiles api");
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/stockpiles`;

    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setStockpiles(data);
      });
  },
  getStockpile: function (stockpileId, setStockpile) {
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/stockpiles/${stockpileId}`;

    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setStockpile(data);
      });
  },
  deleteStockpile: function (stockpileId) {
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/stockpiles/${stockpileId}`;

    return fetch(apiUrl, {
      method: "DELETE",
    })
      .then(() => {
        console.log(`${stockpileId} deleted`);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  },
};

export default stockpileAPI;

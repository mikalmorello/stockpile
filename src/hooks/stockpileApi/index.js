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
};

export default stockpileAPI;

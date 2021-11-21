const stockpileAPI = {
  getStockpiles: function (setStockpiles) {
    // Get all the stockpiles
    console.log("test stockpiles api");
    let apiUrl = "http://127.0.0.1:8000/api/stockpiles";

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
    let apiUrl = `http://127.0.0.1:8000/api/stockpiles/${stockpileId}`;

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

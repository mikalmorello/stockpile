const stockApi = {
  getStock: function (stockSymbol, setStock) {
    console.log("get stock symbol");

    // API url
    let apiUrl = `http://127.0.0.1:8000/api/stocks/${stockSymbol}`;

    // Fetch stock data
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStock(data);
      });
  },
};

export default stockApi;

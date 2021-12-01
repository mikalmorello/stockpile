// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

const stockApi = {
  getStock: function (stockSymbol, setStock) {
    console.log("get stock symbol");

    // API url
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/stocks/${stockSymbol}`;

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

// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

// Stock API functions
const stockApi = {
  getStock: function (stockSymbol, setStock) {
    // API url
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/stocks/${stockSymbol}`;

    // Get a stock
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Set the stock data
        setStock(data);
      })
      .catch((error) => {
        // Log out the error
        console.log(error);
      });
  },
};

export default stockApi;

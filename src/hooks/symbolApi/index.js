// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

// Stock symbol API
const symbolApi = {
  getSymbols: function (setSymbols) {
    console.log("Get symbols");
    // Stock symbols url
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/symbols`;
    // Get stock symbols
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Return symbols data
        setSymbols(data);
      });
  },
};

export default symbolApi;

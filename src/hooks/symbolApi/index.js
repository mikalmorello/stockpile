// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

// Stock symbol API functions
const symbolApi = {
  getSymbols: function (setSymbols) {
    // API url
    let apiUrl = `${REACT_APP_STOCKPILE_API_URL}/api/symbols`;

    // Get stock symbols
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Return symbols data
        setSymbols(data);
      })
      .catch((error) => {
        // Log out the error
        console.log(error);
      });
  },
};

export default symbolApi;

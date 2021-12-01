// Dependencies
import React from "react";
import Select from "react-select";

// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

// Select options
const options = [
  { value: "AAON", label: "AAON" },
  { value: "AAOI", label: "AAOI" },
  { value: "AGFY", label: "AGFY" },
  { value: "AAPL", label: "AAPL" },
];

function StockpileAdd() {
  // State
  const [title, setTitle] = React.useState(""),
    [selectedOptions, setSelectedOptions] = React.useState([]);

  // Handle select
  const onchangeSelect = (options) => {
    setSelectedOptions(options);
  };

  console.log("selected Options");
  console.log(selectedOptions);

  // Handle form submission
  const handleSubmit = (e) => {
    console.log("create stockpile");

    // Prevent default form submission
    e.preventDefault();

    // Connect to API
    return fetch(`${REACT_APP_STOCKPILE_API_URL}/api/stockpiles/create`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        stocks: selectedOptions,
      }),
    });
  };

  return (
    <main>
      <h1>Add stockpile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input id="title" name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <Select
          value={selectedOptions}
          onChange={onchangeSelect}
          options={options}
          isMulti
          //
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default StockpileAdd;

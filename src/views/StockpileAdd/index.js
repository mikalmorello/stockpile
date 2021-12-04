// Dependencies
import React from "react";
import WindowedSelect from "react-windowed-select";
import symbolApi from "../../hooks/symbolApi";
import { createFilter } from "react-windowed-select";

// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

function StockpileAdd() {
  // State
  const [title, setTitle] = React.useState(""),
    [selectedOptions, setSelectedOptions] = React.useState([]),
    [symbols, setSymbols] = React.useState([]),
    [options, setOptions] = React.useState([]);

  // Handle select
  const onchangeSelect = (options) => {
    setSelectedOptions(options);
  };

  // Get stock symbols
  React.useEffect(() => {
    symbolApi.getSymbols(setSymbols);
    console.log("is this running");
  }, []);

  // Create options from stock symbols
  React.useEffect(() => {
    if (symbols) {
      let symbolOptions = symbols.map((option) => {
        return {
          value: option.symbol,
          label: option.symbol,
        };
      });
      setOptions(symbolOptions);
    }
  }, [symbols]);

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

  // Limit options?
  let maxLimit = 100;
  const customFilter = createFilter({ ignoreAccents: false });
  return (
    <main>
      <h1>Add stockpile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input id="title" name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <WindowedSelect
          isOptionDisabled={(option) => selectedOptions.length >= maxLimit}
          value={selectedOptions}
          onChange={onchangeSelect}
          options={options}
          filterOption={customFilter}
          isMulti
          //
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default StockpileAdd;

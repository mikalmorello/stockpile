// Dependencies
import React from "react";
import Select from "react-select";

// Select options
const options = [
  { value: "AAON", label: "AAON" },
  { value: "AAOI", label: "AAOI" },
  { value: "AGFY", label: "AGFY" },
];

function StockpileAdd() {
  // State
  const [title, setTitle] = React.useState(""),
    [selectedOption, setSelectedOption] = React.useState();

  // Handle select
  const onchangeSelect = (item) => {
    setSelectedOption(item);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    console.log("create stockpile");

    // Prevent default form submission
    e.preventDefault();

    // Connect to API
    return fetch("http://127.0.0.1:8000/api/stockpiles/create", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        stocks: selectedOption.value,
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
          value={selectedOption}
          onChange={onchangeSelect}
          options={options}
          //
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default StockpileAdd;

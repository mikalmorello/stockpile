// Dependencies
import React from "react";

function StockpileAdd() {
  // State
  const [title, setTitle] = React.useState("");

  // Create stockpile
  function handleSubmit(e) {
    console.log("create stockpile");

    // Prevent default form submission
    e.preventDefault();

    // Connect to API
    return fetch("http://127.0.0.1:8000/api/stockpiles/create", {
      method: "POST",
      body: JSON.stringify({
        title: title,
      }),
    });
  }

  return (
    <main>
      <h1>Add stockpile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input id="title" name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default StockpileAdd;

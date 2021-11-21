// Dependencies
import React from "react";

function Stockpile() {
  console.log("test this");

  function getStockpile() {
    console.log("test api button");
    let apiUrl = "http://127.0.0.1:8000/api/stockpiles";
    // External API test
    // let apiUrl = "https://swapi.dev/api/people/1"

    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }

  return (
    <div>
      <header className="App-header">
        <h1>Stockpile</h1>
      </header>
      <main>
        <button onClick={() => getStockpile()}>test api</button>
      </main>
    </div>
  );
}

export default Stockpile;

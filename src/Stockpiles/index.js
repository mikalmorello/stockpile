import React from "react";
import { Outlet, Link } from "react-router-dom";

function Stockpiles() {
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
    <main>
      <h1>Stockpiles</h1>
      <button onClick={() => getStockpile()}>test api</button>
      <Outlet />
    </main>
  );
}

export default Stockpiles;

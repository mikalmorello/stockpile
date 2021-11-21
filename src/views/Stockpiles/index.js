import React from "react";
import { Outlet, Link } from "react-router-dom";
import StockpileApi from "../../hooks/stockpileApi";

function Stockpiles() {
  return (
    <main>
      <h1>Stockpiles</h1>
      <button onClick={() => StockpileApi.getStockpiles()}>test api</button>
      <Outlet />
    </main>
  );
}

export default Stockpiles;

// Dependency
import React from "react";
import { Outlet } from "react-router";

// Stock
function Stocks() {
  return (
    <main>
      <h1>Stocks</h1>
      <Outlet />
    </main>
  );
}

export default Stocks;

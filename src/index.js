import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./views/App";
import Stockpiles from "./views/Stockpiles";
import Stockpile from "./views/Stockpile";
import StockpileAdd from "./views/StockpileAdd";
import Users from "./views/Users";
import User from "./views/User";
import Stocks from "./views/Stocks";
import Stock from "./views/Stock";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/stockpiles" element={<Stockpiles />}>
        <Route path=":stockpileId" element={<Stockpile />} />
      </Route>
      <Route path="/stockpiles/add" element={<StockpileAdd />} />
      <Route
        path="*"
        element={
          <main>
            <h1>There's nothing here!</h1>
          </main>
        }
      />
      <Route path="/users" element={<Users />}>
        <Route path=":userId" element={<User />} />
      </Route>
      <Route path="/stocks" element={<Stocks />}>
        <Route path=":stockSymbol" element={<Stock />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

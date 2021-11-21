import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Stockpiles from "./Stockpiles";
import Stockpile from "./Stockpile";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/stockpiles" element={<Stockpiles />}>
        <Route path=":stockpileId" element={<Stockpile />} />
      </Route>
      <Route
        path="*"
        element={
          <main>
            <h1>There's nothing here!</h1>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);

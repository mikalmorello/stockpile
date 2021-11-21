import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./views/App";
import Stockpiles from "./views/Stockpiles";
import Stockpile from "./views/Stockpile";
import Users from "./views/Users";
import User from "./views/User";

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
      <Route path="/users" element={<Users />}>
        <Route path=":userId" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// Dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../views/Home";
import Profile from "../../views/Profile";
import Stockpiles from "../../views/Stockpiles";
import Stockpile from "../../views/Stockpile";
import StockpileAdd from "../../views/StockpileAdd";
import StockpileEdit from "../../views/StockpileEdit";
import Users from "../../views/Users";
import User from "../../views/User";
import Stocks from "../../views/Stocks";
import Stock from "../../views/Stock";
import Symbols from "../../views/Symbols";
import Login from "../../views/Login";
import Register from "../../views/Register";
import Header from "../../components/Header";
import PrivateRoute from "../../utils/PrivateRoute";
import { AuthProvider } from "../../context/AuthContext";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/stockpiles" element={<Stockpiles />}>
              <Route path=":stockpileId" element={<Stockpile />} />
              <Route path=":stockpile/edit" element={<StockpileEdit />} />
            </Route>
            <Route path="/stockpiles/add" element={<StockpileAdd />} />
            <Route path="/users" element={<Users />}>
              <Route path=":userId" element={<User />} />
            </Route>
            <Route path="/stocks" element={<Stocks />}>
              <Route path=":stockSymbol" element={<Stock />} />
            </Route>
          </Route>
          <Route path="/symbols" element={<Symbols />} />
          <Route
            path="*"
            element={
              <main>
                <h1>There's nothing here!</h1>
              </main>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

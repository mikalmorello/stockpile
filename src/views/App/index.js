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
import Stock from "../../views/Stock";
import Symbols from "../../views/Symbols";
import Login from "../../views/Login";
import Register from "../../views/Register";
import Missing from "../../views/Missing";
import Header from "../../components/Header";
import PrivateRoute from "../../utils/PrivateRoute";
import { AuthProvider } from "../../context/AuthContext";

// Styles
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
            <Route path="/stockpiles" element={<Stockpiles />}></Route>
            <Route path="/stockpiles/:stockpileId" element={<Stockpile />} />
            <Route path="/stockpiles/:stockpile/edit" element={<StockpileEdit />} />
            <Route path="/stockpiles/add" element={<StockpileAdd />} />
            <Route path="/users" element={<Users />}></Route>
            <Route path="/users/:userId" element={<User />} />
            <Route path="/symbols" element={<Symbols />} />
            <Route path="/symbols/:stockSymbol" element={<Stock />} />
          </Route>
          <Route path="*" element={<Missing />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="auth/register" element={<Register />}></Route>
          <Route exact path="auth/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

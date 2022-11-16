import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./user/Profile";
import { ProtectedLogin } from "./protected/ProtectedUser";
import { ProtectedProfile } from "./protected/ProtectedUser";
import { Toaster } from "react-hot-toast";
import Company from "./user/Company";

export default function App() {
  const [userData, setUserData] = useState();
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("token") || null)
  );

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(auth));
  }, [auth]);

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<ProtectedProfile auth={auth} />}>
            <Route
              exact
              path="/my-profile"
              element={
                <Profile
                  setAuth={setAuth}
                  userData={userData}
                  setUserData={setUserData}
                  auth={auth}
                />
              }
            />
            <Route
              exact
              path="/company"
              element={
                <Company
                />
              }
            />
          </Route>

          <Route element={<ProtectedLogin auth={auth} />}>
            <Route
              exact
              path="/auth/login"
              element={<Login setAuth={setAuth} userData={userData} />}
            />
            <Route
              exact
              path="/"
              element={<Login setAuth={setAuth} userData={userData} />}
            />
            <Route
              exact
              path="/auth/register"
              element={
                <Register userData={userData} setUserData={setUserData} />
              }
            />
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

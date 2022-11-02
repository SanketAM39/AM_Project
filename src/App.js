import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./Profile";
import ProtectedProfile from "./protected/ProtectedProfile";
import ProtectedLogin from "./protected/ProtectedLogin";

export default function App() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("users") || [])
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userData));
  }, [userData]);

  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("current-user")|| null)
  );

  useEffect(() => {
    localStorage.setItem("current-user", JSON.stringify(auth));
  }, [auth]);

  return (
    <div>
      <Router>
        <Routes>
          <Route element={ <ProtectedProfile auth={auth} /> }>
            <Route
              exact
              path="/my-profile"
              element={<Profile setAuth={setAuth} auth={auth} />}
            />
          </Route>
          
          <Route element={ <ProtectedLogin auth={auth} />} >
             
             <Route
              exact path="/auth/login"
              element={<Login setAuth={setAuth} userData={userData} />}
            />
             <Route
              exact path="/"
              element={<Login setAuth={setAuth} userData={userData} />}
            />
            <Route
              exact path="/auth/register"
              element={
                <Register userData={userData} setUserData={setUserData} />
              }
            />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

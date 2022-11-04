import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./Profile";
import ProtectedProfile from "./protected/ProtectedProfile";
import ProtectedLogin from "./protected/ProtectedLogin";
import API_Context from "./context/API_URL_context";
// import EditProfile from "./EditProfile";

export default function App() {

  const API_HOST_URL = "https://ngminds.herokuapp.com";

  const [userData, setUserData] = useState();

  // useEffect(() => {
  //   localStorage.setItem("current-user", JSON.stringify(userData));
  // }, [userData]);

  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("token") || null)
  );

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(auth));
  }, [auth]);

  
  return (
    <div>
      {/* <API_Context.provider value={API_HOST_URL}> */}
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
                    API_HOST_URL={API_HOST_URL}
                  />
                }
              />
              {/* <Route
              exact
              path="/update-profile"
              element={<EditProfile auth={auth} />}
            /> */}
            </Route>

            <Route element={<ProtectedLogin auth={auth} />}>
              <Route
                exact
                path="/auth/login"
                element={
                  <Login
                    setAuth={setAuth}
                    userData={userData}
                    API_HOST_URL={API_HOST_URL}
                  />
                }
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
                  <Register
                    userData={userData}
                    setUserData={setUserData}
                    API_HOST_URL={API_HOST_URL}
                  />
                }
              />
            </Route>
          </Routes>
        </Router>
      {/* </API_Context.provider> */}
    </div>
  );
}

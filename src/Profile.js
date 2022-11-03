import React from "react";
import { useNavigate } from "react-router-dom";
import ProfilePic from "./assets/Bean.jpeg";
import {GoVerified} from 'react-icons/go'

export default function Home({ auth, setAuth }) {
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/auth/Login");
    setAuth(null);
  };
  // const update = () => {
  //   navigate("/update-profile");
  // };

  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4 border border-primary">
              <h3 className="text-center">My Profile</h3>
              <div className="text-center">
                <img
                  src={ProfilePic}
                  alt="User"
                  width="150"
                  className="rounded-circle img-thumbnail img-fluid"
                />
              </div>
              <div className="text-center mt-3">
                <span className="bg-success p-1 px-4 rounded text-white">
                  Verified <GoVerified size="13" className="mb-1 " />
                </span>
                <h1 className="mt-2 mb-0">{auth.fullName}</h1>
                <h3 className="mt-0 mb-0" style={{ color: "red" }}>
                  {auth.companyName}
                </h3>
                <h5 className="mb-1 mt-1">Junior Software Engineer</h5>
                <span className="mt-0">{auth.email}</span>

                <div className="px-4 mt-1">
                  <p className="fonts"></p>
                </div>

                <div className="buttons">
                  <button
                    className="btn btn-primary px-4 ms-3"
                    onClick={() => logOut()}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


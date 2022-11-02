import React from "react";
import { useNavigate } from "react-router-dom";
import ProfilePic from "./Bean.jpeg";
import {GoVerified} from 'react-icons/go'

export default function Home({ auth, setAuth }) {
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/auth/Login");
    setAuth(null);
  };

  return (
    // <div>
    //   <h1 className="d-flex justify-content-center mt-3">My Profile</h1>
    //   <h3 className="d-flex justify-content-center mt-3">
    //     Name : {auth.fullName}
    //   </h3>
    //   <h3 className="d-flex justify-content-center mt-3">
    //     Email : {auth.email}
    //   </h3>
    //   <h3 className="d-flex justify-content-center mt-3">Role : {auth.role}</h3>
    //   <h3 className="d-flex justify-content-center mt-3">
    //     Email Verified : Yes
    //   </h3>
    //   <h3 className="d-flex justify-content-center mt-3">
    //     Company Name : {auth.companyName}
    //   </h3>
    //   <div className="d-flex justify-content-center mt-5">
    //     <button
    //       type="button"
    //       className="btn btn-primary "
    //       onClick={() => logOut()}
    //     >
    //       Logout
    //     </button>
    //   </div>
    // </div>

    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4 border border-primary">
              <h3 className="text-center">My Profile</h3>
              <div className="text-center">
                <img
                  src={ProfilePic}
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


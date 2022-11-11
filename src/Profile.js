import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfilePic from "./assets/Bean.jpeg";
import { GoVerified } from "react-icons/go";
import { RiCloseCircleFill } from "react-icons/ri";
import toast from "react-hot-toast";
import { secureGet } from "./services/HttpService";

export default function Home({ setAuth, userData, setUserData }) {
  // Declarations
  const navigate = useNavigate();

  // Hooks
  useEffect(() => {
    // axiosInterceptor(auth);
    secureGet("/auth/self")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setAuth(null);
        }
      });
  }, []);

  const logOut = () => {
    navigate("/auth/Login");
    setAuth(null);
    setUserData(null);
    console.log("Token removed from localStorage");
    toast.success("Logged out");
  };

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
                {userData?.isEmailVerified ? (
                  <span className="bg-success p-1 px-4 rounded text-white">
                    Verified <GoVerified size="13" className="mb-1 " />
                  </span>
                ) : (
                  <span className="bg-danger p-1 px-4 rounded text-white">
                    Not Verified{" "}
                    <RiCloseCircleFill size="20" className="mb-1" />
                  </span>
                )}

                <h1 className="mt-2 mb-0">{userData?.name}</h1>
                <h3 className="mt-0 mb-0 text-danger">
                  {userData?._org?.name}
                </h3>
                <h5 className="mb-1 mt-1 text-secondary">
                  Role : {userData?.role}
                </h5>
                <span className="mt-0">{userData?.email}</span>
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

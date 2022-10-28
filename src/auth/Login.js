import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-3"> Login</h1>
      <div className="full-width d-flex justify-content-center and align-items-center">
        <form className="rounded p-4 p-sm-3">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              // autoComplete="off"
            />
          </div>
          {/* <p>{errors.email?.message}</p> */}

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              // autoComplete="off"
            />
          </div>
          {/* <p>{errors.password?.message}</p> */}

          <button type="submit" className="btn btn-primary">
            Log in
          </button>
          {<Link to="/auth/register">Create an account</Link>}
        </form>
      </div>
    </>
  );
}

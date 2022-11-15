import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BiHide, BiShow } from "react-icons/bi";
import { post } from "../services/HttpService";

export default function Login({ setAuth }) {
  
  //Declarations
  const navigate = useNavigate();
  const [type, setType] = useState("password");

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Actions
  const handleType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  const onSubmit = (values) => {
    post("/auth/login?captcha=false", values)
      .then((res) => {
        console.log("Response : ", res);
        setAuth(res.data.token);
        navigate("/my-profile");
        toast.success("Login Success!");
        console.log("Token Stored in LocalStorage");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="">
      <h1 className="d-flex justify-content-center mt-5">Login</h1>
      <div className="full-width d-flex justify-content-center and align-items-center">
        <form className="rounded p-4 p-sm-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              autoComplete="on"
              defaultValue="sanket@angularminds.in"
              {...register("email", { required: "Email is required." })}
            />
          </div>
          <p>{errors.email?.message}</p>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type={type}
              className="form-control"
              autoComplete="on"
              defaultValue="sanket98"
              {...register("password")}
            />
            <span onClick={handleType}>
              {type === "password" ? (
                <BiHide size="20" className="mt-2 " />
              ) : (
                <BiShow size="20" className="mt-2 " />
              )}
            </span>
          </div>

          <button type="submit" className="btn btn-primary ">
            Log in
          </button>
          <div className="mt-2">
            <Link style={{ color: "white" }} to="/auth/register">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

export default function Login({ setAuth, auth, API_HOST_URL }) {
  //Declarations
  const Navigate = useNavigate();
  // const API_HOST_URL = useContext(API_Context);

  //States
  const schema = yup.object().shape({
    email: yup.string().required("Email address is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (values) => {
    axios
      .post(`${API_HOST_URL}/auth/login?captcha=false`, values)
      .then((res) => {
        console.log(res);
        setAuth(res.data.token);
        console.log(auth);
        Navigate("/my-profile");
      });
    // const result = userData.find(
    //   (element) =>
    //     element.email === values.email && element.password === values.password
    // );
    // const emailCheck = userData.find(
    //   (element) => element.email === values.email
    // );

    // if (result) {
    //   console.log(result);
    //   // setAuth(result);
    //   // Navigate("/");
    // } else if (!emailCheck) {
    //   alert("User not registerd");
    // } else {
    //   alert("Wrong password");
    // }
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
              {...register("email")}
            />
          </div>
          <p>{errors.email?.message}</p>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password")}
            />
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

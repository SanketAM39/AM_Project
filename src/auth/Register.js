import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";

export default function Reg() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("users") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(data));
  }, [data]);

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Full name is required !")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),

    email: yup
      .string()
      .required("Email address is required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Enter valid email"
      ),

    companyName: yup.string().required("Field is required !"),

    password: yup.string().required("Password is required").min(4).max(12),
    // .matches(
    //   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    //   "Password must follow pattern"
    // )
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password do not match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    setData([...data, values]);
    reset();
  };
  console.log(data);

  return (
    <div>
      <h1 className="d-flex justify-content-center mt-3"> Registration</h1>
      <div className="full-width d-flex justify-content-center and align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded p-4 p-sm-3">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              // autoComplete="off"
              {...register("fullName")}
            />
          </div>
          <p>{errors.fullName?.message}</p>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              // autoComplete="off"
              {...register("email")}
            />
          </div>
          <p>{errors.email?.message}</p>

          <div className="mb-3">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              // autoComplete="off"
              {...register("companyName")}
            />
          </div>
          <p>{errors.companyName?.message}</p>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              // autoComplete="off"
              {...register("password")}
            />
          </div>
          <p>{errors.password?.message}</p>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              // autoComplete="off"
              {...register("confirmPassword")}
            />
          </div>
          <p>{errors.confirmPassword?.message}</p>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {<Link to="/auth/login">Existing User? Log in</Link>}
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Register() {
  const initialValues = {
    fullName: "",
    email: "",
    companyName: "",
    password: "",
    confPassword: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  console.log(formValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            autoComplete="off"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
          />
        </div>
        {/* <p>{formErrors.username}</p> */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            autoComplete="off"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        {/* <p>{formErrors.email}</p> */}
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            autoComplete="off"
            name="companyName"
            value={formValues.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            autoComplete="off"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confPassword" 
            autoComplete="off"
            value={formValues.confPassword}
            onChange={handleChange}
          />
        </div>
        {/* <p>{formErrors.password}</p> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

import React from 'react'

export default function CreateUser() {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="rounded p-4 p-sm-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            // autoComplete="off"
            {...register("name")}
          />
        </div>
        <p>{errors.name?.message}</p>

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
          <label className="form-label">Role</label>
          <input
            type="text"
            className="form-control"
            // autoComplete="off"
            {...register("role")}
          />
        </div>
        <p>{errors.role?.message}</p>
        
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
          />
        </div>
        <p>{errors.password?.message}</p>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            {...register("confirmPassword")}
          />
        </div>
        <p>{errors.confirmPassword?.message}</p>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="d-block mt-2 ">
          <Link style={{ color: "white" }} to="/auth/login">
            Existing User? Log in
          </Link>
        </div>
      </form>
    </div>
  );
}

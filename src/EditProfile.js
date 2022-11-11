import React from 'react'
import { useForm } from 'react-hook-form';

export default function EditProfile({ auth, userData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values.email);
    userData.map(x => x.email === values.email );
  };
  
  return (
    <div>
      <div className="">
        <h1 className="d-flex justify-content-center mt-5">Edit</h1>
        <div className="full-width d-flex justify-content-center and align-items-center">
          <form
            className="rounded p-4 p-sm-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue={auth.fullName}
                // autoComplete="off"
                {...register("fullName")}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                defaultValue={auth.email}
                {...register("email")}
              />
            </div>
            <p>{errors.email?.message}</p>
            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue={auth.companyName}
                // autoComplete="off"
                {...register("companyName")}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <input
                type="text"
                className="form-control"
                {...register("role")}
              />
            </div>
            <button type="submit" className="btn btn-primary ">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

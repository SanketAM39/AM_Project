import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { post } from "../services/HttpService";

export default function Register() {

  // Declarations
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup
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

    company: yup.string().required("Field is required !"),

    password: yup.string().required("Password is required").min(8),
    // .matches,
    // (
    //   '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/',
    //   "Password must follow pattern"
    // ),
    // .matches(
    //   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    //   "Password must follow pattern"
    // ),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password do not match"),
  });

  // Hooks
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Actions
  const onSubmit = (values) => {
    delete values.confirmPassword;
    post("/auth/register?captcha=false", values)
      .then((res) => {
        navigate("/auth/login");
        console.log(res);
        toast.success(`User ${res.request.statusText}`);
        reset();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div style={{ userSelect: "none" }}>
      <h1 className="d-flex justify-content-center mt-3"> Registration</h1>
      <div className="full-width d-flex justify-content-center and align-items-center">
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
            <label className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              // autoComplete="off"
              {...register("company")}
            />
          </div>
          <p>{errors.company?.message}</p>

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
    </div>
  );
}
